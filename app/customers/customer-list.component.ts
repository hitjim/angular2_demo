import { Component, OnInit } from '@angular/core';

import { ICustomer } from './customer';
import { CustomerService } from './customer.service';

@Component({
    selector: 'pm-customers',
    templateUrl: 'app/customers/customer-list.component.html',
    styleUrls: ['app/customers/customer-list.component.css'],
    providers: [CustomerService]
})
export class CustomerListComponent implements OnInit {
    pageTitle: string = 'Customers';
    listFilter: string = '';
    orderBy: string = 'customer_name';
    orderDesc: boolean = false;
    customers: ICustomer[];
    errorMessage: string;

    constructor(private _customerService: CustomerService) {
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

    ngOnInit(): void {
        this._customerService.getCustomers()
            .subscribe(customers => this.customers = customers,
                error => this.errorMessage = <any>error);
    }
}