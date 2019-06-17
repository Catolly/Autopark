"use strict";
exports.__esModule = true;
var RightSide = require("./RightSide");
var WindowMain = require("./Window");
/********
    При нажатии сдвигает границы VS на -1, прокрутывая лист вверх

    VS = VisibilityScope
    ALE - ActiveLiElem
********/
function On() {
    var locVS = RightSide.GetVS();
    var btn = document.querySelector('.car-list .scroll-section .scroll-up');
    btn.onclick = function () {
        if (0 < locVS.start) {
            /*let carPark:any = WindowMain.GetActivePark();
            let cars:any = carPark.GetCars();*/
            locVS.start--;
            locVS.end--;
            RightSide.SetVS(locVS);
            RightSide.Update();
            var ALE = WindowMain.GetActiveLiElem();
            if (ALE != undefined)
                ALE.onclick(); //Смещаем вниз выбранный элемент, содержащий машину
        }
    };
}
exports.On = On;
