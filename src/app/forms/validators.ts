import { FormControl } from '@angular/forms';
export function zipCodeValidator(ctrl: FormControl) {
//    if (ctrl.value == 560001 || !ctrl.hasError('required')) {
    if (ctrl.value == 560001){
       //valid
       return null;
   }
   return {
       zipcode: { validCode: 560001, enteredCode: ctrl.value }
   };
}