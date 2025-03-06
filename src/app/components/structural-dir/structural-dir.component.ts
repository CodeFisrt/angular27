import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  imports: [NgIf,FormsModule,NgFor],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

  isDivVisiable: string = "Yes";
  num1: string = "";
  num2: string = "123";
  isCheked: boolean =  false;
  selecteStudent: string = "";

  cityList: string [] = ["Pune","Nagpur","Mumbai","Solapur"];
  rollNoList: number [] = [11,112,114,1145,11,611,67];

  studentList: any [] = [
    {id:11, name:"Chetan", city:"Pune",isActive: true, attedance: 50,address: {pincode:112233,state:"MAh"},contactNo:['1111111','33222322']},
    {id:33, name:"Rahul", city:"Mumbai",isActive: true, attedance: 30,address: {pincode:223344,state:"Goa"},contactNo:['323432423','1111111','33222322']},
    {id:43, name:"Ankit", city:"Pune",isActive: false, attedance: 50,address: {pincode:445566,state:"Punjab"},contactNo:653453},
    {id:65, name:"Ram", city:"Jalgao",isActive: false, attedance: 25,address: {pincode:776655,state:"MAh"}},
    {id:22, name:"Shyam", city:"Thane",isActive: true, attedance: 90,address: {pincode:332211,state:"MAh"}},
    {id:22, name:"Shyam", city:"Thane",isActive: true, attedance: 90,address: {pincode:555,state:"MAh"}},
    {id:22, name:"Shyam", city:"Thane",isActive: true, attedance: 90,address: {pincode:112233,state:"MAh"},contactNo:['323432423']}
  ]

  onHideDiv1() {
    this.isDivVisiable = "dsfsd"
  }

  onShowDiv1() {
    this.isDivVisiable = "Yes";
    
  }

}
