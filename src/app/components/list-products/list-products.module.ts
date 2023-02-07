import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProductsRoutingModule } from './list-products-routing.module';
import { ListProductsComponent } from './list-products.component';
import { ProgressBarModule } from 'src/app/shared/progress-bar/progress-bar.module';


@NgModule({
  declarations: 
  [ListProductsComponent,
    ],
  imports: [
    CommonModule,
    ListProductsRoutingModule,
    ProgressBarModule,
    
  ]
})
export class ListProductsModule { } 
