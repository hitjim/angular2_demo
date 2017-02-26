import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { ICustomer } from './customer';
import { CustomerService } from './customer.service';

@Component({
    templateUrl: "app/customers/customer-detail.component.html",
    providers: [CustomerService]
})
export class CustomerInsertComponent {
    pageTitle: string = 'Insert Customer';
    customer: ICustomer = this.createNewCustomer();
    errorMessage: string;

    constructor(
        private _route: ActivatedRoute,
        private _customerService: CustomerService,
        private _router: Router) {

    }

    onBack(): void {
        this._router.navigate(['/customers']);
    }

    onSave() {
        this._customerService.insertCustomer(this.customer)
            .subscribe(result => this.processSaveResult(result),
                error => this.errorMessage = <any>error);
    }

    processSaveResult(result: any) {
        console.log(result);
        this._router.navigate(['/customers']);
    }

    createNewCustomer(): ICustomer {
        return {
            "_id": null,
            "customer_name": null,
            "customer_phone": null,
            "customer_email": null
        }
    }
}