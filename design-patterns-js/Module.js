// The Module pattern allows you to create public and private methods and variables, helping to keep code clean and encapsulated.

//EXAMPLE
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


// EXAMPLE: SHOPPING CART

const CartModule = (function() {
    let cart = [];

    function addItem(item) {
        cart.push(item);
        console.log(`${item} added to cart`);
    }

    function removeItem(item) {
        cart = cart.filter(cartItem => cartItem !== item);
        console.log(`${item} removed from cart`);
    }

    function getItems() {
        return cart;
    }

    return {
        addItem,
        removeItem,
        getItems,
    }
})();


CartModule.addItem('Laptop');
CartModule.addItem('Phone');
console.log(CartModule.getItems());
CartModule.removeItem('Phone');
console.log(CartModule.getItems());