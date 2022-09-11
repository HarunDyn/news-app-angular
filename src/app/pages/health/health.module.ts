import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared.module';
import { HealthPageRoutingModule } from './health-routing.module';
import { HealthPage } from './health.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HealthPageRoutingModule,
    SharedModule
  ],

  declarations: [
    HealthPage
  ]
})
export class HealthPageModule { }
