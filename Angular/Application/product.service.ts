import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IProduct } from './product';
import * as d3 from 'd3';

@Injectable()
export class ProductService {
   private _producturl='/assets/product.json';
   constructor(private _http: Http){}
   
   getproducts(): Observable<IProduct[]> {
      return this._http.get(this._producturl)
      .map((response: Response) => <IProduct[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
   }
}