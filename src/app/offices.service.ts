import { Injectable, EventEmitter } from '@angular/core';
import { Office } from './office';

@Injectable()
export class OfficesService{

  // navUpdated = new EventEmitter<string>();
  //this is for communication between header and AppComponent to update the main html template

  // nav: string;

  offices: Office[] = [
     {
        "id": 1,
        "name": "Belgrade Office",
        "description": "Itekako Belgrade office address is Terazije 23",
        "latitude": "44.786568",
        "longitude": "20.4489216",
        "photo": "http://fillmurray.com/70/70"
     },
     {
        "id": 2,
        "name": "Example Paris Office",
        "description": "Itekako Paris office address is Main street",
        "latitude": "48.856614",
        "longitude": "2.3522219",
        "photo": null
     },
     {
        "id": 3,
        "name": "Belgrade Office",
        "description": "Itekako Belgrade office address is Terazije 23",
        "latitude": "44.786568",
        "longitude": "20.4489216",
        "photo": "http://fillmurray.com/70/70"
     },
     {
        "id": 4,
        "name": "Paris Office",
        "description": "Itekako Paris office address is Main street",
        "latitude": "48.856614",
        "longitude": "2.3522219",
        "photo": null
     },
     {
        "id": 5,
        "name": "Belgrade Office",
        "description": "Itekako Belgrade office address is Terazije 23",
        "latitude": "44.786568",
        "longitude": "20.4489216",
        "photo": "http://fillmurray.com/70/70"
     },
     {
        "id": 6,
        "name": "Paris Office",
        "description": "Itekako Paris office address is Main street",
        "latitude": "48.856614",
        "longitude": "2.3522219",
        "photo": null
     },
     {
        "id": 7,
        "name": "Belgrade Office",
        "description": "Itekako Belgrade office address is Terazije 23",
        "latitude": "44.786568",
        "longitude": "20.4489216",
        "photo": "http://fillmurray.com/70/70"
     },
     {
        "id": 8,
        "name": "Paris Office",
        "description": "Itekako Paris office address is Main street",
        "latitude": "48.856614",
        "longitude": "2.3522219",
        "photo": null
     }
  ];
}
