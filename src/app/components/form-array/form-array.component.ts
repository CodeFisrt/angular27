import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-form-array',
  imports: [ReactiveFormsModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css'
})
export class FormArrayComponent {


  employeeForm: FormGroup =  new FormGroup({
    name: new FormControl("",[Validators.required]),
    city: new FormControl(""),
    addrss: new FormControl(""),
    empid: new FormControl(""),
    familyList: new FormArray([])
  });
  userService = inject(UserService);
  loggedUserName: string = "";


  constructor() {
    this.AddNewFailyForm();
    this.loggedUserName =  this.userService.loggedUserNAme;
    this.readUserName();
  }

  readUserName() {
    console.log("readUserName")
    this.loggedUserName =  this.userService.loggedUserNAme;
  }

  get loggedUser():string {
    return this.userService.loggedUserNAme;
  }

  getFamilyArray() {
    const name =  this.loggedUser;
    return this.employeeForm.get("familyList") as FormArray;
  }

  get familyArray (): FormArray {
    return this.employeeForm.get("familyList") as FormArray;
  }

  AddNewFailyForm() {
    const familyForm = new FormGroup({
      memberName: new FormControl("aaa",[Validators.required]),
      age: new FormControl("22"),
      relation: new FormControl("")
    }) 
    this.getFamilyArray().push(familyForm);
  }

  removeForm(index: number) {
    const newIndex=  index-1;
    const formArrayy = this.employeeForm.controls['familyList'] as FormArray;

    formArrayy.removeAt(index)
  }

  onSave() {
    const formValue =  this.employeeForm.value;
    debugger;
  }
  


  emply = {
    name:'',
    city:'',
    addrss:'',
    empid:'',
    family: [
      { memberName: '',age:'',relations:''},
      { memberName: '',age:'',relations:''},
      { memberName: '',age:'',relations:''}
    ]
  }

}
