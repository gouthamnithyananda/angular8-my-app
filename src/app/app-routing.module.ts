import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ModelDrivenComponent } from './forms/model-driven/model-driven.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './user/components/login/login.component';


const routes: Routes =[
{path:'',component: DemoComponent},
{path:'products',component: ProductListComponent},
{path:'login',component: LoginComponent},
{path:'forms',canActivate:[AuthGuard],
children:[
  {path:'',redirectTo:'template',pathMatch:'full'},
  {path:'template',component:TemplateDrivenComponent},
  {path:'model/:name',component: ModelDrivenComponent}
]},
{path:'**',component: ErrorPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
