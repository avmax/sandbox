import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";

import {HeroesComponent} from './heroes.component';
import {HeroesRoutingModule} from "./heroes.routing";

import {SharedModule} from "../../shared.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    SharedModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroesComponent
  ],
  exports: [
    HeroesComponent
  ]
})



export class HeroesModule { }
