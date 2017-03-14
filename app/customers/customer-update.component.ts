import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { ICustomer } from './customer';
import { CustomerService } from './customer.service';

import { IProject } from '../projects/project';
import { ProjectService } from '../projects/project.service';

@Component({
    templateUrl:'app/customers/customer-detail.component.html',
    providers: [CustomerService, ProjectService]
})
export class CustomerUpdateComponent implements OnInit {

    pageTitle: string = 'Update Customer';
    customerProjects: IProject[];
    customer: ICustomer;
    errorMessage: string;
    projects: IProject[];

    constructor(
        private _route: ActivatedRoute, 
        private _customerService: CustomerService,
        private _projectService: ProjectService,
        private _router: Router) {
    }

    ngOnInit(): void {
        this.customerProjects = [];
        this._projectService.getProjects()
            .subscribe(projects => this.projects = projects,
                error => this.errorMessage = <any>error);
        this._customerService.getCustomer(this._route.snapshot.params['id'])
            .subscribe(customer => this.setCustomerData(customer),
                error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/customers']);
    }

    onSave() {
        this.errorMessage = "";
        this._customerService.updateCustomer(this.customer)
            .subscribe(result => this.processSaveResult(result),
                error => this.errorMessage = <any>error);
    }

    processSaveResult(result: any) {
        if (result.status === 'success') {
            this._router.navigate(['/customers']);
        }
        else {
            this.errorMessage = "There was an error."
        }
    }

    setCustomerData(customer: ICustomer): void {
        this.customer = customer;

        for (let project of this.projects) {
            console.log('project', project);
            if (project.customer_id === this.customer._id) {
                console.log('customer', customer);
                this.customerProjects.push(project);
            }
        }
    }
}