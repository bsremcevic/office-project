import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { ListViewComponent } from './list-view/list-view.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { HeaderComponent } from './header/header.component';
import { ListItemComponent } from './list-view/list-item/list-item.component';
import { AvatarComponent } from './list-view/list-item/avatar/avatar.component';
import { GridItemComponent } from './grid-view/grid-item/grid-item.component';
import { OfficesService } from './offices.service';
import { AppRoutingModule } from './app-routing.module';
import { AnimationComponent } from './animation/animation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListViewComponent,
    GridViewComponent,
    HeaderComponent,
    ListItemComponent,
    AvatarComponent,
    GridItemComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [OfficesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
