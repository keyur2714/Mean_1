import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product.model';

@Injectable()
export class ProductService {

    appUrl : string = 'api/products';

    constructor(private httpClient: HttpClient){}


    getProductList():Observable<Product[]>{
        return this.httpClient.get<Product[]>(this.appUrl);
    }

    saveProduct(product: Product):Observable<any>{
        return this.httpClient.post<any>(this.appUrl,product);
    }
}