import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {DashboardModule} from "./dashboard.module";
import {DashboardComponent} from "./dashboard.component";

export const routes = [
  {
    path: '',
    component: DashboardComponent
  }
];



@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    RouterModule.forChild(routes)
  ]
})



export class DashboardRouting {
  public static routes = routes;
}
