import {AbstractCar} from "./AbstractCar";


export class GasolineCar extends AbstractCar{
	private fuelCapacity:number;

	constructor(name?:string, 
							model?:string, 
							horsepower?:number, 
							weight?:number,
							fuelCapacity?:number) {
		super(name, model, horsepower, weight);
		this.fuelCapacity = fuelCapacity && fuelCapacity || 0;
		this.SetType('Gasoline');
	}

	GetFuelCapacity():number {
		return this.fuelCapacity;
	}

	SetFuelCapacity(fuelCapacity:number) {
		this.fuelCapacity = fuelCapacity;
	}

	GetPrice():number {
		return Math.ceil((super.GetPrice() +
										 this.fuelCapacity * 0.15) * 100) / 100;
	}
}