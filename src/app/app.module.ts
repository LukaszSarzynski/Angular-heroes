import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductAlertComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ProductsListComponent },
      { path: 'product/:productId', component: ProductDetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
