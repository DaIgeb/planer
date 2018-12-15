import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-season-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  add(obj: any) {
    console.log(typeof obj, obj);
  }
}
