import { Component } from '@angular/core';
import { FormControl, FormGroup , MinLengthValidator, Validator, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isloading:boolean=false;
  apiError:string=''
  Registerform:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null, [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),
    rePassword:new FormControl(null, [Validators.required]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
  } , {validators:this.RepasswordMatch})
   

  constructor(private _AuthService:AuthService , private _Router:Router){}

  submitRegister(dataform:FormGroup){
 this.isloading= true;

    console.log(dataform.value);
    if(dataform.valid){
      this._AuthService.signUp(dataform.value).subscribe({
        next:(response)=>{
          console.log(response);
          if (response.message === 'success') {
            // navigate page home
            this._Router.navigate(["/login"]);
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

  RepasswordMatch(dataform:any){
   if(dataform.get('password')?.value === dataform.get('repassword')?.value)
   {
    return null
   }
   else
   {
    dataform.get('rePassword')?.setErrors({rePasswordMatch:'rePassword not match password'})
    return {rePasswordMatch:'rePassword not match password'}
  }
  }

}
