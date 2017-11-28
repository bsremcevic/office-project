import { Component, OnInit } from '@angular/core';
import { Office } from '../office';
import { OFFICESLIST } from '../offices';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  list: Office[] = OFFICESLIST;
  constructor() { }

  ngOnInit() {
  }

}
