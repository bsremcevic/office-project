import { Component, Input } from '@angular/core';
import { Office } from '../../office.model';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css']
})
export class GridItemComponent {

  @Input() list: Office;
//gets only one office from parent component so it can display and format the data in the html template

  constructor() { }


}
