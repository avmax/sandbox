import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './shared/hero/hero.service';
import {HeroesModule} from "./components/heroes/heroes.module";
import {DashboardModule} from "./components/dashboard/dashboard.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    DashboardModule,
    HeroesModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
