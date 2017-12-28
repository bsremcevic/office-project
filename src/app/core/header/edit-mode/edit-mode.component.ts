import { Component, OnInit } from '@angular/core';
import { OfficesService } from '../../../shared/offices.service';


@Component({
  selector: 'app-edit-mode',
  templateUrl: './edit-mode.component.html',
  styleUrls: ['./edit-mode.component.css']
})
export class EditModeComponent implements OnInit {

  // private editMode: boolean[] = this.officesService.editMode;
  private editMode = this.officesService.editMode;

  constructor(private officesService: OfficesService) { }

  ngOnInit() {
  }

  public onEditMode(){
    this.editMode.editMode = !this.editMode.editMode;

    if(!this.editMode.editMode){
      this.editMode.singleEditMode = false;
      this.editMode.multiEditMode = false;
      this.officesService.localEditModeClosed.next(false);
      //emit so editMode could be closed even if user leaves open input fields in singleEditMode
    } else {
      this.editMode.singleEditMode = true;
      //set singleEditMode as default
    }
  }
  public onEditSingle(){
    // console.log("single");
    this.officesService.editMode.singleEditMode = true;
    this.officesService.editMode.multiEditMode = false;
    this.officesService.resetTempArrays();
    this.officesService.localEditModeClosed.next(false);
  }
  public onEditMultiple(){
    // console.log("multi");
    this.officesService.editMode.multiEditMode = true;
    this.officesService.editMode.singleEditMode = false;
    this.officesService.resetTempArrays();
    this.officesService.localEditModeClosed.next(false);
  }
}
