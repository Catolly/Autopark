import * as WindowMain from './Window';

/********
	Обновляет информацию о текущей и максимальной вместимостях автопарка и его цене

	CP - CarPark
********/

export function SetCPTotalPrice(newCPTotalPrice: any) {
	let charact:any = document.querySelector('.park-info .price .total-price');
	charact.textContent = newCPTotalPrice + ' y.e.';
}

export function GetCPTotalPrice() {
	let carPark:any = WindowMain.GetActivePark();
	return carPark.GetTotalPrice();
}

export function SetCPMaxCapacity(newCPMaxCapacity: any) {
	let charact:any = document.querySelector('.park-info .capacity .max-capacity');
	charact.textContent = newCPMaxCapacity;
}

export function GetCPMaxCapacity() {
	let carPark:any = WindowMain.GetActivePark();
	return carPark.GetTotalCapacity();
}

export function SetCPCurCapacity(newCPCurCapacity: any) {
	let charact:any = document.querySelector('.park-info .capacity .cur-capacity');
	charact.textContent = newCPCurCapacity;
}

export function GetCPCurCapacity() {
	let carPark:any = WindowMain.GetActivePark();
	return carPark.GetCars().length;
}

export function Update() {
	SetCPTotalPrice(GetCPTotalPrice());
	SetCPMaxCapacity(GetCPMaxCapacity());
	SetCPCurCapacity(GetCPCurCapacity());
}