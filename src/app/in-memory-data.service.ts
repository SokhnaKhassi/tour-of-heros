import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Soda Faye' },
      { id: 12, name: 'Moustapha' },
      { id: 13, name: 'Sokhna ' },
      { id: 14, name: 'Byba' },
      { id: 15, name: 'Daouda' },
      { id: 16, name: 'Stella' },
      { id: 17, name: 'Issa' },
      { id: 18, name: 'Khady' },
      { id: 19, name: 'Oumy' },
      { id: 20, name: 'Laine' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
