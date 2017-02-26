import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { ICustomer } from './customer';
import { CustomerService } from './customer.service';


@Component({
    templateUrl:'app/customers/customer-detail.component.html',
    providers: [CustomerService]
})
export class CustomerUpdateComponent implements OnInit {

    pageTitle: string = 'Update Customer';
    customer: ICustomer;
    errorMessage: string;

    constructor(
        private _route: ActivatedRoute, 
        private _customerService: CustomerService, 
        private _router: Router) {
    }

    ngOnInit(): void {
        this._customerService.getCustomer(this._route.snapshot.params['id'])
            .subscribe(customer => this.customer = customer,
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

}