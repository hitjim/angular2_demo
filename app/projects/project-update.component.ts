import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { IProject } from './project';
import { ProjectService } from './project.service';


@Component({
    templateUrl:'app/projects/project-detail.component.html',
    providers: [ProjectService]
})
export class ProjectUpdateComponent implements OnInit {

    pageTitle: string = 'Update Project';
    project: IProject;
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
        this._router.navigate(['/projects']);
    }

    onSave() {
        this.errorMessage = "";
        this._projectService.updateProject(this.project)
            .subscribe(result => this.processSaveResult(result),
                error => this.errorMessage = <any>error);
    }

    processSaveResult(result: any) {
        if (result.status === 'success') {
            this._router.navigate(['/projects']);
        }
        else {
            this.errorMessage = "There was an error."
        }
    }

}