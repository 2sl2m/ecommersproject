
import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../services/brands.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-brandesdetails',
  templateUrl: './brandesdetails.component.html',
  styleUrls: ['./brandesdetails.component.css']
})
export class BrandesdetailsComponent implements OnInit {

  detailsId:string='' 
  detailsItem:any;
  isloading:boolean=true
  constructor(private BrandsService:BrandsService , private _ActivatedRoute:ActivatedRoute){}

 ngOnInit(): void {
  this._ActivatedRoute.params.subscribe(params =>{
    this.detailsId=params['id']
    
   })


   this.BrandsService.getbrandesdetailsById(this.detailsId).subscribe({
    next: response =>{
  this.isloading=false;
      this.detailsItem=response.data
      console.log(response);
      
    },
    error : err => {
 this.isloading=false;
      console.log(err);
      
    }
   })
 }
}
