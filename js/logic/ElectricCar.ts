import {AbstractCar} from './AbstractCar';

export class ElectricCar extends AbstractCar {
	private batteryCapacity:number;

	constructor(name?:string, 
							model?:string, 
							horsepower?:number, 
							weight?:number, 
							batteryCapacity?:number) {
		super(name, model, horsepower, weight);
		this.batteryCapacity = batteryCapacity && batteryCapacity || 0;
		this.SetType('Electric');
	}

	GetBatteryCapacity():number {
		return this.batteryCapacity;
	}

	SetBatteryCapacity(batteryCapacity:number) {
		this.batteryCapacity = batteryCapacity;
	}

	GetPrice() {
		return Math.ceil((super.GetPrice() +
					 					 this.batteryCapacity * 0.2) * 100) / 100;
	}
}