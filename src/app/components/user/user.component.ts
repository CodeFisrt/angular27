import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { AlertComponent } from '../../resuaableComponent/alert/alert.component';
import { BtnGroupComponent } from "../../resuaableComponent/btn-group/btn-group.component";

@Component({
  selector: 'app-user',
  imports: [FormsModule, JsonPipe, AlertComponent, BtnGroupComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  myMessage = "This is User Page";
  public userList: any [] = [];
  userObj: any = {
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "password": ""
  }
   http = inject(HttpClient);
   userSrv=  inject(UserService);


  ngOnInit(): void {
    this.getUser();
    debugger;
    const result  =  this.userSrv.getSumOfTwoNo(4,8);
    debugger;
  }



  getUser() {
    // this.http.get("https://projectapi.gerasim.in/api/BankLoan/GetAllUsers").subscribe((res:any)=>{
    //   this.userList = res.data;
    // })
    debugger;
    this.userSrv.getAllUsers().subscribe((res:any)=>{
      debugger;
      this.userList =  res.data;
    })
  }

  onEdit(data: any) {
    debugger;
    this.userObj =  data;
  }
 
  onSaveUser() {
    debugger;
    // this.http.post("https://projectapi.gerasim.in/api/BankLoan/RegisterCustomer",this.userObj).subscribe((res:any)=>{
    //   debugger;
    //   if(res.result) {
    //     alert("Customer Created Success");
    //     this.getUser();
    //   } else {
    //     alert(res.message)
    //   }
    // })
    debugger;
    this.userSrv.createNewUser(this.userObj).subscribe((res:any)=>{
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
