import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroesComponent} from "./heroes.component";



export const HEROES_ROUTES: Routes = [
  {
    path: '',
    component: HeroesComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(HEROES_ROUTES)], // enableTracing
  exports: [RouterModule]
})




export class HeroesRoutingModule { }
