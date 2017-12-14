import { Component, OnInit, OnDestroy } from '@angular/core';
import { OfficesService } from './offices.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  officesFetched: boolean = false;
  //property used for verification if animation component should be replaced with the list component in the html template.
  subscription: Subscription;
  //subscription property set so it could be unsubscribed once the component is destroyed, because this is an observable set by us and not angular

  constructor(private officesService: OfficesService){}

  ngOnInit(){
    this.officesService.getOffices();
    //calls the getOffices method from the service

    //subscribes to the subject set in the officesService which will emit once we fetch the data from the server
    this.subscription = this.officesService.officesFetched.subscribe(
      (test: boolean) => {
        this.officesFetched = test;
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
