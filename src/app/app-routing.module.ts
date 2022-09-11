import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  { path: "home", loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: "business", loadChildren: () => import('./pages/business/business.module').then(m => m.BusinessPageModule) },
  { path: "entertainment", loadChildren: () => import('./pages/entertainment/entertainment.module').then(m => m.EntertainmentPageModule) },
  { path: "general", loadChildren: () => import('./pages/general/general.module').then(m => m.GeneralPageModule) },
  { path: "health", loadChildren: () => import('./pages/health/health.module').then(m => m.HealthPageModule) },
  { path: "science", loadChildren: () => import('./pages/science/science.module').then(m => m.SciencePageModule) },
  { path: "sports", loadChildren: () => import('./pages/sports/sports.module').then(m => m.SportsPageModule) },
  { path: "technology", loadChildren: () => import('./pages/technology/technology.module').then(m => m.TechnologyPageModule) },
  { path: "search", loadChildren: () => import('./pages/search/search.module').then(m => m.SearchPageModule) },
  { path: "about-me", loadChildren: () => import('./pages/about/about-me.module').then(m => m.AboutPageModule) },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
