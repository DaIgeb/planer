import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SeasonsDataSource } from './seasons-datasource';
import { Title } from '@angular/platform-browser';
import { SeasonService } from '../api/season.service';
import { TSeason } from '../../../../season-types';
import { MessageService } from '../core/message.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss'],
})
export class SeasonsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: SeasonsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title'];
  seasons: TSeason[] = [];

  constructor(private title: Title, private api: SeasonService, private message: MessageService) { }

  ngOnInit() {
    this.dataSource = new SeasonsDataSource(this.paginator, this.sort, this.api);
    this.title.setTitle('Seasons');

    // this.api.getAll().subscribe(seasons => this.seasons = seasons);
  }

  showInfo(season: TSeason) {
    this.message.add(JSON.stringify(season));
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.api.addSeason(title)
      .subscribe(season => {
        this.seasons.push(season);
      });
  }
}
