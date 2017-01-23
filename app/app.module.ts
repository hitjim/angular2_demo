import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ProjectListComponent }  from './projects/project-list.component';

import { ProjectFilterPipe }  from './projects/project-filter.pipe';
import { ProjectStartDatePipe }  from './projects/project-startDate.pipe';
import { ProjectEndDatePipe }  from './projects/project-endDate.pipe';
import { ProjectHoursPipe }  from './projects/project-hours.pipe';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule
    ],
  declarations: [ 
    AppComponent,
    ProjectListComponent, 
    ProjectFilterPipe,
    ProjectStartDatePipe,
    ProjectEndDatePipe,
    ProjectHoursPipe
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
