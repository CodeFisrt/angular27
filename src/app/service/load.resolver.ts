import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { delay, of } from 'rxjs';

export const loadResolver: ResolveFn<any> = (route, state) => {
  
  const http = inject(HttpClient);
  const myLableData = {
    nameHeader: 'Vendor Name',
    contactNo:'Mobile No',
    email: 'Email-Id',
    action: 'Actions'
  }
  return http.get("https://projectapi.gerasim.in/api/BusBooking/GetBusVendors");
 // return of(myLableData).pipe(delay(3000));
 
  
};
