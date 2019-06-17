"use strict";
exports.__esModule = true;
var AbstractCar_1 = require("./AbstractCar");
var GasolineCar_1 = require("./GasolineCar");
var GasolineCarWithNitro_1 = require("./GasolineCarWithNitro");
var ElectricCar_1 = require("./ElectricCar");
var WindowMain = require("../UI/Window");
/*import {GetData} from '../UI/SubmitForm';
import {CarPark} from './CarPark';
import {GetEditedCurPos} from '../UI/EditBtns';
import {GetEditedCurPos} from '../UI/EditBtns';*/
/**********
    Создает объект-машину определенного класса

**********/
/*
    CreateCar(data)

    data[0] - type,
    data[1] - name,
    data[2] - model,
    data[3] - weight,
    data[4] - horsepower,
    data[5] - fuel/battery capacity,
    data[6] - nitro capacity
*/
function CreateCar(data) {
    var car;
    //Создаем car нужного класса;
    switch (data[0]) {
        case ('Abstract'):
            car = CreateAbstractCar(data);
            break;
        case ('Gasoline'):
            car = CreateGasolineCar(data);
            break;
        case ('Nitro-Gasoline'):
            car = CreateGasolineWithNitroCar(data);
            break;
        case ('Electric'):
            car = CreateElectricCar(data);
            break;
        default:
            console.log('error setting param | CreateCar.ts -> CreateCar()');
            break; /*Ошибка параметра*/
    }
    WindowMain.GetActivePark().AddCar(car);
}
exports.CreateCar = CreateCar;
function CreateAbstractCar(data) {
    var car = new AbstractCar_1.AbstractCar();
    car.SetName(data[1]);
    car.SetModel(data[2]);
    car.SetWeight(data[3]);
    car.SetHorsepower(data[4]);
    return car;
}
exports.CreateAbstractCar = CreateAbstractCar;
function CreateGasolineCar(data) {
    var car = new GasolineCar_1.GasolineCar();
    car.SetName(data[1]);
    car.SetModel(data[2]);
    car.SetWeight(data[3]);
    car.SetHorsepower(data[4]);
    car.SetFuelCapacity(data[5]);
    return car;
}
exports.CreateGasolineCar = CreateGasolineCar;
function CreateGasolineWithNitroCar(data) {
    var car = new GasolineCarWithNitro_1.GasolineCarWithNitro();
    car.SetName(data[1]);
    car.SetModel(data[2]);
    car.SetWeight(data[3]);
    car.SetHorsepower(data[4]);
    car.SetFuelCapacity(data[5]);
    car.SetNitricOxideVolume(data[6]);
    return car;
}
exports.CreateGasolineWithNitroCar = CreateGasolineWithNitroCar;
function CreateElectricCar(data) {
    var car = new ElectricCar_1.ElectricCar();
    car.SetName(data[1]);
    car.SetModel(data[2]);
    car.SetWeight(data[3]);
    car.SetHorsepower(data[4]);
    car.SetBatteryCapacity(data[5]);
    return car;
}
exports.CreateElectricCar = CreateElectricCar;
/*
    EditCar(data)

    data[0] - type,
    data[1] - name,
    data[2] - model,
    data[3] - weight,
    data[4] - horsepower,
    data[5] - fuel/battery capacity,
    data[6] - nitro capacity
    data[7] - position in cars
*/
function EditCar(data) {
    var car;
    //Создаем car нужного класса;
    switch (data[0]) {
        case ('Abstract'):
            car = CreateAbstractCar(data);
            break;
        case ('Gasoline'):
            car = CreateGasolineCar(data);
            break;
        case ('Nitro-Gasoline'):
            car = CreateGasolineWithNitroCar(data);
            break;
        case ('Electric'):
            car = CreateElectricCar(data);
            break;
        default:
            console.log('error setting param | CreateCar.ts -> EditCar()');
            break; /*Ошибка параметра*/
    }
    WindowMain.GetActivePark().ReplaceCar(car, data[7]);
}
exports.EditCar = EditCar;
