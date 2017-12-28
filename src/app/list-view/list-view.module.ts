import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListViewComponent } from './list-view.component';
import { ListItemComponent } from './list-item/list-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListViewComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]

})
export class ListViewModule {}
