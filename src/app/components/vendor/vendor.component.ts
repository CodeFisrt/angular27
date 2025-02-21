import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-vendor',
  imports: [NgFor, ReactiveFormsModule, NgIf],
  templateUrl: './vendor.component.html',
  styleUrl: './vendor.component.css'
})
export class VendorComponent implements OnInit {

  http = inject(HttpClient);
  vendorList: any[] = [];
  alertMessage: string = '';
  showAlertBox: boolean = false;

  vendorForm: FormGroup = new FormGroup({
    vendorId: new FormControl(0),
    vendorName: new FormControl(""),
    contactNo: new FormControl(""),
    emailId: new FormControl("")
  })


  ngOnInit(): void {
    this.getVendor();
  }

  getVendor() {
    this.http.get("https://projectapi.gerasim.in/api/BusBooking/GetBusVendors").subscribe((res: any) => {
      this.vendorList = res;
    }, error => {

    })
  }
  onEdit(data: any) {
    this.vendorForm = new FormGroup({
      vendorId: new FormControl(data.vendorId),
      vendorName: new FormControl(data.vendorName),
      contactNo: new FormControl(data.contactNo),
      emailId: new FormControl(data.emailId)
    })
  }

  onSaveVendor() {
    debugger;
    const formValue = this.vendorForm.value;
    this.http.post("https://projectapi.gerasim.in/api/BusBooking/PostBusVendor", formValue).subscribe((res: any) => {
      this.showAlertBox = true;
      this.alertMessage = "vendor created success"
      this.getVendor();
      setTimeout(() => {
        this.showAlertBox = false
      }, 5000);

    }, error => {
      this.showAlertBox = true;
      this.alertMessage = "API Call Error"
      setTimeout(() => {
        this.showAlertBox = false
      }, 5000);
    })
  }

}
