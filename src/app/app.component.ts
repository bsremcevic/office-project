import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nav = 'List';

  navSelected(e){
    this.nav = e;
    console.log('app component', this.nav);
  }


}
