import { Component, OnInit } from '@angular/core';
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
export class ProjectUpdateComponent implements OnInit {

    pageTitle: string = 'Update Project';
    project: IProject;
    errorMessage: string;
    customerMap: Map<string, ICustomer> = new Map<string, ICustomer>();
    customers: ICustomer[];

    constructor(
        private _route: ActivatedRoute, 
        private _projectService: ProjectService,
        private _customerService: CustomerService,
        private _router: Router) {
    }

    ngOnInit(): void {
        this._projectService.getProject(this._route.snapshot.params['id'])
            .subscribe(project => this.project = project,
                error => this.errorMessage = <any>error);
        this._customerService.getCustomers()
            .subscribe(customers => this.buildCustomerData(customers),
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

    buildCustomerData(customers: ICustomer[]): void {
        this.customers = customers;
        for (let customer of customers) {
            this.customerMap[customer._id] = customer.customer_name;
        }

        this.project.customer_name = this.customerMap[this.project.customer_id];
    }

}