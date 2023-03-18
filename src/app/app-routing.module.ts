import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';
import { BooksComponent } from './books/books.component';
import { CoursesComponent } from './courses/courses.component';
import { TrainersComponent } from './trainers/trainers.component';
import { TraineesComponent } from './trainees/trainees.component';


const routes: Routes = [
  {path: '', redirectTo:'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'chart', component:ChartComponent},
  {path: 'table', component:TablesComponent},
  {path: 'form', component:FormsComponent},
  {path: 'book', component:BooksComponent},
  {path: 'course', component:CoursesComponent},
  {path: 'trainer', component:TrainersComponent},
  {path: 'trainee', component:TraineesComponent},
  {path: '**', component:DashboardComponent},
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
