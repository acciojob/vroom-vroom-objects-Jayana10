// Complete the js code
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getMakeModel() {
        return ${this.make} ${this.model}; 
    }
}

class SportsCar extends Car {
    constructor(make, model, topSpeed) {
        super(make, model); 
        this.topSpeed = topSpeed;
    }

    getTopSpeed() {
        return this.topSpeed;
    }
}
SportsCar.prototype=object.create(Car.prototype);

// Do not change this
window.Car = Car;
window.SportsCar = SportsCar;
// class Car{
// 	constructor(make,model){
// 		this.make = make;
// 		this.model=model;
// 	}
// }
// class SportsCar extends Car{
// 	constructor(make,model,topSpeed){
// 		super(make,model);
// 		this.topSpeed=topSpeed;
// 	}
// }

// Do not change the code below
// window.Car = Car;
// window.SportsCar = SportsCar;
