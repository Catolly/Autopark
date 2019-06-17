import * as AddBtn from './AddBtn';
import * as CancelBtn from './CancelBtn';
import * as DeleteBtn from './DeleteBtn';
import * as EditBtn from './EditBtn';
import * as OkBtn from './OkBtn';
import * as ScrollDownBtn from './ScrollDownBtn';
import * as ScrollUpBtn from './ScrollUpBtn';
import * as Select from './Select';
import * as CarsList from './CarsList';

/**********
	Включает триггеры всех активных элементов на странице

**********/

export function Init() {
	AddBtn.On();
	CancelBtn.On();
	DeleteBtn.On();
	EditBtn.On();
	OkBtn.On();
	ScrollDownBtn.On();
	ScrollUpBtn.On();
	Select.On();
	CarsList.On();
}