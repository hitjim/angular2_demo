"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var ProjectService = (function () {
    function ProjectService(_http) {
        this._http = _http;
        this._serviceUrl = 'http://localhost:8080/';
    }
    ProjectService.prototype.getProjects = function () {
        return this._http.get(this._serviceUrl + 'projects')
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('List Projects: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProjectService.prototype.getProject = function (id) {
        return this._http.get(this._serviceUrl + "project/" + id)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('Get Project: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProjectService.prototype.insertProject = function (project) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._serviceUrl + "project", JSON.stringify(project), options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('Insert Project: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProjectService.prototype.updateProject = function (project) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(this._serviceUrl + "project", project, options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('Update Project: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProjectService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw('Error');
    };
    return ProjectService;
}());
ProjectService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map