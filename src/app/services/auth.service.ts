import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

userData=new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient , private _Router:Router) {
   if(localStorage.getItem('usertoken')) {
    this.decodeUsertoken();
   }
   }
  decodeUsertoken(){
     let usertoken= JSON.stringify(localStorage.getItem('usertoken')) 
     let decodedtoken:any= jwtDecode(usertoken)
     this.userData.next(decodedtoken);
    console.log('userData');
    
  }
   baseUrl:string='https://ecommerce.routemisr.com';
  signUp(data:any):Observable<any>
  {
 return  this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signup`,data)
  }

  signIn(data:any):Observable<any>
  {
 return  this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signin`,data)
  }

  logOut(){
    localStorage.removeItem('usertoken')
    this.userData.next(null);
    this._Router.navigate(['/login'])
  }
}
