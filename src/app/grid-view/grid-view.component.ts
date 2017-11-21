import { Component, OnInit } from '@angular/core';
import { Office } from '../office';
import { OFFICESLIST } from '../offices';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  list = OFFICESLIST;
  constructor() { }

  ngOnInit() {
  }

}
