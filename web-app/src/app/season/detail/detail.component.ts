import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SeasonService } from '../../api/season.service';
import { TSeason, TEvent } from '../../../../../season-types';
import { switchMap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-season-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  season$: Observable<TSeason>;
  season: TSeason | undefined;
  events$ = new BehaviorSubject<TEvent[]>([]);

  constructor(private route: ActivatedRoute, private api: SeasonService, private router: Router) { }

  ngOnInit(): void {
    this.getSeason();
  }

  getSeason(): void {
    this.season$ = this.route.paramMap.pipe(switchMap((params) => this.api.getSeason(params.get('id'))));

    this.season$.subscribe(season => {
      this.season = season;
      if (!season) {
        this.router.navigate(['../'], { relativeTo: this.route });
        this.events$.next(undefined);
      } else {
        console.log('update events');
        this.events$.next(season.events);
      }
    });
  }

  onAdded(event: TEvent) {
    console.log(event);
    if (this.season) {
      this.season.events.push(event);
      this.events$.next(this.season.events);
    }
  }
}
