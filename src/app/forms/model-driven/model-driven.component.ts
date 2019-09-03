import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validator, Validators } from '@angular/forms'
import { zipCodeValidator } from '../validators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

  userForm:FormGroup = new FormGroup({
    name:new FormControl('test',[Validators.required,Validators.minLength(3)]),
    age:new FormControl(null,[Validators.required]),
    address : new FormGroup({
      city:new FormControl(null,{updateOn:'change' ,validators:[Validators.required]}),
    pincode:new FormControl(null,[Validators.required,zipCodeValidator])
    })
    
  },{updateOn:'submit'});

  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(
      (par) => this.userForm.patchValue({name : par.get('name')})
    );

    //query PARAMS:/forms/model/mike?age=12
    this.activateRoute.queryParamMap.subscribe(
      (par) => {
        this.userForm.patchValue({ age: par.get('age')})
      }
    );

  }
  public get addressObj() : FormGroup {
    return this.userForm.get('address') as FormGroup;
  }
  

}
