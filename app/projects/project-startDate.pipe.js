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
var common_1 = require("@angular/common");
var datePipe = new common_1.DatePipe('en-US');
var ProjectStartDatePipe = (function () {
    function ProjectStartDatePipe() {
    }
    ProjectStartDatePipe.prototype.transform = function (value) {
        if (value === null || value === "")
            return 'Not Started';
        var date = new Date(value);
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        return date.toLocaleDateString();
    };
    return ProjectStartDatePipe;
}());
ProjectStartDatePipe = __decorate([
    core_1.Pipe({
        name: 'startDate'
    }),
    __metadata("design:paramtypes", [])
], ProjectStartDatePipe);
exports.ProjectStartDatePipe = ProjectStartDatePipe;
//# sourceMappingURL=project-startDate.pipe.js.map