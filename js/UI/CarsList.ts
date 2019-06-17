import * as WindowMain from './Window';
import * as RightSide from './RightSide';
import * as LeftSide from './LeftSide';

/********
	Устанавливает информацию о машинах в li-елементы и отображает их

	VS = VisibilityScope
********/

export function SetElemsInfo() {
	let locVS:any = RightSide.GetVS()
	let carPark:any = WindowMain.GetActivePark();
	let cars:any = carPark.GetCars(); 

	let elems:any = document.querySelectorAll('.car-list .scroll-element'); //Получаем li-элементы списка
	let name:any = document.querySelectorAll('.car-list .scroll-element .name');
	let price:any = document.querySelectorAll('.car-list .scroll-element .price');

	for (let i = 0; i < elems.length; i++) {
		if(locVS.start + i >= cars.length) return; //Проверка на выход за пределы массива cars
		name[i].textContent = cars[i + locVS.start].GetName() + ' ' + cars[i + locVS.start].GetModel();
		price[i].textContent = cars[i + locVS.start].GetPrice() + ' y.e.';
		SetVisible(elems[i]);
	}
}

export function SetDefault() {
	let elems:any = document.querySelectorAll('.car-list .scroll-element');
	for (let i = 0; i < elems.length; i++) 
		elems[i].style.visibility = 'hidden';
}

export function SetVisible(target:any) {
	target.style.visibility = 'visible';
}

export function Update() {
	SetDefault();
	SetElemsInfo();
}

export function ListDefault() {
	let liElems:any = document.querySelectorAll('.car-list .scroll-element');
	for (let i = 0; i < liElems.length; i++) {
		liElems[i].style.background = 'none';
	}
}

export function SetElemActive(liNumber) {
	let liElems:any = document.querySelectorAll('.car-list .scroll-element');
	liElems[liNumber].style.background = 'url(./images/option_selected.png) 5px 0 no-repeat';
	liElems[liNumber].style.backgroundSize = '99% 100%';
}

export function On() {


	let elems:any = document.querySelectorAll('.car-list .scroll-element');

	for (let i = 0; i < elems.length; i++) {
		elems[i].onclick = function() {
			let carPark:any = WindowMain.GetActivePark();
			let cars:any = carPark.GetCars(); 
			let locVS = RightSide.GetVS();
			ListDefault();
			SetElemActive(i);

			WindowMain.SetActiveCar(cars[i + locVS.start]);
			WindowMain.SetActiveLiElem(elems[i]);
			LeftSide.Update();
		};
		LeftSide.Update();
	}
}