import { Component, OnInit, Input } from '@angular/core';
import { TSeason } from '../../../../../season-types';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { TourService } from 'src/app/api/tour.service';
import { TTour } from '../../../../../tour-types';
import { Observable } from 'rxjs';

type TEventType = 'tour' | 'range' | 'single';

@Component({
  selector: 'app-season-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  eventForm: FormGroup;

  @Input() season: TSeason;

  tours: TTour[];

  constructor(private tourApi: TourService) { }

  private createForm() {
    this.eventForm = new FormGroup({
      eventType: new FormControl('tour'),
      date: new FormControl(moment()),
      dateUntil: new FormControl(moment().add(3, 'days')),
      description: new FormControl('')
    });
  }

  ngOnInit() {
    this.createForm();
    this.tourApi.getAll().subscribe(tours => this.tours = tours);
  }

  onSubmit(obj: any) {
    console.log(this.eventForm);
    console.log(typeof obj, obj);

    const eventType = this.eventForm.value.eventType as TEventType;

    const date = (this.eventForm.value.date as moment.Moment).toJSON();

    switch (eventType) {
      case 'tour': {
        this.season.events.push({
          date,
          tours: []
        });
        break;
      }
      case 'range': {
        this.season.events.push({
          dateFrom: date,
          dateTo: (this.eventForm.value.dateUntil as moment.Moment).toJSON(),
          description: ''
        });
        break;
      }
      case 'single': {
        this.season.events.push({
          date,
          description: ''
        });
        break;
      }
    }

    this.createForm();
  }
}
