"use strict";
exports.__esModule = true;
var WindowMain = require("./Window");
var RightSide = require("./RightSide");
var LeftSide = require("./LeftSide");
/********
    Устанавливает информацию о машинах в li-елементы и отображает их

    VS = VisibilityScope
********/
function SetElemsInfo() {
    var locVS = RightSide.GetVS();
    var carPark = WindowMain.GetActivePark();
    var cars = carPark.GetCars();
    var elems = document.querySelectorAll('.car-list .scroll-element'); //Получаем li-элементы списка
    var name = document.querySelectorAll('.car-list .scroll-element .name');
    var price = document.querySelectorAll('.car-list .scroll-element .price');
    for (var i = 0; i < elems.length; i++) {
        if (locVS.start + i >= cars.length)
            return; //Проверка на выход за пределы массива cars
        name[i].textContent = cars[i + locVS.start].GetName() + ' ' + cars[i + locVS.start].GetModel();
        price[i].textContent = cars[i + locVS.start].GetPrice() + ' y.e.';
        SetVisible(elems[i]);
    }
}
exports.SetElemsInfo = SetElemsInfo;
function SetDefault() {
    var elems = document.querySelectorAll('.car-list .scroll-element');
    for (var i = 0; i < elems.length; i++)
        elems[i].style.visibility = 'hidden';
}
exports.SetDefault = SetDefault;
function SetVisible(target) {
    target.style.visibility = 'visible';
}
exports.SetVisible = SetVisible;
function Update() {
    SetDefault();
    SetElemsInfo();
}
exports.Update = Update;
function ListDefault() {
    var liElems = document.querySelectorAll('.car-list .scroll-element');
    for (var i = 0; i < liElems.length; i++) {
        liElems[i].style.background = 'none';
    }
}
exports.ListDefault = ListDefault;
function SetElemActive(liNumber) {
    var liElems = document.querySelectorAll('.car-list .scroll-element');
    liElems[liNumber].style.background = 'url(./images/option_selected.png) 5px 0 no-repeat';
    liElems[liNumber].style.backgroundSize = '99% 100%';
}
exports.SetElemActive = SetElemActive;
function On() {
    var elems = document.querySelectorAll('.car-list .scroll-element');
    var _loop_1 = function (i) {
        elems[i].onclick = function () {
            var carPark = WindowMain.GetActivePark();
            var cars = carPark.GetCars();
            var locVS = RightSide.GetVS();
            ListDefault();
            SetElemActive(i);
            WindowMain.SetActiveCar(cars[i + locVS.start]);
            WindowMain.SetActiveLiElem(elems[i]);
            LeftSide.Update();
        };
        LeftSide.Update();
    };
    for (var i = 0; i < elems.length; i++) {
        _loop_1(i);
    }
}
exports.On = On;
