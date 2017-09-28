import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routing';
import { HeroService } from './shared/hero/hero.service';
import {SharedModule} from "./shared.module";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    APP_ROUTING,
    SharedModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})



export class AppModule { }
