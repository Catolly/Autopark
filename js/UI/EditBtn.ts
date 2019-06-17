import * as WindowMain from './Window';

/**********
	Открывает форму редактирования машины, устанавливает WindowMain.ActiveForm,
	устанавливает соответствующее название формы и выставляет в input'ы и
	select параметры редактируемой машины

	AC - activeCar
**********/

export function SetFormConfig() {
	SetTitle('EDIT CAR');
	SetCarParams(); //Выставляет параметры редактируемой машины в input'ы и select
}

export function OpenForm() { 
	let form:any = document.querySelector('.add-form-wrap');
	form.style.visibility = 'visible';
}

export function SetTitle(newTitle:any) {
	let title:any = document.querySelector('.form-window .header .title');
	title.textContent = newTitle;
}

export function SetCarParams() { //Проверить, что кликается первым: li-елемент машины или сама кнопка редактирования
	let AC:any = WindowMain.GetActiveCar();
	
	let inputs:any = document.querySelectorAll('.add-form .add-charact input[name=value]');
	let select:any = document.querySelector('.add-form .add-charact select[name=value]');

	select.value = AC.GetType();
	inputs[0].value = AC.GetName();
	inputs[1].value = AC.GetModel();
	inputs[2].value = AC.GetWeight();
	inputs[3].value = AC.GetHorsepower();

	switch(AC.GetType()) {
		case'Abstract': 
			select.onchange(); 
			inputs[4].value = ''; 
			inputs[5].value = ''; 
			break;

		case'Gasoline': 
			select.onchange(); 
			inputs[4].value = AC.GetFuelCapacity(); 
			inputs[5].value = ''; 
			break;

		case'Nitro-Gasoline': 
			select.onchange();
			inputs[4].value = AC.GetFuelCapacity();
			inputs[5].value = AC.GetNitricOxideVolume();
			break;

		case'Electric': 
			select.onchange(); 
			inputs[4].value = AC.GetBatteryCapacity(); 
			inputs[5].value = ''; 
			break;
	}
}

export function On() {
	let btns:any = document.querySelectorAll('.car-list .edit-btn');
	let elems:any = document.querySelectorAll('.car-list .scroll-element');
	for(let i = 0; i < btns.length; i++)
	btns[i].onclick = function() {
		let ALE = elems[i];
		WindowMain.SetActiveLiElem(ALE);
		if(ALE != undefined) ALE.onclick();

		WindowMain.SetActiveForm('edit'); //Устанавливаем активную форму для того, чтобы при нажатии кнопки 'Ок' форма обработалась верно
		SetFormConfig(); //Т.к. форма для создания и редактирования машины одна - эта функция поможет внешне отделить формы друг от друга
		OpenForm();
	};
}