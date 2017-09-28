import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";

import {HeroesComponent} from './heroes.component';
import {HEROES_ROUTING} from "./heroes.routing";

import {SharedModule} from "../../shared.module";


@NgModule({
  imports: [
    HEROES_ROUTING,
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    HeroesComponent
  ],
  exports: [
    HeroesComponent
  ]
})



export class HeroesModule { }
