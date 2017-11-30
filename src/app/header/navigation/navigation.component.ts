import { Component } from '@angular/core';
import { OfficesService } from '../../offices.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  //the list of all the items in the navigation
  //you can add more
  navItems: string[] = ['List', 'Grid'];
  selectedItem = "List";

  constructor(private officesService: OfficesService) { }

  toggleNav(e: string){
    this.selectedItem = e;
    this.officesService.nav = this.selectedItem;
    this.officesService.navUpdated.emit(e);
    //emit so appcomponent can update the html template
  }

}
