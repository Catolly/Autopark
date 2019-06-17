import {GasolineCar} from './GasolineCar';


export class GasolineCarWithNitro extends GasolineCar{
	private nitricOxideVolume: number;

	constructor(name?:string, 
							model?:string, 
							horsepower?:number, 
							weight?:number, 
							fuelCapacity?:number,
							nitricOxideVolume?:number) {
		super(name, model, horsepower, weight, fuelCapacity);
		this.nitricOxideVolume = nitricOxideVolume && nitricOxideVolume || 0;
		this.SetType('Nitro-Gasoline');
	}

	GetNitricOxideVolume():number {
		return this.nitricOxideVolume;
	}

	SetNitricOxideVolume(nitricOxideVolume:number) {
		this.nitricOxideVolume = nitricOxideVolume;
	}

	GetPrice() {
		return Math.ceil((super.GetPrice() +
					 					 this.nitricOxideVolume * 0.5) * 100) / 100;
	}
}