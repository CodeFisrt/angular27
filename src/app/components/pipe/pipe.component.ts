import { CommonModule, DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { AttributeDirComponent } from "../attribute-dir/attribute-dir.component";

@Component({
  selector: 'app-pipe',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, SlicePipe, JsonPipe, AttributeDirComponent],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent implements OnInit,AfterViewInit,AfterViewChecked,AfterContentInit ,AfterContentChecked,OnDestroy{ 
  firstName: string = "chetan";
  lastName = "Jogi"; 
  courseName: string; 
  currentDate = new Date(); 
  studentObj: any = {
    name: 'Chetan',
    city :'Nagpur',
    state: 'Mah',
    mobile:'2312312312'
  } 
  cityList = ["Pune","Mumbai","Jalgao","Nagpur","Thane"];
  isDirCompVisiable: boolean =  false;

  constructor(){
    debugger;
    this.courseName = "full stack development";
  }

 

  ngOnInit(): void {
    debugger;
    this.courseName = "Mern Stack";
    console.log("ngOnInit")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
    
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  changeVisisiable() {
    this.isDirCompVisiable =  !this.isDirCompVisiable;
  }
  ngOnDestroy(): void {
    debugger;
    console.log("ngOnDestroy")
  }

}
