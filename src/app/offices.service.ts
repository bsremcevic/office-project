import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Office } from './office.model';
import { Http, Response } from '@angular/http';

@Injectable()
export class OfficesService {

  officesFetched = new Subject<boolean>();
  //sets the subject that will be used by getOffices to emit 'true'.
  //that way app.component can update the 'officesFetched' property and replace the animation with the list component in the template.
  //as long as the data is being fetched from the server, the animation will play.

  offices: Office[] = [];
  //this will hold all the offices once fetched

  constructor(private http: Http){}

  getOffices() {
    //create an observable out of the request that will get the data
    //subscribe to it to send it and then handle response
    console.log("pera");
    this.http.get('https://itk-exam-api.herokuapp.com/api/offices')
      .subscribe(
        (response: Response) => {
          this.offices = response.json();
          this.officesFetched.next(true);
          console.log(this.offices);
        },
        (error: Response) => {
          console.log(error);
        }
      );
  }
}
