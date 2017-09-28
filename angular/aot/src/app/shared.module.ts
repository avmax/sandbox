import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";

import {HeroDetailComponent} from "./components/hero-detail/hero-detail.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    HeroDetailComponent
  ],
  exports: [
    HeroDetailComponent
  ]
})



export class SharedModule { }
