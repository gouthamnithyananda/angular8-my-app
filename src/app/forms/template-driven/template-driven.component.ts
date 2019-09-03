import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
  providers:[DataService]
})
export class TemplateDrivenComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

 
  saveDate(f:NgForm){
    console.log("form submitted : " ,FormData);
    if(f.valid){
//submit form data to server here

this.dataService.storeData(f.value).subscribe(
  data => console.log('succes',data),
  err => console.log('error',err)
);
    }

  }

  loadData(f:NgForm){
   const user = {
      "name": "Goutham",
      "age": "30",
      // "address": {
      //   "city": "Mysore",
      //   "pincode": "570028"
      // }
    }
     f.form.patchValue(user);
    }
  
}
