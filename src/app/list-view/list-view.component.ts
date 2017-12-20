import { Component, OnInit } from '@angular/core';
import { Office } from '../office.model';
import { DataService } from '../data.service';
import { OfficesService } from '../offices.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  private list: Office[];

  constructor(private dataService: DataService,
              private officesService: OfficesService) { }

  ngOnInit() {
    this.list = this.dataService.offices;
    //gets the list of offices from the service once the component is initialized
  }
  public onSaveChanges(){
    this.officesService.saveMultiEditChanges();
  }
}
