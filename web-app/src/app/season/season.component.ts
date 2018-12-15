import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SeasonService } from '../api/season.service';
import { TSeason } from '../../../../season-types';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {
  season$: Observable<TSeason>;

  constructor(private route: ActivatedRoute, private api: SeasonService, private router: Router) { }

  ngOnInit(): void {
    this.getSeason();
  }

  getSeason(): void {
    this.season$ = this.route.paramMap.pipe(switchMap((params) => this.api.getSeason(params.get('id'))));

    this.season$.subscribe(season => {
      if (!season) {
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    });
  }

  add(eventDate: Date): void {
    console.log(typeof eventDate, eventDate);
  }
}
