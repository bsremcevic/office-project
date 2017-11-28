import { Component, OnInit, Input } from '@angular/core';
import { Office } from '../../../office';

@Component({
  selector: 'app-avatar-grid',
  templateUrl: './avatar-grid.component.html',
  styleUrls: ['./avatar-grid.component.css']
})
export class AvatarGridComponent implements OnInit {

  @Input() isPhoto: Office;
  constructor() { }

  ngOnInit() {
  }

}
