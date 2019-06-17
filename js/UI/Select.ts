/********
	При изменении selected option отображаются и исчезают доп. input'ы

********/

export function On() {
	let select:any = document.querySelector('.add-form .input-form select[name=value]');
	select.onchange = function(){
		SetParams(select.value);
	};
	select.onchange();
}

export function SetParams(value:any) {
	let characts:any = document.querySelectorAll('.add-form .characts .charact');
	let inputs:any = document.querySelectorAll('.add-form .characts .input-form input[name=value]');
	inputs[3].value = '';
	inputs[4].value = '';
	switch (value) {
		case 'Abstract':
		characts[4].style.visibility = 'hidden';
		characts[5].style.visibility = 'hidden';
		inputs[3].style.visibility = 'hidden';
		inputs[4].style.visibility = 'hidden';
		break;
		
		case 'Gasoline':
		characts[4].style.visibility = 'visible';
		characts[5].style.visibility = 'hidden';
		characts[4].textContent = 'FUELCP:';
		inputs[3].style.visibility = 'visible';
		inputs[4].style.visibility = 'hidden';
		break;
		
		case 'Nitro-Gasoline':
		characts[4].style.visibility = 'visible';
		characts[5].style.visibility = 'visible';
		characts[4].textContent = 'FUELCP:';
		inputs[3].style.visibility = 'visible';
		inputs[4].style.visibility = 'visible';
		
		break;

		case 'Electric':
		characts[4].style.visibility = 'visible';
		characts[5].style.visibility = 'hidden';
		characts[4].textContent = 'BATTCP:';
		inputs[3].style.visibility = 'visible';
		inputs[4].style.visibility = 'hidden';
		break;
		
		default:
		console.log('error - invalid value | Select.ts');
		break;
	}
}