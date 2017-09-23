export class DB {
    private heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

  public getData(): any {
    return this.heroes;
  }

  public delHero(id: number): Promise<any> {
    this.heroes = this.heroes.map((hero: any) => {
      if (hero.id !== id) {
        return hero;
      }
    });

    return Promise.resolve(this.heroes);
  }

  public addHero(hero: any): Promise<any> {
    this.heroes = [
      ...this.heroes,
      hero
    ];

    return Promise.resolve(hero);
  };

  public updateHero(hero: any): Promise<any> {
    this.heroes = this.heroes.map((h: any) => {
      if (h.id === hero.id) {
        return hero;
      } else {
        return h;
      }
    });

    return Promise.resolve(hero);
  };
}

export const db = new DB();
