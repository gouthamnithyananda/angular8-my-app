import { Component, OnInit } from '@angular/core';
import { MenuModel } from '../../shared/menu.model';
import { MenuService } from '../../shared/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[MenuService]
})
export class MenuComponent implements OnInit {

  menuItems : MenuModel[] =[]
  constructor(private mService:MenuService) { }

  ngOnInit() {
 this.mService.getMenuList().subscribe(
   data=> this.menuItems = data as MenuModel[],
   err => console.log('error',err)
 )
  }

}
