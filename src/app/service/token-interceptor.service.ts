import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../user/shared/auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{
  
  
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if(req.url.toLocaleLowerCase().includes('identitytoolkit')){
  return next.handle(req);
    }else{
    const token = this.authService.currentUser.idToken;
    //clone original and modify
    const request = req.clone({
      url:`${req.url}?auth=${token}`
    })
    return next.handle(request);
  }}

  constructor(private authService: AuthService) { }
}
