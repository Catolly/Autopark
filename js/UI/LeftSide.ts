import * as WindowMain from './Window';

/********
	Содержит активную машину и отобржажает информацию о ней

	AC = ActiveCar
********/

export function SetACInfo() {
	let AC:any = WindowMain.GetActiveCar();
	if(AC == '' || AC == undefined) return;

	let characts:any = document.querySelectorAll('.selected-car-info .charact');
	characts = Array.from(characts);
	let values:any = document.querySelectorAll('.selected-car-info .value');
	values = Array.from(values);

	characts[0].textContent = AC.GetName();
	values[0].textContent = AC.GetModel();

	values[1].textContent = AC.GetType();
	values[2].textContent = AC.GetWeight() + ' kg';
	values[3].textContent = AC.GetHorsepower() + ' hp';

	for(let i = 0; i < characts.length; i++) {
		characts[i].style.visibility = 'visible';
	}

	for(let i = 0; i < values.length; i++) {
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
		
		default: console.log('Неизвестный тип машины | LeftSide.ts -> SetACInfo -> switch(AC.GetType())');
		break;
	}

	values[6].textContent = AC.GetPrice() + ' y.e.';
}

export function SetHidden(target:any) {
	target.style.visibility = 'hidden';
}

export function SetVisible(target:any) {
	target.style.visibility = 'visible';
}

export function SetDefault() {
	let characts:any = document.querySelectorAll('.selected-car-info .charact');
	let values:any = document.querySelectorAll('.selected-car-info .value');

	for(let i = 0; i < characts.length; i++) characts[i].style.visibility = 'hidden';
	for(let i = 0; i < values.length; i++) values[i].style.visibility = 'hidden';
}

export function Update() {
	SetDefault();
	SetACInfo();
}