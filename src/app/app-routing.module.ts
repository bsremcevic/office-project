import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';
import { GridViewComponent } from './grid-view/grid-view.component';

const appRoutes: Routes = [
  //{ path: '', redirectTo: '/list', pathMatch: 'full'},
  { path: 'list', component: ListViewComponent },
  { path: 'grid', component: GridViewComponent },
  { path: '**', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
