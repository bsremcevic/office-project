import { Component, OnInit } from '@angular/core';
import { Office } from '../shared/office.model';
import { DataService } from '../shared/data.service';
import { OfficesService } from '../shared/offices.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
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
