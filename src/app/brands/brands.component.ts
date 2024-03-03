import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../services/brands.service';
import { brand } from '../interfaces/brands';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  BrandList:brand[]=[]
  isloading:boolean=true;
  flag:boolean=true;
  modelImg:string='';
constructor(private _BrandsService:BrandsService){}

ngOnInit(): void {
  this._BrandsService.getAllbrands().subscribe({
    next : response =>{
      this.isloading=false
this.BrandList=response.data
      console.log(response.data);
      
    },
    error:err =>{
      this.isloading=false
      console.log(err);
      
    }
  })
}

}
