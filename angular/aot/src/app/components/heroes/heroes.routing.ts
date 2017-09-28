import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroesComponent} from "./heroes.component";



export const HEROES_ROUTES: Routes = [
  {
    path: '',
    component: HeroesComponent
  }
];



export const HEROES_ROUTING: ModuleWithProviders = RouterModule.forChild(HEROES_ROUTES);
