import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { HighlightDirective } from '../../directive/highlight.directive';
import { NumberonlyDirective } from '../../directive/numberonly.directive';
import { CopypasteDirective } from '../../directive/copypaste.directive';
import { PipeComponent } from '../pipe/pipe.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  imports: [EmployeeComponent, HighlightDirective, NumberonlyDirective, CopypasteDirective, PipeComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent implements OnInit {

  @ViewChild("nameRef") textRef!: ElementRef;
  @ViewChild("myh4") h4Ref!: ElementRef;

  @ViewChild(PipeComponent) myPipeCompo!: PipeComponent;
  userList: any[] = [];
  http = inject(HttpClient)

  ngOnInit(): void {
    this.getUser()
  }
  readValue() {
    
    // const textRef =  document.getElementById("txtName") as any;
    // if(textRef) {
    //   alert(textRef.value)
    // }
    if (this.textRef) {
      const textVal = this.textRef.nativeElement.value;
      alert(textVal)
    }
    if (this.h4Ref) {
      const hrText = this.h4Ref.nativeElement.innerText;
      alert(hrText)
    }
    if (this.myPipeCompo) {
      const courseName = this.myPipeCompo.courseName;
    }
  }

  getUser() { 
    alert("First")
    this.http.get("https://projectapi.gerasim.in/api/UserApp/GetAllUsers").subscribe((res: any) => {
      this.userList = res.data;
      alert('Data')
    },error=>{ 
    })
    alert("Last")
  }
}
