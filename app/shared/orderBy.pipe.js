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
var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (value, field, desc) {
        var _this = this;
        if (field === null || field === '')
            return value;
        if (!desc)
            desc = false;
        var descNumber = desc ? 1 : -1;
        return value.sort(function (l, r) {
            if (_this.isDate(l[field]) < _this.isDate(r[field]))
                return (1 * descNumber);
            if (_this.isDate(l[field]) > _this.isDate(r[field]))
                return (-1 * descNumber);
            return 0;
        });
    };
    OrderByPipe.prototype.isDate = function (field) {
        if (isNaN(Date.parse(field))) {
            return field;
        }
        return Date.parse(field);
    };
    return OrderByPipe;
}());
OrderByPipe = __decorate([
    core_1.Pipe({
        name: 'orderBy'
    }),
    __metadata("design:paramtypes", [])
], OrderByPipe);
exports.OrderByPipe = OrderByPipe;
//# sourceMappingURL=orderBy.pipe.js.map