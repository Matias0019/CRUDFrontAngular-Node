import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListShoppingCartRoutingModule } from './list-shopping-cart-routing.module';
import { ListShoppingCartComponent } from './list-shopping-cart.component';


@NgModule({
  declarations: [
    ListShoppingCartComponent
  ],
  imports: [
    CommonModule,
    ListShoppingCartRoutingModule
  ]
})
export class ListShoppingCartModule { }
