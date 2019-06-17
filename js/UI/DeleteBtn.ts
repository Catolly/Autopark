import * as WindowMain from './Window';
import * as RightSide from './RightSide';
import * as CarPark from '../logic/CarPark';

/**********
	Удаляет машину, хранящуюся в li CarList'а из автопарка

**********/

export function DeleteCar(liNumber) {
	let	locVS:any = RightSide.GetVS(); //Для получения абсолютной позиции удаляемой машины используется locVS.start

	let carPark:any = WindowMain.GetActivePark();
	carPark.RemoveCar(liNumber + locVS.start);
	WindowMain.SetActivePark(carPark);
	WindowMain.Update();
}

export function On() {
	let btns:any = document.querySelectorAll('.car-list .delete-btn');
	for (let liNumber = 0; liNumber < btns.length; liNumber++) {
		btns[liNumber].onclick = function() {
			/*
			liNumber - относительная позиция машины, передаем ее для 
			перерасчета относительной позиции в абсолютную
			Абсолютная позиция - позиция машины в массиве машин автопарка,
			Через нее автопарк понимает, какую машину ему удалять
			*/
			DeleteCar(liNumber);
			WindowMain.Update();
		};
	}
}

