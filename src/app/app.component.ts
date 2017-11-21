import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Office template';
  nav = {
    list: false,
    grid: true
  }

  toggleNav(e){
    if(e === 'list'){
      this.nav.list = true;
      this.nav.grid = false;
    }
    if(e === 'grid'){
      this.nav.list = false;
      this.nav.grid = true;
    }
  }

}
