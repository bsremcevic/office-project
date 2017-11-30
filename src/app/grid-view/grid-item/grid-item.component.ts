import { Component, Input } from '@angular/core';
import { Office } from '../../office';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css']
})
export class GridItemComponent {

  @Input() list: Office;

  constructor() { }


}
