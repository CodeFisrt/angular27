import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertComponent } from "../../resuaableComponent/alert/alert.component";
import { BtnGroupComponent } from "../../resuaableComponent/btn-group/btn-group.component";
import { ProgresBarComponent } from "../../resuaableComponent/progres-bar/progres-bar.component";
import { IVendorList } from '../../models/vendor';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor',
  imports: [NgFor, ReactiveFormsModule,FormsModule, NgIf, AlertComponent, BtnGroupComponent, ProgresBarComponent],
  templateUrl: './vendor.component.html',
  styleUrl: './vendor.component.css'
})
export class VendorComponent implements OnInit {

  http = inject(HttpClient);
  vendorList: IVendorList[] = [];
  alertMessage: string = '';
  showAlertBox: boolean = false;
  myBtnList: string[]= ['New Form','List'];
  selectedTabName: string = 'List';

  vendorObj: IVendorList = {
    contactNo:'',
    emailId: '',
    vendorId: 0 
  }
 
   searchText: FormControl = new FormControl("");
  
  
  percent: string = '';
  vendorForm: FormGroup = new FormGroup({
    vendorId: new FormControl(0),
    vendorName: new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(10),Validators.min(200),Validators.max(300)]),
    contactNo: new FormControl(""),
    emailId: new FormControl("",[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
  })
  userService= inject(UserService)
  router = inject(Router);

  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.data.subscribe((res:any)=>{
      
    }); 
  }

  ngOnInit(): void {
    this.userService.searchChange$.subscribe((res:string)=>{
      
    })
    this.userService.searchBehavor.subscribe((res:string)=>{
      
      
    })
    this.getVendor();
  }

  onTabChange(selectedBtnName: string) {
    
    this.selectedTabName =  selectedBtnName;
  }

  getVendor() {
    this.http.get("https://projectapi.gerasim.in/api/BusBooking/GetBusVendors").subscribe((res: any) => {
      this.vendorList = res;
    }, error => {

    })
  }
  onEdit(data: any) {
    this.router.navigateByUrl('vendor-detail/'+data.vendorId);
    this.router.navigate(['vendor-detail',data.vendorId],)
    // this.vendorForm = new FormGroup({
    //   vendorId: new FormControl(data.vendorId),
    //   vendorName: new FormControl(data.vendorName),
    //   contactNo: new FormControl(data.contactNo),
    //   emailId: new FormControl(data.emailId)
    // })
  }

  onSaveVendor() {
    
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
