// The Observer pattern allows objects to notify other objects about changes in their state.

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