import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(null,
      [Validators.required,Validators.email]),
      password: new FormControl(null,
        [Validators.required,Validators.minLength(6)])
  },{updateOn:'blur'});

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  login(){
    const {email,password} = this.loginForm.value;
    this.authService.signIn(email,password).subscribe(
      user => {
        console.log('success',user);
        this.authService.storeUser(user);
      },
      err =>{
        console.log('error',err);
      }
    );
  }

  register(){
    const {email,password} = this.loginForm.value;
    this.authService.signUp(email,password).subscribe(
      user => {
        console.log('success',user);
        this.authService.storeUser(user);
      },
      err =>{
        console.log('error',err);
      }
    );
  }

  

}
