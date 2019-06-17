"use strict";
exports.__esModule = true;
var CarPark = /** @class */ (function () {
    function CarPark() {
        this.cars = [];
        this.name = '';
        this.totalCapacity = 0;
    }
    CarPark.prototype.AddCar = function (car) {
        this.cars.unshift(car);
        this.UpdatePositions();
    };
    CarPark.prototype.UpdatePositions = function () {
        for (var i = 0; i < this.cars.length; i++) {
            this.cars[i].SetPosition(i);
        }
    };
    CarPark.prototype.ReplaceCar = function (newCar, number) {
        this.cars.splice(number, 1, newCar);
        this.UpdatePositions();
    };
    CarPark.prototype.RemoveCar = function (i) {
        this.cars.splice(i, 1);
        this.UpdatePositions();
    };
    CarPark.prototype.GetTotalCapacity = function () {
        return this.totalCapacity;
    };
    CarPark.prototype.SetTotalCapacity = function (totalCapacity) {
        this.totalCapacity = totalCapacity;
    };
    CarPark.prototype.GetTotalPrice = function () {
        var sum = 0;
        for (var key in this.cars)
            sum += this.cars[key].GetPrice();
        return Math.ceil(sum * 100) / 100;
    };
    CarPark.prototype.GetCars = function () {
        return this.cars;
    };
    CarPark.prototype.SetName = function (name) {
        this.name = name;
    };
    CarPark.prototype.GetName = function () {
        return this.name;
    };
    return CarPark;
}());
exports.CarPark = CarPark;
