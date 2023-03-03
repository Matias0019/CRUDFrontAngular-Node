import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditShoppingCartComponent } from './add-edit-shopping-cart.component';

const routes: Routes = [
  { path: '', component: AddEditShoppingCartComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEditShoppingCartRoutingModule { }
