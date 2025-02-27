import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { AlertComponent } from '../../resuaableComponent/alert/alert.component';
import { BtnGroupComponent } from "../../resuaableComponent/btn-group/btn-group.component";
import { UserClass } from '../../models/User';

 

@Component({
  selector: 'app-user',
  imports: [FormsModule, JsonPipe, AlertComponent, BtnGroupComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  myMessage = "This is User Page";
  public userList: any [] = [];
  userObj: UserClass = new UserClass();
  http = inject(HttpClient);
  userSrv=  inject(UserService);
  isShowLoader: boolean =  false;
  isApiInprogress: boolean = false;


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
    this.isShowLoader =  true;
    this.userSrv.getAllUsers().subscribe((res:any)=>{
      debugger;
      this.userList =  res.data; 
      this.isShowLoader =  false;
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
    if(this.isApiInprogress == false) {
      this.isApiInprogress =  true;
      this.userSrv.createNewUser(this.userObj).subscribe((res:any)=>{
          debugger;
          this.isApiInprogress =  false;
          if(res.result) {
            alert("Customer Created Success");
            this.getUser();
          } else {
            alert(res.message)
          }
        })
    }
   
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

