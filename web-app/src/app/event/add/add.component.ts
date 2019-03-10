import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TSeason, TEvent } from '../../../../../season-types';
import { FormGroup, FormControl } from '@angular/forms';
import { TTour } from '../../../../../tour-types';
import { TourService } from 'src/app/api/tour.service';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

type TEventType = 'tour' | 'range' | 'single';

@Component({
  selector: 'app-event-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  myControl = new FormControl();
  eventForm: FormGroup;

  @Input() events$: Observable<TEvent[]>;
  @Output() added = new EventEmitter<TEvent>();

  tours: TTour[];
  filteredTours: Observable<TTour[]>;

  constructor(private tourApi: TourService) { }

  private createForm() {
    this.eventForm = new FormGroup({
      eventType: new FormControl('tour'),
      date: new FormControl(moment()),
      dateUntil: new FormControl(moment().add(3, 'days')),
      description: new FormControl(''),
      tour: new FormControl()
    });
  }

  private _filter(name: string): TTour[] {
    const filterValue = name.toLocaleLowerCase();

    return this.tours.filter(tour => tour.name.toLocaleLowerCase().indexOf(filterValue) !== -1);
  }

  displayFn(tour?: TTour): string | undefined {
    return tour ? tour.name : undefined;
  }

  ngOnInit() {
    this.createForm();
    this.tourApi.getAll().subscribe(tours => this.tours = tours);
    this.filteredTours = this.myControl.valueChanges
      .pipe(
        startWith<string | TTour>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.tours.slice())
      );
  }

  onSubmit() {
    const eventType = this.eventForm.value.eventType as TEventType;

    const date = (this.eventForm.value.date as moment.Moment).toJSON();
    let event: TEvent;

    switch (eventType) {
      case 'tour': {
        event = {
          date,
          tours: [{
            id: this.eventForm.value.tour.id,
            points: 20
          }]
        };
        break;
      }
      case 'range': {
        event = {
          dateFrom: date,
          dateTo: (this.eventForm.value.dateUntil as moment.Moment).toJSON(),
          description: this.eventForm.value.description
        };
        break;
      }
      case 'single': {
        event = {
          date,
          description: this.eventForm.value.description
        };
        break;
      }
    }

    this.added.emit(event);

    this.createForm();
  }
}
