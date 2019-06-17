"use strict";
exports.__esModule = true;
var AddBtn = require("./AddBtn");
var CancelBtn = require("./CancelBtn");
var DeleteBtn = require("./DeleteBtn");
var EditBtn = require("./EditBtn");
var OkBtn = require("./OkBtn");
var ScrollDownBtn = require("./ScrollDownBtn");
var ScrollUpBtn = require("./ScrollUpBtn");
var Select = require("./Select");
var CarsList = require("./CarsList");
/**********
    Включает триггеры всех активных элементов на странице

**********/
function Init() {
    AddBtn.On();
    CancelBtn.On();
    DeleteBtn.On();
    EditBtn.On();
    OkBtn.On();
    ScrollDownBtn.On();
    ScrollUpBtn.On();
    Select.On();
    CarsList.On();
}
exports.Init = Init;
