import { Component, Input } from '@angular/core';
import { Office } from '../../office.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  @Input() list: Office;
  //gets only one office from parent component so it can display and format the data in the html template

  constructor() { }

}
