import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { zipCodeValidator } from '../forms/validators';

@Directive({
  selector: '[appZipCode]',
  providers: [
    {
      provide:NG_VALIDATORS,
      useValue:zipCodeValidator,
      multi:true
    }
  ]
})
export class ZipCodeDirective {

  constructor() { }

}
