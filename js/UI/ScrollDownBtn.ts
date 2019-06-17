import * as RightSide from './RightSide';
import * as WindowMain from './Window';

/********
	При нажатии сдвигает границы VS на +1, прокрутывая лист вниз

	VS = VisibilityScope
	ALE - ActiveLiElem
********/

export function On() {
	let locVS:any = RightSide.GetVS();
	let carPark:any = WindowMain.GetActivePark();
	let cars:any = carPark.GetCars();

	let btn:any = document.querySelector('.car-list .scroll-section .scroll-down');
	btn.onclick = function() { //ScrollDown
		if(cars.length - 1 > locVS.end) {
			locVS.start++;
			locVS.end++;
			RightSide.SetVS(locVS);
			RightSide.Update();
			let ALE:any = WindowMain.GetActiveLiElem();
			if(ALE != undefined) ALE.onclick();
		}
	}
}