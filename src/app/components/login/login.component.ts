import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // userList: Login[]=[
  //   {email:"",password:'' },
  //   {email:"",password:'' },
  //   {email:"",password:'' },
  //   {email:"",password:'' }
  // ]

  loginObj: Login = new Login();
  router = inject(Router);
  http = inject(HttpClient);
  userSrv = inject(UserService)

  onLogin() {

    // const isExist =  this.userList.find(m=>m.email == this.loginObj.email && m.password == this.loginObj.password);

    // if(isExist) {
    //   this.router.navigateByUrl("/dashbaord");
    //   sessionStorage.setItem("27user",this.loginObj.email)
    // } else {
    //   alert("wrong Credentials")
    // }
    debugger;
    // this.http.post("https://projectapi.gerasim.in/api/BankLoan/login", this.loginObj).subscribe((res: any) => {
    //   debugger;
    //   if (res.result) {
    //     this.router.navigateByUrl("/dashbaord");
    //     sessionStorage.setItem("27user", JSON.stringify(res.data))
    //   } else {
    //     alert(res.message)
    //   }
    // }) 
    this.userSrv.login(this.loginObj).subscribe((res: any) => {
        debugger;
        if (res.result) {
          this.router.navigateByUrl("/dashbaord");
          sessionStorage.setItem("27user", JSON.stringify(res.data))
        } else {
          alert(res.message)
        }
      },error=>{

      })
  }


}

class Login {
  userName: string;
  password: string;

  constructor() {
    this.userName = "";
    this.password = "";
  }
}
