import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardComponent} from "./dashboard.component";
import {HeroSearchComponent} from "../hero-search/hero-search.component";


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DashboardComponent,
    HeroSearchComponent
  ],
  exports: [
    DashboardComponent,
    HeroSearchComponent
  ]
})



export class DashboardModule { }

