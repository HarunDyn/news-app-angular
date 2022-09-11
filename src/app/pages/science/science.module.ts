import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared.module';
import { SciencePageRoutingModule } from './science-routing.module';
import { SciencePage } from './science.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SciencePageRoutingModule,
    SharedModule
  ],

  declarations: [
    SciencePage
  ]
})
export class SciencePageModule { }
