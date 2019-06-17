"use strict";
exports.__esModule = true;
var CarParkFactory_1 = require("../js/logic/CarParkFactory");
/*import {CarParkPrinter} from '../js/logic/CarParkPrinter';*/
var Triggers = require("../js/NewUI/Triggers");
//Создаем фабрику и парк автомобилей, после чего выводим всю инфу о парке
var carParkFactory = new CarParkFactory_1.CarParkFactory();
var carPark = carParkFactory.CreateCarPark();
/*let carParkPrinter:CarParkPrinter = new CarParkPrinter();
carParkPrinter.PrintCarPark(carPark);*/
//Инициализация триггеров кнопок
Triggers.Init();
