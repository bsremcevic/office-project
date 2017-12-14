import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input() isPhoto: boolean;
  @Input() letter: string;
  @Input() isBig: boolean = false;
  //gets only the data needed for the avatar component from parent.
  //avatar component is used in both list-item and grid-item components

  constructor() { }

  ngOnInit() {
  }

}
