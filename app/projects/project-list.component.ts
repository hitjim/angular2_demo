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
        if (confirm("Are you sure you want to delete project with ID: " + project._id)) {
            this._projectService.deleteProject(project)
                .subscribe(
                    response => this.deleteSuccess(project),
                    error => this.errorMessage = <any>error);
        }

    }

    // This is probably unnecessary, but I like to keep a pattern of handling
    // success/error in their own functions, in situations where there's more than
    // a 1-liner to do.  But yeah, if using ngOnInit again was the right thing to do,
    // this is major overkill :D
    deleteSuccess(project: IProject): void {
        console.log('deleted project', project);
        console.log('projects', this.projects);
        // ngOnInit again here seems heavy-handed?  Maybe not?  But it works ;)
        // I tried finding the deleted project in this.projects, which is why I
        // pass the project in here.  When I spliced it out of this.projects, 
        // it didn't get removed from the view until I refreshed.  Not ideal.
        // Although, I guess this way, if there were more than 1 user, and they
        // both deleted a different project at the same time, getting a 
        // fresh list of projects after delete would increase the chances that 
        // their list is accurate.
        this.ngOnInit();
    }

    ngOnInit(): void {
        this._projectService.getProjects()
            .subscribe(projects => this.projects = projects,
                error => this.errorMessage = <any>error);
    }
}