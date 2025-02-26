import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrollment',
  imports: [],
  templateUrl: './enrollment.component.html',
  styleUrl: './enrollment.component.css'
})
export class EnrollmentComponent implements OnInit {

  http= inject(HttpClient);
  studentList: any[] = [];
  batchList: any []= [];

  ngOnInit(): void {
    this.getAllStudent();
    this.getBatches()
  }

  getAllStudent() {
    this.http.get("https://projectapi.gerasim.in/api/InstituteManagement/GetStudents").subscribe((Res:any)=>{
      this.studentList =  Res
    })
  }
  getBatches() {
    this.http.get("https://projectapi.gerasim.in/api/InstituteManagement/GetBatches").subscribe((Res:any)=>{
      this.batchList =  Res
    })
  }
}
