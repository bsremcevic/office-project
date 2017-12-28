import { Injectable } from '@angular/core';
import { Office } from './office.model';

@Injectable()
export class DataService {

  public offices: Office[] = [];
  //this will hold all the offices once fetched

  constructor() { }

}
