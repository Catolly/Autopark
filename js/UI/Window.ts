import * as Header from './Header';
import * as RightSide from './RightSide';
import * as LeftSide from './LeftSide';
import * as Bottom from './Bottom';

/**********
	Содержит глобальные параметры активных форм и автопарка, 
	Обновляет окно

**********/

let activeForm: any,
		activePark: any,
		activeCar: any,
		activeLiElem: any;

export function SetActiveForm(newActiveForm: any) { //Забивается при нажатии кнопки открытия формы
	activeForm = newActiveForm;
}

export function GetActiveForm() {
	return activeForm;
}

export function SetActivePark(newActivePark: any) {
	activePark = newActivePark;
}

export function GetActivePark() {
	return activePark;
}

export function SetActiveCar(newActiveCar: any) {
	activeCar = newActiveCar;
}

export function GetActiveCar() {
	return activeCar;
}

export function SetActiveLiElem(newActiveLiElem: any) {
	activeLiElem = newActiveLiElem;
}

export function GetActiveLiElem() {
	return activeLiElem;
}

export function Update() {
	Header.Update();
	RightSide.Update();
	LeftSide.Update();
	Bottom.Update();
}