"use strict";
exports.__esModule = true;
var WindowMain = require("./Window");
/**********
    Обновляет название окна

**********/
function SetTitle() {
    var headerTitle = document.querySelector('.park-name');
    headerTitle.textContent = 'AUTOPARK - ' + GetTitle();
}
exports.SetTitle = SetTitle;
function GetTitle() {
    var carPark = WindowMain.GetActivePark();
    return carPark.GetName();
}
exports.GetTitle = GetTitle;
function Update() {
    SetTitle();
}
exports.Update = Update;
