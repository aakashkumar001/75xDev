// The singleton pattern ensures that a class has only one instance and provides a global point
// of access to it.

// EXAMPLE

class Singleton {
    constructor () {
        if(!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2) //true
console.log(instance2)