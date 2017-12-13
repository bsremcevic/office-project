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
  subscription: Subscription;

  constructor(private officesService: OfficesService){}

  ngOnInit(){
    this.officesService.getOffices();

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
