import { Component } from '@angular/core';

import { IProject } from './project';

@Component({
    templateUrl:'app/projects/project-detail.component.html'
})
export class ProjectDetailComponent {
    pageTitle: string = 'Project Detail';
    project: IProject;
}