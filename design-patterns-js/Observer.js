// The Observer pattern allows objects to notify other objects about changes in their state.

//EXAMPLE
class Subject {
    constructor() {
      this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers(message) {
        this.observers.forEach(observer => observer.update(message));
    }
}

class Observer {
    update(message) {
        console.log(`Observer received: ${message}`);
    }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();


subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);

subject.notifyObservers("Hello Observers!");


//EXAMPLE: STOCK MARKET

class Stock {
    constructor(symbol) {
        this.symbol = symbol;
        this.price = 0;
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observer = this.observer.filter(sub => sub !== observer);
    }

    setPrice(price) {
        this.price = price;
        this.notifyObservers();
    }

    notifyObservers(){
        this.observers.forEach(observer => observer.update(this.symbol, this.price));
    }
}

class Investor {
    constructor(name) {
        this.name = name;
    }

    update (symbol, price) {
        console.log(`${this.name} notified: ${symbol
        } is now $${price}`);
    }
}

//USAGE

const googleStock = new Stock('GOOGL');

const investor1 = new Investor("Tony");
const investor2 = new Investor("Spidey");

googleStock.subscribe(investor1);
googleStock.subscribe(investor2);

googleStock.setPrice(1500);