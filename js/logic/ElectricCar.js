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
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar(name, model, horsepower, weight, batteryCapacity) {
        var _this = _super.call(this, name, model, horsepower, weight) || this;
        _this.batteryCapacity = batteryCapacity && batteryCapacity || 0;
        _this.SetType('Electric');
        return _this;
    }
    ElectricCar.prototype.GetBatteryCapacity = function () {
        return this.batteryCapacity;
    };
    ElectricCar.prototype.SetBatteryCapacity = function (batteryCapacity) {
        this.batteryCapacity = batteryCapacity;
    };
    ElectricCar.prototype.GetPrice = function () {
        return Math.ceil((_super.prototype.GetPrice.call(this) +
            this.batteryCapacity * 0.2) * 100) / 100;
    };
    return ElectricCar;
}(AbstractCar_1.AbstractCar));
exports.ElectricCar = ElectricCar;
