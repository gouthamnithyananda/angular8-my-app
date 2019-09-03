import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @Input() pData:Product = null;
  @Input() cCode:String;
  
  // {
  //   productId: 1000,
  //   productImage: '../../../assets/product.png',
  //   productName: 'Product 1',
  //   productPrice: 12000,
  //   productStock: true
  // }

  constructor() { }

  ngOnInit() {
  }

}
