import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListOrdersRoutingModule } from './list-orders-routing.module';
import { ListOrdersComponent } from './list-orders.component';


@NgModule({
  declarations: [
    ListOrdersComponent
  ],
  imports: [
    CommonModule,
    ListOrdersRoutingModule
  ]
})
export class ListOrdersModule { }
