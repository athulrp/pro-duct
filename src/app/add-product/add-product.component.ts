import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

import { Router } from '@angular/router';

import { ProductModel } from '../product-list/product.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  title : String = 'Add Product';

  constructor(
    private _product : ProductService ,
    private _router : Router
    ) { }

  productItem = new ProductModel(null,null,null,null,null,null,null,null);



  ngOnInit(): void {

    // this.productItem = this._product.getter();
  }

  AddProduct()
  {
    // console.log(this.productItem)
    this._product.newProduct(this.productItem)
      console.log('Called');
      alert('Success');
      this._router.navigate(['/']);

  }

  
}
