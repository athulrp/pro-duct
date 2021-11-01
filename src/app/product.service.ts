import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"; //http
import { Router } from '@angular/router';


import { ProductModel } from "./product-list/product.model";





@Injectable({
  providedIn: 'root'
})
export class ProductService {


  product : ProductModel;

  constructor(
    private _http : HttpClient ,
    private _router : Router
  ) { }


  baseUri:string = 'http://localhost:3010';
 
    

  getProducts(){
    return this._http.get(this.baseUri + '/products')
  }
  
  //passing the form data to the server(backend)
  newProduct(item)
  {
    return this._http.post(this.baseUri + '/insert' , {"product" : item}) // sending item named as product
    .subscribe(
      data=> {console.log(data)}
    )

  }

  //delete

  deleteProduct(item){
    // console.log('qqqqqq')
     return this._http.post(this.baseUri + '/delete',{"product" : item})
     

  }



  //update
  updateProduct(product : ProductModel){
    console.log(product)
     return this._http.post(this.baseUri + '/update', {'list' : product})
     

  }


 setter(  product : ProductModel  ){
   this.product=product;
   console.log(product);
 }

 getter(){
   return this.product;
 }

  
  
     





















}
