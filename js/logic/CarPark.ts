export class CarPark {
	private cars:any[] = [];
	private name:string = '';
	private totalCapacity:number = 0;

	AddCar(car:any) {
		this.cars.unshift(car);
		this.UpdatePositions();
	}

	UpdatePositions() {
		for (let i = 0; i < this.cars.length; i++) {
			this.cars[i].SetPosition(i);
		}
	}

	ReplaceCar(newCar:any, number:number) {
		this.cars.splice(number, 1, newCar);
		this.UpdatePositions();
	}

	RemoveCar(i:number) {
		this.cars.splice(i, 1);
		this.UpdatePositions();
	}

	GetTotalCapacity():number {
		return this.totalCapacity;
	}	

	SetTotalCapacity(totalCapacity:number):void {
		this.totalCapacity = totalCapacity;
	}

	GetTotalPrice():number {
		let sum = 0;
		for(let key in this.cars)
			sum += this.cars[key].GetPrice();
		return Math.ceil(sum * 100) / 100;
	}

	GetCars():any[] {
		return this.cars;
	}

	SetName(name:string) {
		this.name = name;
	}

	GetName():string {
		return this.name;
	}
}