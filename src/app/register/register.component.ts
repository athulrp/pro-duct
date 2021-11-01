import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registeredUser : any={};
  constructor(
    private _auth : AuthService,
    private _router : Router
    ) { }

  registerUser(){

    // console.log(this.registeredUser)
    this._auth.registerUser(this.registeredUser)
    .subscribe(
      // res=>console.log(res),
      res=>{

        localStorage.setItem('token',res.token)

        alert('Successfully Registered')

        //after successful registration navigate to product-list page

        this._router.navigate(['/'])




      },
      err=>console.log(err)
    )
    
  }





  ngOnInit(): void {
  }

}
