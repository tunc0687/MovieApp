import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path: "", redirectTo:"/dashboard", pathMatch:"full"},
  {path: "dashboard", component: DashboardComponent},
  {path: "movies", component: MoviesComponent},
  {path: "detail/:id", component: DetailComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
