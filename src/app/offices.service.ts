import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Office } from './office.model';
import { Http, Response } from '@angular/http';

@Injectable()
export class OfficesService {

  officesFetched = new Subject<boolean>();
  offices: Office[] = [];

  constructor(private http: Http){}

  getOffices() {
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
