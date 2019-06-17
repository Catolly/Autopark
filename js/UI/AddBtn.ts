import * as WindowMain from './Window';

/**********
	Открывает форму добавления машины, устанавливает Window.ActiveForm и
	устанавливает соответствующее название формы

**********/

export function SetFormConfig() {
	let title:any = document.querySelector('.form-window .header .title');
	title.textContent = 'NEW CAR';
}

export function OpenForm() { 
	let form:any = document.querySelector('.add-form-wrap');
	form.style.visibility = 'visible';
}

export function On() {
	let btn:any = document.querySelector('.add-btn');
	btn.onclick = function() {
		WindowMain.SetActiveForm('add'); //Устанавливаем активную форму для того, чтобы при нажатии кнопки 'Ок' форма обработалась верно
		SetFormConfig(); //Т.к. форма для создания и редактирования машины одна - эта функция поможет внешне отделить формы друг от друга
		OpenForm();
	};
}