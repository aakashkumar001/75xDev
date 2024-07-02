// The Factory pattern provides a way to create objects without specifying the exact class of the object that will be created.

//EXAMPLE

class Car {
  constructor(model) {
    this.model = model;
  }
}

class CarFactory {
  static createCar(model, color) {
    return new Car(model, color);
  }
}

const car1 = CarFactory.createCar("Tesla Model S", "red");
const car2 = CarFactory.createCar("BMW i8", "blue");

console.log(car2);

//EXAAMPLE: USER ACCOUNT CREATION

class Admin {
  constructor(name) {
    this.name = name;
    this.role = "Admin";
  }
}

class Guest {
  constructor(name) {
    this.name = name;
    this.role = "Guest";
  }
}

class RegisteredUser {
  constructor(name) {
    this.name = name;
    this.role = "RegisteredUser";
  }
}

class UserFactory {
  static createUser(type, name) {
    switch (type) {
      case "admin":
        return new Admin(name);
      case "guest":
        return new Guest(name);
      case "registered":
        return new RegisteredUser(name);
      default:
        throw new Error("Unknow User Type");
    }
  }
}

const admin = UserFactory.createUser('admin', 'Alice');
const guest = UserFactory.createUser('guest', 'Bob');

console.log(admin)
console.log(guest)

