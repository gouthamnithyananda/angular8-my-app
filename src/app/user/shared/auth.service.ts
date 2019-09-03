import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string){
    const api = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`;
    const data = {email,password,returnSecureToken:true};
    return this.http.post(api,data);
  }

  signUp(email: string,password:string){
    const api = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`;
    const data = {email,password,returnSecureToken:true};
    return this.http.post(api,data);
  }

  storeUser(user){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public get currentUser(){
    if(localStorage.getItem('user')){
      return JSON.parse(localStorage.getItem('user'));
    }
    return null;
  }
}
