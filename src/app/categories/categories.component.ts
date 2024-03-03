
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { slider } from '../category-slider';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  isloading:boolean= true

categoryList:slider[]=[];

constructor(private _ProductService:ProductService){}
 ngOnInit(): void {
   this._ProductService.getAllcategory().subscribe({
    next: response =>{
  this.isloading= false
      this.categoryList=response.data;
    console.log(response);
    
    },
    error: err => { 
  this.isloading= false
      console.log(err);
      
    }
   })
 }

}
