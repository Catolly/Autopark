import * as Okbtn from './OkBtn';
import * as WindowMain from './Window';

/**********
	Проверяет валидацию введенных данных в формах создания/едактирования машины

	Ограничения вводимых данных:
	Name = 13 символов
	Model = 4 символа
	Weight - число до 99999
	Power - число до 9999
	Fuelcp/battery - число До 999
	Nitro - число до 99 
	Price - число, должно выходить не более 9999, округлять до сотых

	data[0] - type,
	data[1] - name,
	data[2] - model,
	data[3] - weight,
	data[4] - horsepower,
	data[5] - fuel/battery capacity,
	data[6] - nitro capacity
**********/

let isValid:boolean;

export function CheckValidation() {
	let data:any = Okbtn.CreateData();
	isValid = true;

	switch (data[0]) {
		case 'Abstract':
		HasEmpty(data, 5);
		break;

		case 'Gasoline':
		HasEmpty(data, 6);
		break;

		case 'Nitro-Gasoline':
		HasEmpty(data, 7);
		break;

		case 'Electric':
		HasEmpty(data, 6);
		break;
	}
	if(!isValid) return isValid;

	if(data[1].length > 13) SendErrorMsg('2');
	if(!isValid) return isValid;

	if(data[2].length > 4) SendErrorMsg('3');
	if(!isValid) return isValid;

	if(isNaN(data[3])) SendErrorMsg('4.1');
	if(!isValid) return isValid;

	if(data[3].length > 5) SendErrorMsg('4.2');
	if(!isValid) return isValid;

	if(isNaN(data[4])) SendErrorMsg('5.1');
	if(!isValid) return isValid;

	if(data[4].length > 4) SendErrorMsg('5.2');
	if(!isValid) return isValid;

	switch (data[0]) {
		case 'Abstract':
		break;

		case 'Gasoline':
			if(isNaN(data[5])) SendErrorMsg('6.1');
			if(!isValid) return isValid;

			if(data[5].length > 3) SendErrorMsg('6.2');
			if(!isValid) return isValid;
		break;

		case 'Nitro-Gasoline':
			if(isNaN(data[5])) SendErrorMsg('6.1');
			if(!isValid) return isValid;

			if(data[5].length > 3) SendErrorMsg('6.2');
			if(!isValid) return isValid;

			if(isNaN(data[6])) SendErrorMsg('8.1');
			if(!isValid) return isValid;

			if(data[6].length > 2) SendErrorMsg('8.2');
			if(!isValid) return isValid;
		break;

		case 'Electric':
			if(isNaN(data[5])) SendErrorMsg('7.1');
			if(!isValid) return isValid;

			if(data[5].length > 3) SendErrorMsg('7.2');
			if(!isValid) return isValid;
		break;
	}

	let carPark = WindowMain.GetActivePark();
	let cars = carPark.GetCars();
	if (cars.length >= carPark.GetTotalCapacity() && WindowMain.GetActiveForm() == 'add')
		SendErrorMsg('9');

	return isValid;
}

export function HasEmpty(data:any, end:any) {
	for (let i = 1; i < end; i++) {
		if(data[i] == '') {
			SendErrorMsg('1');
			break;
		}
	}
}

export function SendErrorMsg(errorId:any) {
	switch (errorId) {
		case '1': alert('Все поля должны быть заполнены!'); isValid = false; break;
		case '2': alert('Название машины должно содержать не более 13-и символов!'); isValid = false; break;
		case '3': alert('Название модели машины должно содержать не более 4-х символов!'); isValid = false; break;
		case '4.1': alert('Вес машины должен быть числом!'); isValid = false; break;
		case '4.2': alert('Вес машины должен быть менее 100000 kg!'); isValid = false; break;
		case '5.1': alert('Мощность машины должна быть числом!'); isValid = false; break;
		case '5.2': alert('Мощность машины должна быть менее 10000 hp!'); isValid = false; break;
		case '6.1': alert('Объем бензобака должен быть числом!'); isValid = false; break;
		case '6.2': alert('Объем бензобака должен быть менее 1000 l.!'); isValid = false; break;
		case '7.1': alert('Объем батареи должен быть числом!'); isValid = false; break;
		case '7.2': alert('Объем батареи должен быть менее 1000 amp.!'); isValid = false; break;
		case '8.1': alert('Объем нитро должен быть числом!'); isValid = false; break;
		case '8.2': alert('Объем нитро должен быть менее 100 l.!'); isValid = false; break;
		case '9': alert('Автопарк переполнен!'); isValid = false; break;
	}
}