import * as RightSide from './RightSide';
import * as WindowMain from './Window';

/********
	При нажатии сдвигает границы VS на -1, прокрутывая лист вверх

	VS = VisibilityScope
	ALE - ActiveLiElem
********/

export function On() {
	let locVS:any = RightSide.GetVS();
	let btn:any = document.querySelector('.car-list .scroll-section .scroll-up');
	btn.onclick = function() { //ScrollUp
		if(0 < locVS.start) {
			/*let carPark:any = WindowMain.GetActivePark();
			let cars:any = carPark.GetCars();*/
			locVS.start--;
			locVS.end--;
			RightSide.SetVS(locVS);
			RightSide.Update();
			let ALE:any = WindowMain.GetActiveLiElem();
			if(ALE != undefined) ALE.onclick();
		}
	}
} 