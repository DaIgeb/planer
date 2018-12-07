import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TTour } from '../../../../tour-types';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor() { }

  getAll(): Observable<TTour[]> {
    return of([
      {
        id: '',
        name: 'Rafz',
        types: [],
        timelines: []
      }
    ]);
  }
}
