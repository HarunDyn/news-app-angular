import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared.module';
import { BusinessPageRoutingModule } from './business-routing.module';
import { BusinessPage } from './business.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BusinessPageRoutingModule,
    SharedModule
  ],

  declarations: [
    BusinessPage
  ]
})
export class BusinessPageModule { }
