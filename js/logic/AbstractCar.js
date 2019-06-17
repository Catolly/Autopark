"use strict";
exports.__esModule = true;
var AbstractCar = /** @class */ (function () {
    function AbstractCar(name, model, horsepower, weight) {
        this.name = name && name || '';
        this.model = model && model || '';
        this.horsepower = horsepower && horsepower || 0;
        this.weight = weight && weight || 0;
        this.position = 0;
        this.type = 'Abstract';
    }
    AbstractCar.prototype.GetPrice = function () {
        return Math.ceil((this.weight * 0.06 +
            this.horsepower * 0.3) * 100) / 100;
    };
    AbstractCar.prototype.GetPosition = function () {
        return this.position;
    };
    AbstractCar.prototype.SetPosition = function (position) {
        this.position = position;
    };
    AbstractCar.prototype.GetType = function () {
        return this.type;
    };
    AbstractCar.prototype.SetType = function (type) {
        this.type = type;
    };
    AbstractCar.prototype.GetWeight = function () {
        return this.weight;
    };
    AbstractCar.prototype.SetWeight = function (weight) {
        this.weight = weight;
    };
    AbstractCar.prototype.GetHorsepower = function () {
        return this.horsepower;
    };
    AbstractCar.prototype.SetHorsepower = function (horsepower) {
        this.horsepower = horsepower;
    };
    AbstractCar.prototype.GetModel = function () {
        return this.model;
    };
    AbstractCar.prototype.SetModel = function (model) {
        this.model = model;
    };
    AbstractCar.prototype.GetName = function () {
        return this.name;
    };
    AbstractCar.prototype.SetName = function (name) {
        this.name = name;
    };
    return AbstractCar;
}());
exports.AbstractCar = AbstractCar;
