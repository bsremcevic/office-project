import { Component, OnInit } from '@angular/core';
import { Office } from '../office.model';
import { OfficesService } from '../offices.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  list: Office[];

  constructor(private officesService: OfficesService) { }

  ngOnInit() {
    this.list = this.officesService.offices;
  }

}
