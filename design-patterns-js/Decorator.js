// The Decorator pattern allows behavior to be added to an individual object, dynamically, without affecting the behavior of other objects from the same class.

//EXAMPLE
class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 2;
  }
}

let coffee = new Coffee();
coffee = new MilkDecorator(coffee);

console.log(coffee.cost());


//EXAMPLE: ONLINE PRODUCT CUSTOMIZATION

class Product {
  constructor() {
    this.price = 100;
  }

  getPrice() {
    return this.price;
  }
}

class WarrantyDecorator {
  constructor(product) {
    this.product = product;
  }

  getPrice() {
    return this.product.getPrice() + 20;
  }
}


class GiftWrapDecorator {
  constructor(product) {
    this.product = product;
  }

  getPrice() {
    return this.product.getPrice() + 5;
  }
}

let myProduct = new Product();
myProduct = new WarrantyDecorator(myProduct);
myProduct = new GiftWrapDecorator(myProduct);

console.log(myProduct.getPrice())