import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { IProject } from './project';
import { ProjectService } from './project.service';


@Component({
    templateUrl:'app/projects/project-detail.component.html',
    providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {

    pageTitle: string = 'Project Detail';
    project: IProject;
    errorMessage: string;

    constructor(
        private _route: ActivatedRoute, 
        private _projectService: ProjectService, 
        private _router: Router) {
    }

    ngOnInit(): void {
        let id = this._route.snapshot.params['id'];

        this._projectService.getProject(id)
            .subscribe(project => this.project = project,
                error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/projects']);
    }

    saveProject() {
        this._projectService.saveProject(this.project)
            .subscribe(project => this.project = project,
                error => this.errorMessage = <any>error);
    }

}