import { Component, ElementRef, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { HighlightDirective } from '../../directive/highlight.directive';
import { NumberonlyDirective } from '../../directive/numberonly.directive';
import { CopypasteDirective } from '../../directive/copypaste.directive';
import { PipeComponent } from '../pipe/pipe.component';

@Component({
  selector: 'app-dashboard',
  imports: [EmployeeComponent,HighlightDirective,NumberonlyDirective,CopypasteDirective,PipeComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent {

  @ViewChild("nameRef") textRef! : ElementRef; 
  @ViewChild("myh4") h4Ref!: ElementRef;

  @ViewChild(PipeComponent) myPipeCompo!: PipeComponent;

  readValue() {
    debugger;
    // const textRef =  document.getElementById("txtName") as any;
    // if(textRef) {
    //   alert(textRef.value)
    // }
    if(this.textRef) {
      const textVal=  this.textRef.nativeElement.value;
      alert(textVal)
    }
    if(this.h4Ref) {
      const hrText = this.h4Ref.nativeElement.innerText;
      alert(hrText)
    }
    if(this.myPipeCompo) {
      const courseName =  this.myPipeCompo.courseName;
    }
  }
}
