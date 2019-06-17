"use strict";
exports.__esModule = true;
var WindowMain = require("./Window");
var RightSide = require("./RightSide");
/**********
    Удаляет машину, хранящуюся в li CarList'а из автопарка

**********/
function DeleteCar(liNumber) {
    var locVS = RightSide.GetVS(); //Для получения абсолютной позиции удаляемой машины используется locVS.start
    var carPark = WindowMain.GetActivePark();
    carPark.RemoveCar(liNumber + locVS.start);
    WindowMain.SetActivePark(carPark);
    WindowMain.Update();
}
exports.DeleteCar = DeleteCar;
function On() {
    var btns = document.querySelectorAll('.car-list .delete-btn');
    var _loop_1 = function (liNumber) {
        btns[liNumber].onclick = function () {
            /*
            liNumber - относительная позиция машины, передаем ее для
            перерасчета относительной позиции в абсолютную
            Абсолютная позиция - позиция машины в массиве машин автопарка,
            Через нее автопарк понимает, какую машину ему удалять
            */
            DeleteCar(liNumber);
            WindowMain.Update();
        };
    };
    for (var liNumber = 0; liNumber < btns.length; liNumber++) {
        _loop_1(liNumber);
    }
}
exports.On = On;
