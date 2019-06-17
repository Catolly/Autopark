"use strict";
exports.__esModule = true;
var WindowMain = require("./Window");
/**********
    Открывает форму добавления машины, устанавливает Window.ActiveForm и
    устанавливает соответствующее название формы

**********/
function SetFormConfig() {
    var title = document.querySelector('.form-window .header .title');
    title.textContent = 'NEW CAR';
}
exports.SetFormConfig = SetFormConfig;
function OpenForm() {
    var form = document.querySelector('.add-form-wrap');
    form.style.visibility = 'visible';
}
exports.OpenForm = OpenForm;
function On() {
    var btn = document.querySelector('.add-btn');
    btn.onclick = function () {
        WindowMain.SetActiveForm('add'); //Устанавливаем активную форму для того, чтобы при нажатии кнопки 'Ок' форма обработалась верно
        SetFormConfig(); //Т.к. форма для создания и редактирования машины одна - эта функция поможет внешне отделить формы друг от друга
        OpenForm();
    };
}
exports.On = On;
