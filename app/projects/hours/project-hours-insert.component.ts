import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { IProject } from '../project';
import { IProjectHour } from './project-hour';
import { ProjectService } from '../project.service';

@Component({
    templateUrl: 'app/projects/hours/project-hours-insert.component.html',
    providers: [ProjectService]
})

export class ProjectHoursInsertComponent implements OnInit {

    pageTitle: string = 'Insert Project Hours';
    project: IProject;
    projectHour: IProjectHour = { "hours": null, "description": ""};
    errorMessage: string;

     constructor(
        private _route: ActivatedRoute, 
        private _projectService: ProjectService, 
        private _router: Router) {
    }

    ngOnInit(): void {
        this._projectService.getProject(this._route.snapshot.params['id'])
            .subscribe(project => this.project = project,
                error => this.errorMessage = <any>error);
    }


    onBack(): void {
        this._router.navigate(['/project/update', this.project._id]);
    }

    onSave() {
        this.errorMessage = "";
        this.project.hours.push(this.projectHour);
        this._projectService.updateProject(this.project)
            .subscribe(result => this.processSaveResult(result),
                error => this.errorMessage = <any>error);
    }

    processSaveResult(result: any) {
        if (result.status === 'success') {
            this._router.navigate(['/project/update', this.project._id]);
        }
        else {
            this.errorMessage = "There was an error."
        }
    }
}