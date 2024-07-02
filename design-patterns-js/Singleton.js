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


//EXAMPLE: CONFIGURATION SETTINGS

class Config {
    constructor() {
        if (!Config.instance) {
            this.settings = this.loadSettings();
            Config.instance = this;
        }

        return Config.instance;
    }

    loadSettings() {

        return { appName: "My App", version: "1.0"};
    }

    getSettings() {
        return this.settings;
    }
}


const config1 = new Config();
const config2 = new Config();

console.log(config1.getSettings());
console.log(config2 === config1);
