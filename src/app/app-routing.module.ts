import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

const routes: Routes = [
  { path: '', component: ListProductsComponent},
  { path: 'add', component: AddEditProductComponent},
  { path: 'edit/:id', component: AddEditProductComponent},
  { path: 'form', component: ProductFormComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
