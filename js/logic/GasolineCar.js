"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var AbstractCar_1 = require("./AbstractCar");
var GasolineCar = /** @class */ (function (_super) {
    __extends(GasolineCar, _super);
    function GasolineCar(name, model, horsepower, weight, fuelCapacity) {
        var _this = _super.call(this, name, model, horsepower, weight) || this;
        _this.fuelCapacity = fuelCapacity && fuelCapacity || 0;
        _this.SetType('Gasoline');
        return _this;
    }
    GasolineCar.prototype.GetFuelCapacity = function () {
        return this.fuelCapacity;
    };
    GasolineCar.prototype.SetFuelCapacity = function (fuelCapacity) {
        this.fuelCapacity = fuelCapacity;
    };
    GasolineCar.prototype.GetPrice = function () {
        return Math.ceil((_super.prototype.GetPrice.call(this) +
            this.fuelCapacity * 0.15) * 100) / 100;
    };
    return GasolineCar;
}(AbstractCar_1.AbstractCar));
exports.GasolineCar = GasolineCar;
