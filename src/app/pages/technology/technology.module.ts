import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared.module';
import { TechnologyPageRoutingModule } from './technology-routing.module';
import { TechnologyPage } from './technology.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TechnologyPageRoutingModule,
    SharedModule
  ],

  declarations: [
    TechnologyPage
  ]
})
export class TechnologyPageModule { }
