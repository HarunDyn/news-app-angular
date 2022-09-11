import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule, NgbCollapseModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SliderComponent } from './slider/slider.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgbCarouselModule,
    NgbPaginationModule,
    NgbCollapseModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    PaginationComponent,
    SpinnerComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    PaginationComponent,
    SpinnerComponent

    // CaptionPipe,
    // FilterPipe,
    // TranslateModule,
    // AllergenFinderPipe,
    // CatalogAllergensPipe,
    // IonContentScrollbarModule,
    // InViewDirective
  ],
  // providers: [CaptionPipe]
})
export class SharedModule { }
