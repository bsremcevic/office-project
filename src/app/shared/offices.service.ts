import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { DataService } from './data.service';
import { Office } from './office.model';


@Injectable()
export class OfficesService {

  public editMode = {
    editMode: false,
    singleEditMode: false,
    multiEditMode: false
  }

  private toDelete: number[] = [];
  //array of all the indexes for deletion
  private toUpdateNames: string[] = [];
  //array of names to update
  private returnIndex: number;

  public officesFetched = new Subject<boolean>();
  //sets the subject that will be used by getOffices to emit 'true'.
  //that way app.component can update its 'officesFetched' property and replace the animation with the list component in the html template.
  //as long as the data is being fetched from the server, the animation will play.

  public localEditModeClosed = new Subject<boolean>();

  constructor(private http: Http,
              private dataService: DataService){}

  public getOffices() {
    //create an observable out of the request that will get the data
    //subscribe to it to send it and then handle response
    // console.log("pera");
    this.http.get('https://itk-exam-api.herokuapp.com/api/offices')
      .subscribe(
        (response: Response) => {
          this.dataService.offices = response.json();
          this.officesFetched.next(true);
          // console.log(this.dataService.offices);
        },
        (error: Response) => {
          console.log(error);
        }
      );
  }

  /////////////////////////
  //SINGLE EDIT FUNCTIONALITY
  /////////////////////////

  public updateName(index: number, name: string){
    this.dataService.offices[index].name = name;
  }
  public deleteOffice(index: number){
    this.dataService.offices.splice(index, 1)
    //this.recipesChanged.next(this.recipes.slice());
  }

  /////////////////////////
  //MULTIEDIT FUNCIONALITY
  /////////////////////////

  public updateOffices(index: number){
    //prepare all the indexes for deletion

    this.returnIndex = this.toDelete.indexOf(index)
    //check if the index already exists in the array for deletion
    //if not add the current index in the array, if yes, remove current one.
    if(this.returnIndex === -1){
      this.toDelete.push(index);
    } else {
      this.toDelete.splice(this.returnIndex, 1);
    }
  }

  public updateNames(value: string, index: number){
    //prepare the names for deletion
    this.toUpdateNames[index] = value;
    // console.log(this.toUpdateNames);
  }

  public saveMultiEditChanges(){
    //updates all the names in the dataService
    for(let i = 0; i < this.toUpdateNames.length; i++){
      if (this.toUpdateNames[i]) {
        //check if true for '', null, undefined, 0, NaN and false.
        // console.log("true for '', null, undefined, 0, NaN and false.");
        this.dataService.offices[i].name = this.toUpdateNames[i];
      }
    }

    //deletes all the offices that were selected
    for(let i = this.dataService.offices.length-1; i>=0; i--){
      if(this.toDelete.indexOf(i) !== -1){
        this.dataService.offices.splice(i, 1)
      }
    }

    this.resetTempArrays();
    this.editMode.multiEditMode = false;
    this.editMode.singleEditMode = true;
  }

  public resetTempArrays(){
    this.toDelete = [];
    this.toUpdateNames = [];
  }
}
