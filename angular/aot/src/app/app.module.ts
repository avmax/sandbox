import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './shared/hero/hero.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroesComponent,
    HeroDetailComponent,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
