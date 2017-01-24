import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';

import { HomeComponent } from './home/home.component';

import { ProjectListComponent }  from './projects/project-list.component';
import { ProjectInsertComponent }  from './projects/project-insert.component';
import { ProjectUpdateComponent }  from './projects/project-update.component';
import { ProjectHoursListComponent }  from './projects/hours/project-hours-list.component';
import { ProjectHoursInsertComponent }  from './projects/hours/project-hours-insert.component';
import { ProjectFilterPipe }  from './projects/project-filter.pipe';
import { ProjectStartDatePipe }  from './projects/project-startDate.pipe';
import { ProjectEndDatePipe }  from './projects/project-endDate.pipe';
import { ProjectHoursPipe }  from './projects/hours/project-hours.pipe';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent},
      { path: 'projects', component: ProjectListComponent},
      { path: 'project/update/:id', component: ProjectUpdateComponent},
      { path: 'project/insert', component: ProjectInsertComponent},
      { path: 'project/hours/insert/:id', component: ProjectHoursInsertComponent}])
    ],
  declarations: [ 
    AppComponent,

    HomeComponent,

    ProjectListComponent, 
    ProjectInsertComponent,
    ProjectUpdateComponent,
    ProjectHoursListComponent,
    ProjectHoursInsertComponent,
    ProjectFilterPipe,
    ProjectEndDatePipe,
    ProjectStartDatePipe,
    ProjectHoursPipe
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
