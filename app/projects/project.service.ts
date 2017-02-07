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
            .do(data => console.log('List Projects: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProject(id: string): Observable<IProject> {
        return this._http.get(this._serviceUrl + "project/" + id )
            .map((response: Response) => <IProject>response.json())
            .do(data => console.log('Get Project: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    insertProject(project: IProject): Observable<boolean> {
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._serviceUrl + "project", JSON.stringify(project), options)
            .map((response: Response) => response.json())
            .do(data => console.log('Insert Project: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    updateProject(project: IProject): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.put(this._serviceUrl + "project", project, options)
            .map((response: Response) => response.json())
            .do(data => console.log('Update Project: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    deleteProject(project: IProject): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.delete(this._serviceUrl + "project/" + project._id, options)
            .map((response: Response) => {
                return response.json();
            })
            .do((data) => {
                console.log('Delete Project: ' + JSON.stringify(data))
            })
            .catch((err: any) => {
                return this.handleError(err);
            });
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw('Error');
    }
}