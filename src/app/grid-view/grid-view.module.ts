import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridViewComponent } from './grid-view.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GridViewComponent,
    GridItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]

})
export class GridViewModule {}
