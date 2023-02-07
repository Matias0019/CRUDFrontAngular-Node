import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEditProductRoutingModule } from './add-edit-product-routing.module';
import { AddEditProductComponent } from './add-edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressBarModule } from 'src/app/shared/progress-bar/progress-bar.module';


@NgModule({
  declarations: 
  [AddEditProductComponent,
    ],
  imports: [
    CommonModule,
    AddEditProductRoutingModule,
    ReactiveFormsModule,
    ProgressBarModule
  ]
})
export class AddEditProductModule { }
