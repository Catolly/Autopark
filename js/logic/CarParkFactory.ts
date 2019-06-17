import {CarPark} from './CarPark';
import {SetActivePark} from '../UI/Window';
import {Update} from '../UI/Window';
/*import {GetData} from '../UI/SubmitForm';
import {CreateAbstractCar} from './CreateCar';
import {CreateGasolineCar} from './CreateCar';
import {CreateGasolineWithNitroCar} from './CreateCar';
import {CreateElectricCar} from './CreateCar';*/


export class CarParkFactory {
	private carPark:CarPark = new CarPark();

	CreateCarPark() {
		/*let gasolineCar1:GasolineCar = new GasolineCar();
		gasolineCar1.SetName('T-car');
		gasolineCar1.SetModel('57');
		gasolineCar1.SetHorsepower(120);
		gasolineCar1.SetWeight(1200);
		gasolineCar1.SetFuelCapacity(50);

		let gasolineCarWithNitro1:GasolineCarWithNitro = new GasolineCarWithNitro();
		gasolineCarWithNitro1.SetName('T-car');
		gasolineCarWithNitro1.SetModel('57-X');
		gasolineCarWithNitro1.SetHorsepower(140);
		gasolineCarWithNitro1.SetWeight(1300);
		gasolineCarWithNitro1.SetFuelCapacity(50);
		gasolineCarWithNitro1.SetNitricOxideVolume(20);

		let electricCar1:ElectricCar = new ElectricCar();
		electricCar1.SetName('E-car');
		electricCar1.SetModel('51');
		electricCar1.SetHorsepower(130);
		electricCar1.SetWeight(1100);
		electricCar1.SetBatteryCapacity(250);*/

		this.carPark = new CarPark();
		this.carPark.SetName("Park-X");
		this.carPark.SetTotalCapacity(8);
		SetActivePark(this.carPark);
		Update();
		/*carPark.AddCar(gasolineCar1);
		carPark.AddCar(gasolineCarWithNitro1);
		carPark.AddCar(electricCar1);*/

		return this.carPark;
	}
}

