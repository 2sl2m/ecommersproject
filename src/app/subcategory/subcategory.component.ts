import { product } from './../interfaces/product';

import { Subcategory } from './../subcategory';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from './../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';







@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  isloading:boolean=true;
  SubcategoryId:string=''
  subcategoryList:any;
  constructor(private _CategoriesService:CategoriesService , private _ActivatedRoute:ActivatedRoute, private _ProductService:ProductService){}
ngOnInit(): void {
 this._ActivatedRoute.params.subscribe(params =>{
  this.SubcategoryId=params['id']
 })
  
  this._ProductService.getAllsubcategory().subscribe({
    next:response =>{
      console.log(response);
      this.isloading=false
      this.subcategoryList= response.data
    },
    error:err =>{
      this.isloading=false
      console.log(err);
      
    }
  })
}

}
