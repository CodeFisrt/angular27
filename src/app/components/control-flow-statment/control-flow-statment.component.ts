import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgresBarComponent } from "../../resuaableComponent/progres-bar/progres-bar.component";

@Component({
  selector: 'app-control-flow-statment',
  imports: [FormsModule, ProgresBarComponent],
  templateUrl: './control-flow-statment.component.html',
  styleUrl: './control-flow-statment.component.css'
})
export class ControlFlowStatmentComponent {

  isDivVisiable: string = "Yes";

  num1: string = "";
  num2: string = "123";
  isCheked: boolean =  false;
  dayStartChar: string = "";
  selecteStudent: string = "";

  cityList: string [] = ["Pune","Nagpur","Mumbai","Solapur"];
  rollNoList: number [] = [11,112,114,1145,11,611,67];

  studentList: any [] = [
    {id:11, percentage: 12, name:"Chetan", city:"Pune",isActive: true, attedance: 50,address: {pincode:112233,state:"MAh"},contactNo:['1111111','33222322']},
    {id:33, percentage: 45, name:"Rahul", city:"Mumbai",isActive: true, attedance: 30,address: {pincode:223344,state:"Goa"},contactNo:['323432423','1111111','33222322']},
    {id:43, percentage: 76, name:"Ankit", city:"Pune",isActive: false, attedance: 50,address: {pincode:445566,state:"Punjab"},contactNo:[]},
    {id:65, percentage: 34, name:"Ram", city:"Jalgao",isActive: false, attedance: 25,address: {pincode:776655,state:"MAh"}},
    {id:22, percentage: 90, name:"Shyam", city:"Thane",isActive: true, attedance: 90,address: {pincode:332211,state:"MAh"}},
    {id:22, percentage: 100, name:"Shyam", city:"Thane",isActive: true, attedance: 90,address: {pincode:555,state:"MAh"}},
    {id:22, percentage: 50, name:"Shyam", city:"Thane",isActive: true, attedance: 90,address: {pincode:112233,state:"MAh"},contactNo:['323432423']}
  ]  

  onHideDiv1() {
    this.isDivVisiable = "dsfsd"
  }

  onShowDiv1() {
    this.isDivVisiable = "Yes";
    
  }
}
