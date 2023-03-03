import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEditShoppingCartRoutingModule } from './add-edit-shopping-cart-routing.module';
import { AddEditShoppingCartComponent } from './add-edit-shopping-cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AddEditShoppingCartComponent
  ],
  imports: [
    CommonModule,
    AddEditShoppingCartRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
  ]
})
export class AddEditShoppingCartModule { }
