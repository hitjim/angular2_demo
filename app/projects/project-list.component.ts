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
    orderBy: string = 'project_name';
    orderDesc: boolean = false;
    projects: IProject[];
    errorMessage: string;

    constructor(private _projectService: ProjectService) {
    }

    toggleComplete(): void {
        this.showComplete = !this.showComplete;
    }

    onOrderBy(field: string): void {
        console.log(this.orderBy + " " + this.orderDesc);
        if (this.orderBy === field) {
            this.orderBy = field;
            this.orderDesc = !this.orderDesc;
            return;
        }
        this.orderBy = field;
        this.orderDesc = false;
    }

    handleDelete(project: IProject): void {
        if (confirm(project._id)) {
            this._projectService.deleteProject(project);
        };

    }

    ngOnInit(): void {
        this._projectService.getProjects()
            .subscribe(projects => this.projects = projects,
                error => this.errorMessage = <any>error);
    }
}