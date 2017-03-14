import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { IProject } from './project';
import { ProjectService } from './project.service';

import { ICustomer } from '../customers/customer';
import { CustomerService } from '../customers/customer.service';

@Component({
    templateUrl:'app/projects/project-detail.component.html',
    providers: [ProjectService, CustomerService]
})
export class ProjectInsertComponent {

    pageTitle: string = 'Insert Project';
    project: IProject = this.createNewProject();
    errorMessage: string;
    customers: ICustomer[];


    constructor(
        private _route: ActivatedRoute, 
        private _projectService: ProjectService, 
        private _customerService: CustomerService,
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
            "start_date": null,
            "end_date": null,
            "details": null,
            "hours": [],
            "customer_id": null,
            "customer_name": null,
        }
    }

    ngOnInit(): void {
        this._customerService.getCustomers()
            .subscribe(customers => this.customers = customers,
                error => this.errorMessage = <any>error);
    }
}