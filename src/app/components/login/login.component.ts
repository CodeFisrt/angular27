import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  loginObj: Login =  new Login();
  router = inject(Router);

  onLogin() {
    debugger;
    if(this.loginObj.email == "admin@gmail.com" && this.loginObj.password == "admin@123") {
      this.router.navigateByUrl("/dashbaord");
      sessionStorage.setItem("27user",this.loginObj.email)
    } else {
      alert("wrong Credentials")
    }
  }


}

class Login {
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.password = "";
  }
}
