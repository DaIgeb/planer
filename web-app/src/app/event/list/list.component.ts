import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { TEvent, dateRangeEvent, specialDateEvent } from '../../../../../season-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-event-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() events$: Observable<TEvent[]>;
  @Output() added = new EventEmitter<TEvent>();

  sortedEvents: TEvent[];
  sortedEvents$: Observable<TEvent[]>;

  constructor() { }

  ngOnInit() {
    this.sortedEvents$ = this.events$
      .pipe(
        map(events => events.sort((a, b) => this.getDate(a) > this.getDate(b) ? 1 : -1))
      );
    this.sortedEvents$.subscribe(events => this.sortedEvents = events);
    console.log(this.sortedEvents);
  }

  onAdded(event: TEvent) {
    this.added.emit(event);
  }

  private getDate(event: TEvent) {
    if (dateRangeEvent(event)) {
      return event.dateFrom;
    }

    return event.date;
  }

  private getType(event: TEvent): string {
    if (dateRangeEvent(event)) {
      return 'range';
    } else if (specialDateEvent(event)) {
      return 'single';
    }
    return 'tour';
  }
}
