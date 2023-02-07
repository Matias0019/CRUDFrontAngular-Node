import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { ProductFormModule } from './components/product-form/product-form.module';

const routes: Routes = [
 
  {path:'', loadChildren: ()=> 
  import('./components/list-products/list-products.module').then(m => m.ListProductsModule)
},
  {path:'add', loadChildren: ()=> 
  import('./components/add-edit-product/add-edit-product.module').then(m => m.AddEditProductModule)
},
{path:'edit/:id', loadChildren: ()=> 
  import('./components/add-edit-product/add-edit-product.module').then(m => m.AddEditProductModule)
},
  { path: 'form', loadChildren: ()=> 
  import('./components/product-form/product-form.module').then(m => ProductFormModule)},

  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
