import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {ICustomer} from './customer';

@Injectable()
export class CustomerService {
    private _serviceUrl = 'http://localhost:8080/';

    constructor(private _http: Http) { }

    getCustomers(): Observable<ICustomer[]> {
        return this._http.get(this._serviceUrl + 'customers')
            .map((response: Response) => <ICustomer[]>response.json())
            .do(data => console.log('List Customers: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCustomer(id: string): Observable<ICustomer> {
        return this._http.get(this._serviceUrl + "customer/" + id )
            .map((response: Response) => <ICustomer>response.json())
            .do(data => console.log('Get Customer: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    insertCustomer(customer: ICustomer): Observable<boolean> {
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._serviceUrl + "customer", JSON.stringify(customer), options)
            .map((response: Response) => response.json())
            .do(data => console.log('Insert Customer: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    updateCustomer(customer: ICustomer): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.put(this._serviceUrl + "customer", customer, options)
            .map((response: Response) => response.json())
            .do(data => console.log('Update Customer: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw('Error');
    }
}