import { Injectable } from '@angular/core';
import { TSeason } from '../../../../season-types';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../core/message.service';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  private apiUrl = 'https://dev.api.aws.daigeb.ch/seasons';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getAll(): Observable<TSeason[]> {
    return this.http.get<TSeason[]>(this.apiUrl, httpOptions)
      .pipe(
        tap(_ => this.log('fetched seasons')),
        catchError(this.handleError('getSeasons', []))
      );
  }

  addSeason(title: string): Observable<TSeason> {
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
