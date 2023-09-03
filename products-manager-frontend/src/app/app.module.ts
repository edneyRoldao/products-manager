import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductContainerComponent } from './components/product/product-container/product-container.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductItemComponent } from './components/product/product-item/product-item.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { AdminContainerComponent } from './components/admin/admin-container/admin-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductContainerComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductFormComponent,
    AdminContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
