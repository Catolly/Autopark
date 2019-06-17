"use strict";
exports.__esModule = true;
var Header = require("./Header");
var RightSide = require("./RightSide");
var LeftSide = require("./LeftSide");
var Bottom = require("./Bottom");
/**********
    Содержит глобальные параметры активных форм и автопарка,
    Обновляет окно

**********/
var activeForm, activePark, activeCar, activeLiElem;
function SetActiveForm(newActiveForm) {
    activeForm = newActiveForm;
}
exports.SetActiveForm = SetActiveForm;
function GetActiveForm() {
    return activeForm;
}
exports.GetActiveForm = GetActiveForm;
function SetActivePark(newActivePark) {
    activePark = newActivePark;
}
exports.SetActivePark = SetActivePark;
function GetActivePark() {
    return activePark;
}
exports.GetActivePark = GetActivePark;
function SetActiveCar(newActiveCar) {
    activeCar = newActiveCar;
}
exports.SetActiveCar = SetActiveCar;
function GetActiveCar() {
    return activeCar;
}
exports.GetActiveCar = GetActiveCar;
function SetActiveLiElem(newActiveLiElem) {
    activeLiElem = newActiveLiElem;
}
exports.SetActiveLiElem = SetActiveLiElem;
function GetActiveLiElem() {
    return activeLiElem;
}
exports.GetActiveLiElem = GetActiveLiElem;
function Update() {
    Header.Update();
    RightSide.Update();
    LeftSide.Update();
    Bottom.Update();
}
exports.Update = Update;
