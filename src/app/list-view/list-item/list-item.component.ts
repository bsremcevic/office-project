import { Component, OnInit, Input } from '@angular/core';
import { Office } from '../../office';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() list: Office;

  constructor() { }

  ngOnInit() {
  }

}