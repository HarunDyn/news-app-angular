import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared.module';
import { SportsPageRoutingModule } from './sports-routing.module';
import { SportsPage } from './sports.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SportsPageRoutingModule,
    SharedModule
  ],

  declarations: [
    SportsPage
  ]
})
export class SportsPageModule { }
