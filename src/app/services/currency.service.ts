import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private code: string = 'INR';
  private currenySubject = new BehaviorSubject<string>(this.code);
  currencyObservable = this.currenySubject.asObservable();

  constructor() { }
  
  updateCurrency(code: string){
    this.code =  code;
    this.currenySubject.next(this.code);
  }
}
