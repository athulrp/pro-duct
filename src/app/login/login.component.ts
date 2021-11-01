import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loginedUser :any ={};

  constructor(
    private _auth : AuthService,
    private _router : Router,
    
  ) { }



  



  loginUser(){

    
    this._auth.loginUser(this.loginedUser)
    .subscribe(
      // res=>console.log(res),
      res=>{
        localStorage.setItem('token',res.token)
        //after successful login navigate to product-list page
        this._router.navigate(['/'])



      },
      // err=>console.log(err)
      err=>alert('Login Failed : Invalid Username or Password')
    )
  }


  ngOnInit(): void {}


  



  




}
