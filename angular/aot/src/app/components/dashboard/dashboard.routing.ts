import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from "./dashboard.component";



export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(DASHBOARD_ROUTES)], // enableTracing
  exports: [RouterModule]
})




export class DashboardRoutingModule { }
