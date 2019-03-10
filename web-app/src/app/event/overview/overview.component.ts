import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TEvent, dateRangeEvent, specialDateEvent, tourEvent } from '../../../../../season-types';
import { Observable, BehaviorSubject } from 'rxjs';
import { TourService } from 'src/app/api/tour.service';
import { map } from 'rxjs/operators';
import { TTour } from '../../../../../tour-types';

@Component({
  selector: 'app-event-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Input() events$: Observable<TEvent[]>;
  @Input() event: TEvent;
  @Output() added = new EventEmitter<TEvent>();

  private showAdd = false;
  tours: TTour[];

  constructor(private tourApi: TourService) { }

  ngOnInit() {
    if (tourEvent(this.event)) {
      this.tours = new Array(this.event.tours.length);
      this.event.tours.forEach((tour, idx) => this.tourApi.get(tour.id).subscribe(tourObj => this.tours[idx] = tourObj));
      this.tourApi.get(this.event.tours[0].id).subscribe();
    }
  }

  onAdded(event: TEvent) {
    this.showAdd = false;
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

  private enableAdd() {
    this.showAdd = true;
  }
}
