import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api-call',
  imports: [JsonPipe],
  templateUrl: './get-api-call.component.html',
  styleUrl: './get-api-call.component.css'
})
export class GetApiCallComponent implements OnInit {

  rfqList: any [] = [];
  customerList: any []= [];

  https = inject(HttpClient);

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
   this.getAllRFQ();
    this.getAllCustomer();
    this.getCustomer();

  }

  getCustomer() {
    fetch("https://projectapi.gerasim.in/api/RfqTracker/GetAllCustomer")
    .then(response => response.json())
    .then(data => {
      debugger;
      console.log(data)}) 
     
    
  }

  getAllRFQ() {
    this.http.get("https://projectapi.gerasim.in/api/RfqTracker/GetRFQs").subscribe((res:any) => {
      debugger;
      this.rfqList =  res;
    });
  }


  getAllCustomer() {
    this.http.get("https://projectapi.gerasim.in/api/RfqTracker/GetAllCustomer").subscribe((res:any)=>{
      debugger;
      this.customerList =  res.data;
    })
  }


}
