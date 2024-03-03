import { Component } from '@angular/core';
import { FormControl, FormGroup , MinLengthValidator, Validator, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isloading:boolean=false;
  apiError:string=''
  logInform:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null, [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),
  })
   

  constructor(private _AuthService:AuthService , private _Router:Router){}

  submitlogIn(dataform:FormGroup){
 this.isloading= true;

    console.log(dataform.value);
    if(dataform.valid){
      this._AuthService.signIn(dataform.value).subscribe({
        next:(response)=>{
          console.log(response);
          if (response.message === 'success') {
            //  navigate page home
             localStorage.setItem('usertoken',response.token)
            this._AuthService.decodeUsertoken();
            this._Router.navigate(["/home"]);
            this.isloading=false

          }
        },
        error:(err)=>{
          console.log(err);
  this.isloading=false
  this.apiError=err.error.message

          
        }
      })
    }
  }
}
