import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

demoData: string = 'test data';

  constructor(private router : Router) { }

  ngOnInit() {
  }


  showAlert(){
    alert(' hello from angular ');
    //this.router.navigate(['/forms/model']);
    //this.router.navigate(['/forms','model','mike']); // restfull params
    this.router.navigate(
      ['/forms','model','mike'],
      {
        queryParams:{age:23}
      }
    );

  }
}
