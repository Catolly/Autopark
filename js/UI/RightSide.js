"use strict";
exports.__esModule = true;
var CarsList = require("./CarsList");
/********
    Обновляет информацию о листе машин (CarsList.Update())
    и содержит область видимости листа (VisibilityScope)

    VS = VisibilityScope
********/
var VisibilityScope = { start: 0, end: 5 };
function SetVS(newVS) {
    VisibilityScope = newVS;
}
exports.SetVS = SetVS;
function GetVS() {
    return VisibilityScope;
}
exports.GetVS = GetVS;
function GetVSRightBound() {
    var rightBound = document.querySelectorAll('.choose-car .scroll-element').length - 1;
    return rightBound;
}
exports.GetVSRightBound = GetVSRightBound;
function GetVSSize() {
    var VSSize = document.querySelectorAll('.choose-car .scroll-element').length;
    return VSSize;
}
exports.GetVSSize = GetVSSize;
function Update() {
    CarsList.Update();
}
exports.Update = Update;
