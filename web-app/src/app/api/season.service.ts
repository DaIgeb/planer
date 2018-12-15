import { Injectable } from '@angular/core';
import { TSeason } from '../../../../season-types';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../core/message.service';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const offlineData: TSeason[] = [];

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  private apiUrl = 'https://dev.api.aws.daigeb.ch/seasons';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getAll(): Observable<TSeason[]> {
    if (environment.useLocal) {
      this.log('offline mode');
      return of([...offlineData]);
    }

    return this.http.get<TSeason[]>(this.apiUrl, httpOptions)
      .pipe(
        tap(_ => this.log('fetched seasons')),
        catchError(this.handleError('getSeasons', []))
      );
  }

  getSeason(id: string): Observable<TSeason> {
    if (environment.useLocal) {
      this.log('offline mode');
      return of(offlineData.find(season => season.id === id));
    }

    throw Error('not implemented');
  }

  addSeason(title: string): Observable<TSeason> {
    if (environment.useLocal) {
      this.log('offline mode');
      const newEntry: TSeason = {
        id: 'offline-' + (offlineData.length + 1),
        title,
        events: []
      };

      offlineData.push(newEntry);
      return of<TSeason>(newEntry);
    }
    return this.http.post<TSeason>(this.apiUrl, { title: title, events: [] }, httpOptions).pipe(
      tap((season: TSeason) => this.log(`added season w/ id=${season.id}`)),
      catchError(this.handleError<TSeason>('addSeason'))
    );
  }

  private log(message: string) {
    this.messageService.add(`SeasonService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
