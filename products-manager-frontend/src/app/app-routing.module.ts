import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductContainerComponent } from './components/product/product-container/product-container.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';

const routes: Routes = [{
  path: 'products',
  children: [
    { path: '', component: ProductContainerComponent },
    { path: 'form', component: ProductFormComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
