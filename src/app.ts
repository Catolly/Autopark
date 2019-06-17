import {CarParkFactory} from '../js/logic/CarParkFactory';
/*import {CarParkPrinter} from '../js/logic/CarParkPrinter';*/
import * as Triggers from '../js/UI/Triggers';

//Создаем фабрику и парк автомобилей, после чего выводим всю инфу о парке
let carParkFactory:CarParkFactory = new CarParkFactory();
let carPark = carParkFactory.CreateCarPark();
/*let carParkPrinter:CarParkPrinter = new CarParkPrinter();
carParkPrinter.PrintCarPark(carPark);*/

//Инициализация триггеров кнопок
Triggers.Init();