import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListShoppingCartComponent } from './list-shopping-cart.component';

const routes: Routes = [
  { path: '', component: ListShoppingCartComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListShoppingCartRoutingModule { }
