import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3010/api/register";

  private _loginUrl = "http://localhost:3010/api/login";


  constructor(private _http : HttpClient) { }

  registerUser(user){
    return this._http.post<any>(this._registerUrl,user);
  }
  loginUser(user){
    return this._http.post<any>(this._loginUrl,user);
  }


  //auth Guard
  loggedIn(){

    return !!localStorage.getItem('token');

  }

  //token Interceptor
  getToken(){
    return localStorage.getItem('token')
  }
}
