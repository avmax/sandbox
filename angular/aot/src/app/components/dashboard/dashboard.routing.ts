import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from "./dashboard.component";



export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];



export const DASHBOARD_ROUTING: ModuleWithProviders = RouterModule.forChild(DASHBOARD_ROUTES);

