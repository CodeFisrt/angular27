import { Component, inject } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form-array',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css'
})
export class FormArrayComponent {


  employeeForm: FormGroup =  new FormGroup({
    name: new FormControl("",[Validators.required]),
    city: new FormControl(""),
    addrss: new FormControl(""),
    isActive: new FormControl(false), 
    password: new FormControl(""),
    confirmPassword: new FormControl("", [Validators.required]),
    empid: new FormControl(""),
    projectName: new FormControl(""),
    familyList: new FormArray([])
  },{ validators: checkConfirmPasswordValidation });

  userService = inject(UserService);
  loggedUserName: string = "";
  checkConfirmPasswordValidation(form: FormGroup) {
    const password = form.get("password")?.value;
    const confirmPqassword = form.get("confirmPassword")?.value;
    return password === confirmPqassword ? null :{mismatch: true}
  }

  constructor() {
    //this.AddNewFailyForm();
    this.loggedUserName =  this.userService.loggedUserNAme;
    this.readUserName();
    this.employeeForm.controls['isActive'].valueChanges.subscribe((res:boolean)=>{
      
      this.onActiveChnage();
    })
    this.employeeForm.valueChanges.subscribe((res:any)=>{
      
    });

    this.employeeForm.patchValue({addrss:'Nagpur'})

    // this.employeeForm.setValue({name: 'aditya',city:'Mumabi',isActive:true,
    //   addrss: 'Pune',empid:11,projectName:'ERP'})
  }
  onCityChange() {
    const val =  this.employeeForm.get("city")?.value;
    if(val !== "") {
      this.employeeForm.controls['isActive'].setValue(true)
    } else {
      this.employeeForm.controls['isActive'].setValue(false)
    }
  }

  onActiveChnage() {
    
    const checkedVale = this.employeeForm.controls['isActive'].value;
    const activeVale =  this.employeeForm.get('isActive')?.value;
    if(activeVale == true) {
      this.employeeForm.controls['projectName'].addValidators([Validators.required]); 
    } else {
      this.employeeForm.get("projectName")?.removeValidators([Validators.required]);
      this.employeeForm.get("projectName")?.clearValidators(); 
    }
    this.employeeForm.controls['projectName'].updateValueAndValidity();
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

// export function checkConfirmPasswordValidation(form: FormGroup): ValidatorFn {
//   const password = form.get("password")?.value;
//   const confirmPqassword = form.get("confirmPassword")?.value;
//   return password === confirmPqassword ? null :{mismatch: true}
// }
// export const checkConfirmPasswordValidation:ValidatorFn = (form: FormGroup) => {
//   const password = form.get("password")?.value;
//   const confirmPassword = form.get("confirmPassword")?.value;
//   return password === confirmPassword ?  null: { mismatch: true };
// };

export const checkConfirmPasswordValidation: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const formGroup = control as FormGroup; // ✅ Cast control to FormGroup
  const password = formGroup.get("password")?.value;
  const confirmPassword = formGroup.get("confirmPassword")?.value;

  return password === confirmPassword ? null : { mismatch: true };
};
