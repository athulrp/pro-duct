import { Component, OnInit } from '@angular/core';

import { ProductModel } from "./product.model"; 

import { ProductService } from '../product.service'; // ProductService
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title : String = 'Product List';



  products : ProductModel[] ; //it is contain no. of array from prodect.model.ts file


  //image properties
  imageWidth : number = 50;
  imageMargin : number = 2;

  //set inital case showImage value is false(---)
  showImage : boolean =false;

  constructor(
    private _product : ProductService , 
    private _router : Router
  ) { }

  toggleImage() : void{
    this.showImage = !this.showImage; // user clicking btn ,value becomes [!]true(---)
  }



  ngOnInit(): void {
    // calling the getProducts() and loading the products to products array
    this._product.getProducts()
    .subscribe(
      (data)=>{
      this.products = JSON.parse(JSON.stringify(data));
      
      
      console.log(this.products);

      

      
    });


    
   
  }

   //delete

  removeProduct(product : any , index)
  {

    
    // console.log('sdcfasfaf')
    this._product.deleteProduct(product)
    .subscribe(()=>{
      this.products.splice(index,1)
    })
   
    


  }

    //goto update form

    

    editProduct(product){
      this._product.setter(product);
      this._router.navigate(['/change'])
    }
  


  

}
