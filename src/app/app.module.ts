import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { TablesComponent } from './tables/tables.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import {  FormsComponent } from './forms/forms.component';
import { BooksComponent } from './books/books.component';
import { CoursesComponent } from './courses/courses.component';
import { TrainersComponent } from './trainers/trainers.component';
import { TraineesComponent } from './trainees/trainees.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    TablesComponent,
    DashboardComponent,
    FormsComponent,
    BooksComponent,
    CoursesComponent,
    TrainersComponent,
    TraineesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
