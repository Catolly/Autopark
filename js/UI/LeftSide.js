"use strict";
exports.__esModule = true;
var WindowMain = require("./Window");
/********
    Содержит активную машину и отобржажает информацию о ней

    AC = ActiveCar
********/
function SetACInfo() {
    var AC = WindowMain.GetActiveCar();
    if (AC == '' || AC == undefined)
        return;
    var characts = document.querySelectorAll('.selected-car-info .charact');
    characts = Array.from(characts);
    var values = document.querySelectorAll('.selected-car-info .value');
    values = Array.from(values);
    characts[0].textContent = AC.GetName();
    values[0].textContent = AC.GetModel();
    values[1].textContent = AC.GetType();
    values[2].textContent = AC.GetWeight() + ' kg';
    values[3].textContent = AC.GetHorsepower() + ' hp';
    for (var i = 0; i < characts.length; i++) {
        characts[i].style.visibility = 'visible';
    }
    for (var i = 0; i < values.length; i++) {
        values[i].style.visibility = 'visible';
    }
    switch (AC.GetType()) {
        case 'Abstract':
            SetHidden(characts[4]);
            SetHidden(values[4]);
            SetHidden(characts[5]);
            SetHidden(values[5]);
            break;
        case 'Gasoline':
            characts[4].textContent = 'FUEL CAPACITY:';
            values[4].textContent = AC.GetFuelCapacity() + ' l.';
            SetHidden(characts[5]);
            SetHidden(values[5]);
            break;
        case 'Nitro-Gasoline':
            characts[4].textContent = 'FUEL CP:';
            values[4].textContent = AC.GetFuelCapacity() + ' l.';
            characts[5].textContent = 'NITRO CP:';
            values[5].textContent = AC.GetNitricOxideVolume() + ' l.';
            break;
        case 'Electric':
            characts[4].textContent = 'BATTERY CP:';
            values[4].textContent = AC.GetBatteryCapacity() + ' amp.';
            SetHidden(characts[5]);
            SetHidden(values[5]);
            break;
        default:
            console.log('Неизвестный тип машины | LeftSide.ts -> SetACInfo -> switch(AC.GetType())');
            break;
    }
    values[6].textContent = AC.GetPrice() + ' y.e.';
}
exports.SetACInfo = SetACInfo;
function SetHidden(target) {
    target.style.visibility = 'hidden';
}
exports.SetHidden = SetHidden;
function SetVisible(target) {
    target.style.visibility = 'visible';
}
exports.SetVisible = SetVisible;
function SetDefault() {
    var characts = document.querySelectorAll('.selected-car-info .charact');
    var values = document.querySelectorAll('.selected-car-info .value');
    for (var i = 0; i < characts.length; i++)
        characts[i].style.visibility = 'hidden';
    for (var i = 0; i < values.length; i++)
        values[i].style.visibility = 'hidden';
}
exports.SetDefault = SetDefault;
function Update() {
    SetDefault();
    SetACInfo();
}
exports.Update = Update;
