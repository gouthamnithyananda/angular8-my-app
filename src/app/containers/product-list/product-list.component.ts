import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit , OnDestroy{
  ngOnDestroy(): void {
    this.cService$.unsubscribe();
    throw new Error("Method not implemented.");
  }

  constructor( private pService : ProductService,
    private cService: CurrencyService) { }
//@Input() 
currCode: string;

cService$: Subscription;

 pList: Product[] =[
  {
    productId: 1000,
    productImage: 'assets/prouct.png',
    productName: 'Product 1',
    productPrice: 12000,
    productStock: true
  },
  {
    productId: 1001,
    productImage: 'assets/product.png',
    productName: 'Product 2',
    productPrice: 15000,
    productStock: true
  },
  {
    productId: 1002,
    productImage: 'assets/product.png',
    productName: 'Product 2',
    productPrice: 17000,
    productStock: true
  }
 ];


  ngOnInit() {
    this.getCurrency();
    this.pService.getProducts().subscribe(
      (data)=>{
        console.log('success',data);
        this.pList =data as Product[];
      },
      (err)=>{
        console.log('error',err);
      }
    )
  }

  getCurrency(){
    this.cService$ = this.cService.currencyObservable.subscribe(
      (data)=>{
        console.log(data);
    this.currCode =data as string;
      },
      (err)=>{
        console.log('error',err);
      }
    )
    
  }

}
