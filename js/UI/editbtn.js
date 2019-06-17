"use strict";
exports.__esModule = true;
var WindowMain = require("./Window");
/**********
    Открывает форму редактирования машины, устанавливает WindowMain.ActiveForm,
    устанавливает соответствующее название формы и выставляет в input'ы и
    select параметры редактируемой машины

    AC - activeCar
**********/
function SetFormConfig() {
    SetTitle('EDIT CAR');
    SetCarParams(); //Выставляет параметры редактируемой машины в input'ы и select
}
exports.SetFormConfig = SetFormConfig;
function OpenForm() {
    var form = document.querySelector('.add-form-wrap');
    form.style.visibility = 'visible';
}
exports.OpenForm = OpenForm;
function SetTitle(newTitle) {
    var title = document.querySelector('.form-window .header .title');
    title.textContent = newTitle;
}
exports.SetTitle = SetTitle;
function SetCarParams() {
    var AC = WindowMain.GetActiveCar();
    var inputs = document.querySelectorAll('.add-form .add-charact input[name=value]');
    var select = document.querySelector('.add-form .add-charact select[name=value]');
    select.value = AC.GetType();
    inputs[0].value = AC.GetName();
    inputs[1].value = AC.GetModel();
    inputs[2].value = AC.GetWeight();
    inputs[3].value = AC.GetHorsepower();
    switch (AC.GetType()) {
        case 'Abstract':
            select.onchange();
            inputs[4].value = '';
            inputs[5].value = '';
            break;
        case 'Gasoline':
            select.onchange();
            inputs[4].value = AC.GetFuelCapacity();
            inputs[5].value = '';
            break;
        case 'Nitro-Gasoline':
            select.onchange();
            inputs[4].value = AC.GetFuelCapacity();
            inputs[5].value = AC.GetNitricOxideVolume();
            break;
        case 'Electric':
            select.onchange();
            inputs[4].value = AC.GetBatteryCapacity();
            inputs[5].value = '';
            break;
    }
}
exports.SetCarParams = SetCarParams;
function On() {
    var btns = document.querySelectorAll('.car-list .edit-btn');
    var elems = document.querySelectorAll('.car-list .scroll-element');
    var _loop_1 = function (i) {
        btns[i].onclick = function () {
            var ALE = elems[i];
            WindowMain.SetActiveLiElem(ALE);
            if (ALE != undefined)
                ALE.onclick();
            WindowMain.SetActiveForm('edit'); //Устанавливаем активную форму для того, чтобы при нажатии кнопки 'Ок' форма обработалась верно
            SetFormConfig(); //Т.к. форма для создания и редактирования машины одна - эта функция поможет внешне отделить формы друг от друга
            OpenForm();
        };
    };
    for (var i = 0; i < btns.length; i++) {
        _loop_1(i);
    }
}
exports.On = On;
