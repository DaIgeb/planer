import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TTour } from '../../../../tour-types';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor() { }

  getAll(): Observable<TTour[]> {
    return of([
      {
        id: '1',
        name: 'Rafz',
        types: [],
        timelines: []
      },
      {
        id: '2',
        name: 'Kleinandelfingen',
        types: [],
        timelines: []
      },
      {
        id: '3',
        name: 'Andelfingen',
        types: [],
        timelines: []
      }
    ]);
  }

  get(id: string): Observable<TTour> {
    return this.getAll().pipe(
      map(tours => tours.find(tour => tour.id === id))
    );
  }
}
