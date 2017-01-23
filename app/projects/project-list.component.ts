import { Component, OnInit } from '@angular/core';

import { IProject } from './project';
import { ProjectService } from './project.service';

@Component({
    selector: 'pm-projects',
    templateUrl: 'app/projects/project-list.component.html',
    styleUrls: ['app/projects/project-list.component.css'],
    providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {
    pageTitle: string = 'Projects';
    showComplete: boolean = false;
    listFilter: string = '';
    projects: IProject[];;
    errorMessage: string;

    constructor(private _projectService: ProjectService) {

    }

    toggleComplete(): void {
        this.showComplete = !this.showComplete;
    }

    ngOnInit(): void {
        this._projectService.getProjects()
            .subscribe(projects => this.projects = projects,
                error => this.errorMessage = <any>error);
    }
}