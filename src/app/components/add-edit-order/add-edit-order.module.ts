import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEditOrderRoutingModule } from './add-edit-order-routing.module';
import { AddEditOrderComponent } from './add-edit-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AddEditOrderComponent
  ],
  imports: [
    CommonModule,
    AddEditOrderRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
  ]
})
export class AddEditOrderModule { }
