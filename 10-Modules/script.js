// import * as ShoppingCart from './shoppingCart.js';

// console.log(ShoppingCart.cart);

// ShoppingCart.addToCart('bread', 5);
// ShoppingCart.addToCart('banana', 3);

// console.log(ShoppingCart.cart);

// import { addToCart as addToShoppingCart, cart, totalPrice, tq } from './shoppingCart.js';

// addToShoppingCart('bread', 5);
// addToShoppingCart('banana', 3);

// console.log(cart);

// console.log(totalPrice);
// console.log(tq);

// Import from lodash-es
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);
