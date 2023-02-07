import { add } from 'lodash';

console.log('Exporting module');

const shippingCost = 10;

export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (num1, num2) {
  console.log(num1 + num2);
}
