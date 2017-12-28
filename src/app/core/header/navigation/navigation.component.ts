import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  //the list of all the items in the navigation
  //you can add more
  private navItems: string[] = ['List', 'Grid'];
}
