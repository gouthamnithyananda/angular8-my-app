import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'


import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { ConversionPipe } from './pipes/conversion.pipe';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ModelDrivenComponent } from './forms/model-driven/model-driven.component';
import { ZipCodeDirective } from './directives/zip-code.directive';
import { ImgFallbackDirective } from './directives/img-fallback.directive';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { UserModule } from './user/user.module';
import { TokenInterceptorService } from './service/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ProductComponent,
    ProductListComponent,
    CurrencyComponent,
    ConversionPipe,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    ZipCodeDirective,
    ImgFallbackDirective,
    ErrorPageComponent
    
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule, HttpClientModule, UiModule,
    AppRoutingModule, UserModule
  ],
  providers: [
    //any service registered here will be a singleton and availabel global
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
