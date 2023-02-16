import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEditUserRoutingModule } from './add-edit-user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditUserComponent } from './add-edit-user.component';


@NgModule({
  declarations: [AddEditUserComponent],
  imports: [
    CommonModule,
    AddEditUserRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AddEditUserModule { }
