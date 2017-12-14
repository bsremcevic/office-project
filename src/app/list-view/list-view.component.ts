import { Component, OnInit } from '@angular/core';
import { Office } from '../office.model';
import { OfficesService } from '../offices.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  list: Office[];

  constructor(private officesService: OfficesService) { }

  ngOnInit() {
    this.list = this.officesService.offices;
    //gets the list of offices from the service once the component is initialized
  }

}
