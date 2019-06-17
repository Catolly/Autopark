import * as CarsList from './CarsList';

/********
	Обновляет информацию о листе машин (CarsList.Update())
	и содержит область видимости листа (VisibilityScope)

	VS = VisibilityScope
********/

let VisibilityScope:any = {start: 0, end: 5};

export function SetVS(newVS) { //Задание стартового значения VS, используется при инициализации
	VisibilityScope = newVS;
}

export function GetVS() {
	return VisibilityScope;
}

export function GetVSRightBound() {
	let rightBound = document.querySelectorAll('.choose-car .scroll-element').length - 1;
	return rightBound;
}

export function GetVSSize() {
	let VSSize = document.querySelectorAll('.choose-car .scroll-element').length;
	return VSSize;
}

export function Update() {
	CarsList.Update();
}