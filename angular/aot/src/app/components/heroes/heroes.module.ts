import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeroesComponent,
    HeroDetailComponent
  ],
  exports: [
    HeroesComponent,
    HeroDetailComponent
  ]
})



export class HeroesModule { }
