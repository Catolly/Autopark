import {AbstractCar} from './AbstractCar';
import {GasolineCar} from './GasolineCar';
import {GasolineCarWithNitro} from './GasolineCarWithNitro';
import {ElectricCar} from './ElectricCar';
import * as WindowMain from '../UI/Window';
import * as OkBtn from '../UI/OkBtn';
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

export function CreateCar(data:any):void {
	let car:any;

	//Создаем car нужного класса;
	switch (data[0]) {
		case('Abstract'): car = CreateAbstractCar(data); break;
		case('Gasoline'): car = CreateGasolineCar(data); break;
		case('Nitro-Gasoline'): car = CreateGasolineWithNitroCar(data); break;
		case('Electric'): car = CreateElectricCar(data); break;
		default: console.log('error setting param | CreateCar.ts -> CreateCar()'); break; /*Ошибка параметра*/
	}

	WindowMain.GetActivePark().AddCar(car);
}

export function CreateAbstractCar(data:any):any {
	let car:AbstractCar = new AbstractCar();

	car.SetName(data[1]);
	car.SetModel(data[2]);
	car.SetWeight(data[3]);
	car.SetHorsepower(data[4]);

	return car;
}

export function CreateGasolineCar(data:any):any {
	let car:GasolineCar = new GasolineCar();

	car.SetName(data[1]);
	car.SetModel(data[2]);
	car.SetWeight(data[3]);
	car.SetHorsepower(data[4]);
	car.SetFuelCapacity(data[5]);

	return car;
}

export function CreateGasolineWithNitroCar(data:any):any {
	let car:GasolineCarWithNitro = new GasolineCarWithNitro();

	car.SetName(data[1]);
	car.SetModel(data[2]);
	car.SetWeight(data[3]);
	car.SetHorsepower(data[4]);
	car.SetFuelCapacity(data[5]);
	car.SetNitricOxideVolume(data[6]);

	return car;
}

export function CreateElectricCar(data:any):any {
	let car:ElectricCar = new ElectricCar();

	car.SetName(data[1]);
	car.SetModel(data[2]);
	car.SetWeight(data[3]);
	car.SetHorsepower(data[4]);
	car.SetBatteryCapacity(data[5]);

	return car;
}

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

export function EditCar(data:any):void {
	let car:any;

	//Создаем car нужного класса;
	switch (data[0]) {
		case('Abstract'): car = CreateAbstractCar(data); break;
		case('Gasoline'): car = CreateGasolineCar(data); break;
		case('Nitro-Gasoline'): car = CreateGasolineWithNitroCar(data); break;
		case('Electric'): car = CreateElectricCar(data); break;
		default: console.log('error setting param | CreateCar.ts -> EditCar()'); break; /*Ошибка параметра*/
	}

	WindowMain.GetActivePark().ReplaceCar(car, data[7]);
}