import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {DashboardComponent} from "./dashboard.component";
import {DASHBOARD_ROUTING} from "./dashboard.routing";

import {HeroSearchComponent} from "../hero-search/hero-search.component";



@NgModule({
  imports: [
    DASHBOARD_ROUTING,
    CommonModule,
    RouterModule
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

