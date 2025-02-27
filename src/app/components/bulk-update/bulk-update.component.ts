import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bulk-update',
  imports: [FormsModule],
  templateUrl: './bulk-update.component.html',
  styleUrl: './bulk-update.component.css'
})
export class BulkUpdateComponent implements OnInit {

  userList: any [] = [];

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((ReS:any)=>{
      this.userList =  ReS.data;
    })
  }
  addNew() {
    const newObj =  {
      "departmentId": 0,
      "departmentName": "",
      "departmentLogo": ""
    };
    this.userList.unshift(newObj)
  }

  onSaveAll() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddBulkDepartment",this.userList).subscribe((res:any)=>{
      
    })
  }

}
