import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { ListViewComponent } from './list-view/list-view.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { HeaderComponent } from './header/header.component';
import { ListItemComponent } from './list-view/list-item/list-item.component';
import { AvatarComponent } from './list-view/list-item/avatar/avatar.component';
import { GridItemComponent } from './grid-view/grid-item/grid-item.component';
import { AvatarGridComponent } from './grid-view/grid-item/avatar-grid/avatar-grid.component';


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
    AvatarGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
