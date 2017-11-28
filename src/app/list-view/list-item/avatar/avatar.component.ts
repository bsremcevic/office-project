import { Component, OnInit, Input } from '@angular/core';
import { Office } from '../../../office';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input() isPhoto: Office;
  
  constructor() { }

  ngOnInit() {
  }

}
