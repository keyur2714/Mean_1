import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product-list/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {

  message : string ='';
  newProduct : Product = new Product();

  constructor(private productService : ProductService,private location: Location) { }

  ngOnInit() {
  }

  save(frm):void{
    this.productService.saveProduct(this.newProduct).subscribe(
      (data)=>{
        console.log(data);
        this.message = "Product Saved Successfully...!";
      }
    )
  }

  back():void {
    this.location.back();
  }

}
