import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product-list/product.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {

  message : string ='';
  newProduct : Product = new Product();
  editId : number = 0;
  

  constructor(private productService : ProductService,private location: Location,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{
        if(params.id !== undefined){
          this.editId = params.id;
          this.getProductById(this.editId);
        }else{
          this.editId = 0;
        }        
      }
    )
  }

  getProductById(productId):void{
    this.productService.getProductById(productId).subscribe(
      (product: Product)=>{
        this.newProduct = product[0];
      }
    )
  }

  save(frm):void{
    this.productService.saveProduct(this.newProduct).subscribe(
      (data)=>{
        console.log(data);
        this.message = "Product Saved Successfully...!";
      }
    )
  }

  update():void{
    this.productService.updateProduct(this.newProduct).subscribe(
      (data)=>{
        console.log(data);
        this.message = "Product Updated Successfully...!";
        this.editId = 0;
      }
    )
  }

  back():void {
    this.location.back();
  }

}
