import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared.module';
import { EntertainmentPagePageRoutingModule } from './entertainment-routing.module';
import { EntertainmentPage } from './entertainment.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EntertainmentPagePageRoutingModule,
    SharedModule
  ],

  declarations: [
    EntertainmentPage
  ]
})
export class EntertainmentPageModule { }
