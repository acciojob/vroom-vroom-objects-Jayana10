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
    }

    getTopSpeed() {
        return this.topSpeed;
    }
}

// Do not change this
window.Car = Car;
window.SportsCar = SportsCar;