import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {DashboardComponent} from "./dashboard.component";
import {DashboardRoutingModule} from "./dashboard.routing";

import {HeroSearchComponent} from "../hero-search/hero-search.component";



@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    HeroSearchComponent
  ],
  exports: [
    DashboardComponent
  ]
})



export class DashboardModule { }

