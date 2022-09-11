import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared.module';
import { SearchPageRoutingModule } from './search-routing.module';
import { SearchPage } from './search.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchPageRoutingModule,
    SharedModule
  ],

  declarations: [
    SearchPage
  ]
})
export class SearchPageModule { }
