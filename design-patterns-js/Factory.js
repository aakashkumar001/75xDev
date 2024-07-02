// The Factory pattern provides a way to create objects without specifying the exact class of the object that will be created.

//EXAMPLE

class Car {
    constructor(model) {
        this.model = model;
    }
}

class CarFactory {
    static createCar(model,color) {
        return new Car(model,color);
    }
}

const car1 = CarFactory.createCar('Tesla Model S',"red");
const car2 = CarFactory.createCar('BMW i8', "blue");

console.log(car2)
