import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
 
  baseUrl:string='https://ecommerce.routemisr.com/'

constructor( private _HttpClient:HttpClient) { }



}
