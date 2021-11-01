import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';





const routes: Routes = [
  {
    path : '',
    redirectTo : '/list',
    pathMatch : 'full'
  },
  {
    path : 'list' , 
    component : ProductListComponent,
    canActivate : [AuthGuard]

  },
  {
    path : 'add' , 
    component : AddProductComponent,
    canActivate : [AuthGuard]

  },
  {
    path : 'change' , 
    component : UpdateProductComponent,

  },

  {
    path : 'register' , 
    component : RegisterComponent
  },
  {
    path : 'login' , 
    component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
