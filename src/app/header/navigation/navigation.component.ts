import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  //the list of all the items in the navigation
  navItems: string[] = ['List', 'Grid'];
  selectedItem = "List";
  @Output() selectedNav = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  toggleNav(e: string){
    this.selectedItem = e;
    //console.log(this.selectedItem, e);
    this.selectedNav.emit(this.selectedItem);
  }

}
