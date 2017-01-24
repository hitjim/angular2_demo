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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var project_service_1 = require("./project.service");
var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(_route, _projectService, _router) {
        this._route = _route;
        this._projectService = _projectService;
        this._router = _router;
        this.pageTitle = 'Project Detail';
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.snapshot.params['id'];
        this._projectService.getProject(id)
            .subscribe(function (project) { return _this.project = project; }, function (error) { return _this.errorMessage = error; });
    };
    ProjectDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/projects']);
    };
    ProjectDetailComponent.prototype.saveProject = function () {
        var _this = this;
        this._projectService.saveProject(this.project)
            .subscribe(function (project) { return _this.project = project; }, function (error) { return _this.errorMessage = error; });
    };
    return ProjectDetailComponent;
}());
ProjectDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/projects/project-detail.component.html',
        providers: [project_service_1.ProjectService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        project_service_1.ProjectService,
        router_2.Router])
], ProjectDetailComponent);
exports.ProjectDetailComponent = ProjectDetailComponent;
//# sourceMappingURL=project-detail.component.js.map