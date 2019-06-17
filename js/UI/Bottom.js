"use strict";
exports.__esModule = true;
var WindowMain = require("./Window");
/********
    Обновляет информацию о текущей и максимальной вместимостях автопарка и его цене

    CP - CarPark
********/
function SetCPTotalPrice(newCPTotalPrice) {
    var charact = document.querySelector('.park-info .price .total-price');
    charact.textContent = newCPTotalPrice + ' y.e.';
}
exports.SetCPTotalPrice = SetCPTotalPrice;
function GetCPTotalPrice() {
    var carPark = WindowMain.GetActivePark();
    return carPark.GetTotalPrice();
}
exports.GetCPTotalPrice = GetCPTotalPrice;
function SetCPMaxCapacity(newCPMaxCapacity) {
    var charact = document.querySelector('.park-info .capacity .max-capacity');
    charact.textContent = newCPMaxCapacity;
}
exports.SetCPMaxCapacity = SetCPMaxCapacity;
function GetCPMaxCapacity() {
    var carPark = WindowMain.GetActivePark();
    return carPark.GetTotalCapacity();
}
exports.GetCPMaxCapacity = GetCPMaxCapacity;
function SetCPCurCapacity(newCPCurCapacity) {
    var charact = document.querySelector('.park-info .capacity .cur-capacity');
    charact.textContent = newCPCurCapacity;
}
exports.SetCPCurCapacity = SetCPCurCapacity;
function GetCPCurCapacity() {
    var carPark = WindowMain.GetActivePark();
    return carPark.GetCars().length;
}
exports.GetCPCurCapacity = GetCPCurCapacity;
function Update() {
    SetCPTotalPrice(GetCPTotalPrice());
    SetCPMaxCapacity(GetCPMaxCapacity());
    SetCPCurCapacity(GetCPCurCapacity());
}
exports.Update = Update;
