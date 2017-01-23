import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';

import { HomeComponent } from './home/home.component';

import { ProjectListComponent }  from './projects/project-list.component';
import { ProjectDetailComponent }  from './projects/project-detail.component';
import { ProjectFilterPipe }  from './projects/project-filter.pipe';
import { ProjectStartDatePipe }  from './projects/project-startDate.pipe';
import { ProjectEndDatePipe }  from './projects/project-endDate.pipe';
import { ProjectHoursPipe }  from './projects/project-hours.pipe';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent},
      { path: 'projects', component: ProjectListComponent},
      { path: 'projects/:id', component: ProjectDetailComponent},
    ])
    ],
  declarations: [ 
    AppComponent,

    HomeComponent,

    ProjectListComponent, 
    ProjectDetailComponent,
    ProjectFilterPipe,
    ProjectStartDatePipe,
    ProjectEndDatePipe,
    ProjectHoursPipe
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
