"use strict";
exports.__esModule = true;
var WindowMain = require("./Window");
var CreateAndEditCar = require("../logic/CreateAndEditCar");
var Form = require("./Form");
/**********
    Закрывает форму, в зависимости от типа формы ('add' или 'edit')
    собирает инфу с input'ов и select'а и отправляет ее на создание/редактирование
    в ../logic/CreateCar.ts

**********/
function CloseForm() {
    var form = document.querySelector('.add-form-wrap');
    form.style.visibility = 'hidden';
    var characts = document.querySelectorAll('.add-form  .characts .charact');
    var inputs = document.querySelectorAll('.add-form .add-charact input[name=value]');
    inputs[4].style.visibility = 'hidden';
    inputs[5].style.visibility = 'hidden';
    characts[4].style.visibility = 'hidden';
    characts[5].style.visibility = 'hidden';
}
exports.CloseForm = CloseForm;
/*
    data[0] - type,
    data[1] - name,
    data[2] - model,
    data[3] - weight,
    data[4] - horsepower,
    data[5] - fuel/battery capacity,
    data[6] - nitro capacity
*/
function CreateData() {
    var data = [];
    var inputs = document.querySelectorAll('.add-form .add-charact input[name=value]');
    var select = document.querySelector('.add-form .add-charact select[name=value]');
    //Считываем инфу с input'ов и select'а и вносим в data
    data[0] = select.value;
    data[1] = inputs[0].value;
    data[2] = inputs[1].value;
    data[3] = inputs[2].value;
    data[4] = inputs[3].value;
    data[5] = inputs[4].value;
    data[6] = inputs[5].value;
    return data;
}
exports.CreateData = CreateData;
function CreateCar() {
    var data = CreateData();
    CreateAndEditCar.CreateCar(data);
    if (WindowMain.GetActiveLiElem() != undefined)
        WindowMain.GetActiveLiElem().onclick();
    WindowMain.Update();
}
exports.CreateCar = CreateCar;
function EditCar() {
    var data = CreateData();
    var car = WindowMain.GetActiveCar();
    data[7] = car.GetPosition(); //Получаем позицию машины в парке для корректного replace
    CreateAndEditCar.EditCar(data);
    if (WindowMain.GetActiveLiElem() != undefined)
        WindowMain.GetActiveLiElem().onclick();
    WindowMain.Update();
}
exports.EditCar = EditCar;
function ClearForm() {
    var inputs = document.querySelectorAll('.add-form .add-charact input[name=value]');
    var select = document.querySelector('.add-form .add-charact select[name=value]');
    for (var i = 0; i < inputs.length; i++)
        inputs[i].value = '';
    select.value = 'Abstract';
}
exports.ClearForm = ClearForm;
function On() {
    var btn = document.querySelector('.add-form .ok-btn');
    btn.onclick = function () {
        if (Form.CheckValidation()) {
            switch (WindowMain.GetActiveForm()) {
                case 'add':
                    CloseForm();
                    CreateCar();
                    ClearForm();
                    break;
                case 'edit':
                    CloseForm();
                    EditCar();
                    ClearForm();
                    break;
            }
        }
    };
}
exports.On = On;
