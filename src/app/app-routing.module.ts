import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { ProductFormModule } from './components/product-form/product-form.module';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
 
  
  {path:'v1/auth/login', loadChildren: ()=> 
  import('./components/login/login.module').then(m => m.LoginModule)
},

{path:'v1/auth/register', loadChildren: ()=> 
import('./components/register/register.module').then(m => m.RegisterModule)
},

{path:'v1/products', loadChildren: ()=> 
import('./components/list-products/list-products.module').then(m => m.ListProductsModule)
},

{path:'v1/products/add', loadChildren: ()=> 
import('./components/add-edit-product/add-edit-product.module').then(m => m.AddEditProductModule)
},

{path:'v1/products/edit/:id', loadChildren: ()=> 
import('./components/add-edit-product/add-edit-product.module').then(m => m.AddEditProductModule)
},

{path:'v1/users', canActivate: [AuthGuard], loadChildren: ()=> 
  import('./components/list-users/list-users.module').then(m => m.ListUsersModule ) 
},

  {path:'v1/users/add', canActivate: [AuthGuard], loadChildren: ()=> 
  import('./components/add-user/add-user.module').then(m => m.AddUserModule)
},

{path:'v1/users/edit/:id', canActivate: [AuthGuard], loadChildren: ()=> 
import('./components/add-edit-user/add-edit-user.module').then(m => m.AddEditUserModule)
},

  { path: 'form', loadChildren: ()=> 
  import('./components/product-form/product-form.module').then(m => ProductFormModule)},

  {path: '', redirectTo: 'v1/products', pathMatch: 'full'},

  {path: '**', redirectTo: 'v1/products', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
