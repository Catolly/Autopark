import * as WindowMain from './Window';
import * as CreateAndEditCar from '../logic/CreateAndEditCar';
import * as Form from './Form';

/**********
	Закрывает форму, в зависимости от типа формы ('add' или 'edit') 
	собирает инфу с input'ов и select'а и отправляет ее на создание/редактирование
	в ../logic/CreateCar.ts

**********/

export function CloseForm() {
	let form:any = document.querySelector('.add-form-wrap');
	form.style.visibility = 'hidden';

	let characts:any = document.querySelectorAll('.add-form  .characts .charact');
	let inputs:any = document.querySelectorAll('.add-form .add-charact input[name=value]');
	inputs[4].style.visibility = 'hidden';
	inputs[5].style.visibility = 'hidden';
	characts[4].style.visibility = 'hidden';
	characts[5].style.visibility = 'hidden';
}

/*
	data[0] - type,
	data[1] - name,
	data[2] - model,
	data[3] - weight,
	data[4] - horsepower,
	data[5] - fuel/battery capacity,
	data[6] - nitro capacity
*/

export function CreateData() {
	let data:any = [];

	let inputs:any = document.querySelectorAll('.add-form .add-charact input[name=value]');
	let select:any = document.querySelector('.add-form .add-charact select[name=value]');

	//Считываем инфу с input'ов и select'а и вносим в data
	data[0] = select.value;
	data[1] = inputs[0].value;
	data[2] = inputs[1].value;
	data[3] = inputs[2].value;
	data[4] = inputs[3].value;
	data[5] = inputs[4].value;
	data[6] = inputs[5].value;

	return data;
}

export function CreateCar() {
	let data:any = CreateData();

	CreateAndEditCar.CreateCar(data);
	if(WindowMain.GetActiveLiElem() != undefined) WindowMain.GetActiveLiElem().onclick();
	WindowMain.Update();
}

export function EditCar() {
	let data:any = CreateData();
	let car = WindowMain.GetActiveCar();
	data[7] = car.GetPosition(); //Получаем позицию машины в парке для корректного replace

	CreateAndEditCar.EditCar(data);
	if(WindowMain.GetActiveLiElem() != undefined) WindowMain.GetActiveLiElem().onclick();
	WindowMain.Update();
}

export function ClearForm() {
	let inputs:any = document.querySelectorAll('.add-form .add-charact input[name=value]');
	let select:any = document.querySelector('.add-form .add-charact select[name=value]');

	for (let i = 0; i < inputs.length; i++) inputs[i].value = '';
	select.value = 'Abstract';
}


export function On() {
	let btn:any = document.querySelector('.add-form .ok-btn');
	btn.onclick = function() {
		if(Form.CheckValidation()) {
			switch (WindowMain.GetActiveForm()) {
				case 'add': CloseForm(); CreateCar(); ClearForm(); break;
				case 'edit': CloseForm(); EditCar(); ClearForm(); break;
			}
		}
	}
}