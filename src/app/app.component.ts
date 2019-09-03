import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentCurrency: string = 'INR';
  getCode(code){
    console.log('in app',code);
    this.currentCurrency =  code;
  }

}
