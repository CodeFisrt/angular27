import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  searchChange$: Subject<string> = new Subject<string>;
  loggedUserNAme: string = "Chetan";

  searchBehavor: BehaviorSubject<string> = new BehaviorSubject<string>("");


  constructor(private http: HttpClient) { }

  getAllUsers() {
    
    return this.http.get("https://projectapi.gerasim.in/api/BankLoan/GetAllUsers");
  }

  createNewUser(obj:any) {
    
    return this.http.post("https://projectapi.gerasim.in/api/BankLoan/RegisterCustomer",obj)
  }

  login(obj: any) {
    return this.http.post("https://projectapi.gerasim.in/api/UserApp/login",obj);
  }

  getSumOfTwoNo(num1: number, num2: number) {
    return num1 + num2;
  }
 
}
