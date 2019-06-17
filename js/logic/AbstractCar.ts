export class AbstractCar {
	private name:string;
	private model:string;
	private horsepower:number;
	private weight:number;
	private type:string;
	private position:number;

	constructor(name?:string, 
							model?:string, 
							horsepower?:number, 
							weight?:number) {
		this.name = name && name || '';
		this.model = model && model || '';
		this.horsepower = horsepower && horsepower || 0;
		this.weight = weight && weight || 0;
		this.position = 0;
		this.type = 'Abstract';
	}

	GetPrice():number {
		return Math.ceil((this.weight * 0.06 +
					 this.horsepower * 0.3) * 100) / 100;
	}

	GetPosition():number {
		return this.position;
	}

	SetPosition(position:number):void {
		this.position = position;
	}

	GetType():string {
		return this.type;
	}

	SetType(type:string):void {
		this.type = type;
	}

	GetWeight():number {
		return this.weight;
	}

	SetWeight(weight:number) {
		this.weight = weight;
	}

	GetHorsepower():number {
		return this.horsepower;
	}

	SetHorsepower(horsepower:number) {
		this.horsepower = horsepower;
	}

	GetModel():string {
		return this.model;
	}

	SetModel(model:string) {
		this.model = model;
	}

	GetName():string {
		return this.name;
	}

	SetName(name:string) {
		this.name = name;
	}
}