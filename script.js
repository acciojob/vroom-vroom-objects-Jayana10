// Car Constructor Function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function () {
    return `${this.make} ${this.model}`;
};

// SportsCar Constructor Function (Inheriting from Car)
function SportsCar(make, model, topSpeed) {
    // Call the Car constructor
    Car.call(this, make, model);
    
    // Add SportsCar-specific property
    this.topSpeed = topSpeed;
}

// Inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Restore constructor reference
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
    return this.topSpeed;
};

// Do not change this
window.Car = Car;
window.SportsCar = SportsCar;
