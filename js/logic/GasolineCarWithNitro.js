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
var GasolineCar_1 = require("./GasolineCar");
var GasolineCarWithNitro = /** @class */ (function (_super) {
    __extends(GasolineCarWithNitro, _super);
    function GasolineCarWithNitro(name, model, horsepower, weight, fuelCapacity, nitricOxideVolume) {
        var _this = _super.call(this, name, model, horsepower, weight, fuelCapacity) || this;
        _this.nitricOxideVolume = nitricOxideVolume && nitricOxideVolume || 0;
        _this.SetType('Nitro-Gasoline');
        return _this;
    }
    GasolineCarWithNitro.prototype.GetNitricOxideVolume = function () {
        return this.nitricOxideVolume;
    };
    GasolineCarWithNitro.prototype.SetNitricOxideVolume = function (nitricOxideVolume) {
        this.nitricOxideVolume = nitricOxideVolume;
    };
    GasolineCarWithNitro.prototype.GetPrice = function () {
        return Math.ceil((_super.prototype.GetPrice.call(this) +
            this.nitricOxideVolume * 0.5) * 100) / 100;
    };
    return GasolineCarWithNitro;
}(GasolineCar_1.GasolineCar));
exports.GasolineCarWithNitro = GasolineCarWithNitro;
