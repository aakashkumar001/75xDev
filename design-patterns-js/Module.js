// The Module pattern allows you to create public and private methods and variables, helping to keep code clean and encapsulated.

const Module = (function () {
    let privateVar = 'I am Private';

    function privateMethod() {
        console.log(privateVar);
    }

    return {
        publicMethod: function() {
            privateMethod();
        }
    }
})();

Module.publicMethod();