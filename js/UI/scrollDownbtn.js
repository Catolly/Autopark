"use strict";
exports.__esModule = true;
var RightSide = require("./RightSide");
var WindowMain = require("./Window");
/********
    При нажатии сдвигает границы VS на +1, прокрутывая лист вниз

    VS = VisibilityScope
    ALE - ActiveLiElem
********/
function On() {
    var locVS = RightSide.GetVS();
    var carPark = WindowMain.GetActivePark();
    var cars = carPark.GetCars();
    var btn = document.querySelector('.car-list .scroll-section .scroll-down');
    btn.onclick = function () {
        if (cars.length - 1 > locVS.end) {
            locVS.start++;
            locVS.end++;
            RightSide.SetVS(locVS);
            RightSide.Update();
            var ALE = WindowMain.GetActiveLiElem();
            if (ALE != undefined)
                ALE.onclick();
        }
    };
}
exports.On = On;
