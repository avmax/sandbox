import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HeroesModule} from "./heroes.module";
import {HeroesComponent} from "./heroes.component";

export const routes = [
  {
    path: '',
    component: HeroesComponent
  }
];



@NgModule({
  imports: [
    CommonModule,
    HeroesModule,
    RouterModule.forChild(routes)
  ]
})



export class HeroesRouting {
  public static routes = routes;
}
