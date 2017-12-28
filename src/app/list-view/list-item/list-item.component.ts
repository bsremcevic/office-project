import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Office } from '../../shared/office.model';
import { OfficesService } from '../../shared/offices.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit, OnDestroy {

  public editMode = this.officesService.editMode;

  private localEditMode: boolean = false;

  private subscription: Subscription;

  @ViewChild('nameInput') private nameInput: ElementRef;
  //getting the input element via local reference

  @Input() private index: number;
  @Input() private list: Office;
  //gets only one office from parent component so it can display and format the data in the html template

  onResize(event) {
    //this is used to check the innerWidth and if less than 650, disable edit mode and hide the elements used in editMode.
    //it is done this way because this functionality was request after everything was implemented
    if(event.target.innerWidth < 650) {
      this.localEditMode = false;
      this.editMode.multiEditMode = false;
      this.editMode.singleEditMode = false;
      this.editMode.editMode = false;
    }
  }

  constructor(private officesService: OfficesService,
              private elementRef: ElementRef) { }

  ngOnInit(){
    this.subscription = this.officesService.localEditModeClosed.subscribe(
      (test: boolean) => {
        this.localEditMode = test;
      }
    );
  }

  public onSaveItem(){
    // console.log(this.nameInput.nativeElement.value);
    this.officesService.updateName(this.index, this.nameInput.nativeElement.value);
    this.localEditMode = false;
  }
  public onDeleteItem(){
    // console.log("pera");
    this.officesService.deleteOffice(this.index);
  }

  private onCheckbox(index: number){
    // console.log("onChewckBox:_________ " + index);
    this.officesService.updateOffices(index);
  }

  private onChangeInput(){
    // console.log("pera");
    this.officesService.updateNames(this.nameInput.nativeElement.value, this.index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
