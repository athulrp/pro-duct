import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from '../product-list/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  title : String = 'Update Product';

  productItem = new ProductModel(null,null,null,null,null,null,null,null);


  constructor(
    private _product : ProductService,
    private _router : Router


    ) { }

  ngOnInit(): void {
    // this.getProduct(id);
    // Automatically fill the fields
        this.productItem = this._product.getter();
        

  }

  upProduct(productItem){

    // console.log(productItem);


    this._product.updateProduct(productItem)
    .subscribe(
      res=>{
        console.log(res);
        this._router.navigate(['/list'])
        
      },
      err=>{
        console.log(err);
        
      }
    )



  }
 
  

}
