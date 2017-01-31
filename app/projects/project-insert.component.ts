import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { IProject } from './project';
import { ProjectService } from './project.service';


@Component({
    templateUrl:'app/projects/project-detail.component.html',
    providers: [ProjectService]
})
export class ProjectInsertComponent {

    pageTitle: string = 'Insert Project';
    project: IProject = this.createNewProject();
    errorMessage: string;

    constructor(
        private _route: ActivatedRoute, 
        private _projectService: ProjectService, 
        private _router: Router) {
    }

    onBack(): void {
        this._router.navigate(['/projects']);
    }

    onSave() {
        this._projectService.insertProject(this.project)
            .subscribe(result => this.processSaveResult(result),
                error => this.errorMessage = <any>error);
    }

    processSaveResult(result: any) {
        console.log(result);
        this._router.navigate(['/projects']);
    }

    createNewProject(): IProject {
        return {
            "_id": null,
            "project_name": null,
            "customer_name": null,
            "start_date": null,
            "end_date": null,
            "details": null,
            "hours": [],
            "customer_phone": null,
            "customer_email": null
        }
    }
}