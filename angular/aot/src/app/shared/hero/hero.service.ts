import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { db } from '../in-memory-data.service';

@Injectable()
export class HeroService {
  private heroesUrl = 'app/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    console.log('custom hero');
    return Promise.resolve(db.getData() as Hero[])
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  save(hero: Hero): Promise<Hero> {
    if (hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }

  delete(hero: Hero): Promise<Response> {
    return db.delHero(hero.id);
  }

  // Add new Hero
  private post(hero: Hero): Promise<Hero> {
    return db.addHero(hero);
  }

  // Update existing Hero
  private put(hero: Hero): Promise<Hero> {
    return db.updateHero(hero);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
