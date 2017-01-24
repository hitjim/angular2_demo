import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {IProject} from './project';

@Injectable()
export class ProjectService {
    private _serviceUrl = 'http://localhost:8080/';

    constructor(private _http: Http) { }

    getProjects(): Observable<IProject[]> {
        return this._http.get(this._serviceUrl + 'projects')
            .map((response: Response) => <IProject[]>response.json())
            .do(data => console.log('Projects: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProject(id: string): Observable<IProject> {
        return this._http.get(this._serviceUrl + "project/" + id )
            .map((response: Response) => <IProject>response.json())
            .do(data => console.log('Project: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveProject(project: IProject): Observable<IProject> {
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._serviceUrl + "project", JSON.stringify(project), options)
            .map((response: Response) => <IProject>response.json())
            .do(data => console.log('Project: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw('Error');
    }
}