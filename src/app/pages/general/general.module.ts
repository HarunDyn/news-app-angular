import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared.module';
import { GeneralPageRoutingModule } from './general-routing.module';
import { GeneralPage } from './general.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GeneralPageRoutingModule,
    SharedModule
  ],

  declarations: [
    GeneralPage
  ]
})
export class GeneralPageModule { }
