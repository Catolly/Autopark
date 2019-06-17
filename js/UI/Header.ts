import * as WindowMain from './Window';

/**********
	Обновляет название окна

**********/

export function SetTitle() {
	let headerTitle:any = document.querySelector('.park-name');
	headerTitle.textContent = 'AUTOPARK - ' + GetTitle();
}

export function GetTitle() {
	let carPark:any =  WindowMain.GetActivePark();

	return carPark.GetName();
}

export function Update() {
	SetTitle();
}