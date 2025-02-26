import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    debugger;
    return this.http.get("https://projectapi.gerasim.in/api/BankLoan/GetAllUsers");
  }

  createNewUser(obj:any) {
    debugger;
    return this.http.post("https://projectapi.gerasim.in/api/BankLoan/RegisterCustomer",obj)
  }

  getSumOfTwoNo(num1: number, num2: number) {
    return num1 + num2;
  }
 
}
