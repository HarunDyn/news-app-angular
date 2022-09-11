import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyPage } from './technology.page';




const routes: Routes = [
  {
    path: '',
    component: TechnologyPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnologyPageRoutingModule { }
