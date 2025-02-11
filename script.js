// Car Constructor Function
// function Car(make, model) {
//     this.make = make;
//     this.model = model;
// }

// // Add method to Car prototype
// Car.prototype.getMakeModel = function () {
//     return `${this.make} ${this.model}`;
// };

// // SportsCar Constructor Function (Inheriting from Car)
// function SportsCar(make, model, topSpeed) {
//     // Call the Car constructor
//     Car.call(this, make, model);
    
    
//     this.topSpeed = topSpeed;
// }


// SportsCar.prototype = Object.create(Car.prototype);


// SportsCar.prototype.constructor = SportsCar;


// SportsCar.prototype.getTopSpeed = function () {
//     return this.topSpeed;
// };

// Do not change this
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getMakeModel() {
        return `${this.make} ${this.model}`; // ✅ Corrected template literal
    }
}

class SportsCar extends Car {
    constructor(make, model, topSpeed) {
        super(make, model); // ✅ Calls the parent constructor
        this.topSpeed = topSpeed;
    }

    getTopSpeed() {
        return this.topSpeed;
    }
}

// Do not change this



window.Car = Car;
window.SportsCar = SportsCar;
