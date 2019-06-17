import * as Window from './Window';

/**********
	Закрывает форму и очищает все поля

**********/

export function CloseForm() {
	let form:any = document.querySelector('.add-form-wrap');
	form.style.visibility = 'hidden';

	let characts:any = document.querySelectorAll('.add-form .characts .charact');
	characts[4].style.visibility = 'hidden';
	characts[5].style.visibility = 'hidden';
	let inputs:any = document.querySelectorAll('.add-form .characts .input-form input[name=value]');
	inputs[3].style.visibility = 'hidden';
	inputs[4].style.visibility = 'hidden';
}

export function ClearForm() {
	let inputs:any = document.querySelectorAll('.add-form .add-charact input[name=value]');
	let select:any = document.querySelector('.add-form .add-charact select[name=value]');

	for (let i = 0; i < inputs.length; i++) inputs[i].value = '';
	select.value = 'Abstract';
}

export function On() {
	let btn:any = document.querySelector('.add-form .cancel-btn');
	btn.onclick = function() {
		CloseForm();
		ClearForm();
	};
}