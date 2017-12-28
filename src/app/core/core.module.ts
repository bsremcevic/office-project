import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './header/navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { EditModeComponent } from './header/edit-mode/edit-mode.component';
import { AnimationComponent } from './animation/animation.component';

import { OfficesService } from '../shared/offices.service';
import { DataService } from '../shared/data.service';

@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    EditModeComponent,
    AnimationComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    AnimationComponent,
    AppRoutingModule
  ],
  providers: [
    OfficesService,
    DataService
  ]
})
export class CoreModule {}
