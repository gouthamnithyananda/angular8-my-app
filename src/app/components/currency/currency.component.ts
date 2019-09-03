import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  //@Output() selectedCode = new EventEmitter();
  currencies: String[] = ['INR','USD','CAD','EUR','GBP'];
  constructor(private cService: CurrencyService) { }

  updateCode(c){
    console.log("changed",c);
   // this.selectedCode.emit(c);
   this.cService.updateCurrency(c);
  }

  ngOnInit() {
  }

}
