import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';



const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', loadChildren: './components/dashboard/dashboard.module#DashboardModule' },
  { path: 'heroes', loadChildren: './components/heroes/heroes.module#HeroesModule' }
];



@NgModule({
  imports: [RouterModule.forRoot( APP_ROUTES, {useHash: true} )], // enableTracing
  exports: [RouterModule]
})




export class AppRoutingModule { }
