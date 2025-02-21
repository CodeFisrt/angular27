import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule,JsonPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  public userList: any [] = [];
  userObj: any = {
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "password": ""
  }
   http = inject(HttpClient);


  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.http.get("https://projectapi.gerasim.in/api/BankLoan/GetAllUsers").subscribe((res:any)=>{
      this.userList = res.data;
    })
  }

  onEdit(data: any) {
    debugger;
    this.userObj =  data;
  }
 
  onSaveUser() {
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/BankLoan/RegisterCustomer",this.userObj).subscribe((res:any)=>{
      debugger;
      if(res.result) {
        alert("Customer Created Success");
        this.getUser();
      } else {
        alert(res.message)
      }
    })
  }

  onUpdateUser() {
    this.http.post("https://projectapi.gerasim.in/api/BankLoan/updateUser",this.userObj).subscribe((res:any)=>{
      debugger;
      if(res.result) {
        alert("Customer UPdated Success");
        this.getUser();
      } else {
        alert(res.message)
      }
    })
  }

  onDelete(id: number) {
    debugger;
    const isDelete =  confirm("Are you Sure want to Delete");
    if(isDelete == true) {
      this.http.delete("https://projectapi.gerasim.in/api/BankLoan/DeleteUserByUserId?userId=" +id).subscribe((res:any)=>{
        debugger;
        if(res.result) {
          alert("Customer UPdated Success");
          this.getUser();
        } else {
          alert(res.message)
        }
      })
    }
  }


}
