import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-variables',
  imports: [FormsModule],
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.css'
})
export class VariablesComponent {
  //number, string, boolen, date,
  // object , array
  // null , undefined

  //var name = "asdasd";
  //declaration + inilization
  firstName: string = "";
  rollNo: number = 123;
  isAcitve: boolean = false;
  currentDate: Date = new Date();



  student: any;
  //initialization
  inputType = "checkbox";
  //declaration
  divClassName: string;

  constructor() {
    
    this.divClassName = "primary"
    this.firstName = "Chetan";
    this.firstName = 'chetan';
    // this.firstName = false;
    this.rollNo = 1234;
    this.rollNo = 12.50;
    this.isAcitve = false;
    this.student = "sadasd";
    this.student = 234234;
    this.rollNo = 333; 
  }

  showWlecomeMsg() {
    alert("Welcome b-27")
  }

  showMessage(message: string) {
    alert(message);
    this.firstName = message;
  }

  onCheckChange(event: any) {
    
  }



}
