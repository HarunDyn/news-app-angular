import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared.module';
import { AboutMePageRoutingModule } from './about-me-routing.module';
import { AboutMePage } from './about-me.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AboutMePageRoutingModule,
    SharedModule
  ],

  declarations: [
    AboutMePage
  ]
})
export class AboutPageModule { }
