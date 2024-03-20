//Exporting Module
console.log("Exporting Module");

// //Blocking code
// console.log("start fetching");
// await fetch("https://jsonplaceholder.typicode.com/users");
// console.log("finish fetching users");

const shippingCost = 10;
export const cart = [];

//nameed export
export const addtoCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totPrice = 237;
const totalQuantity = 23;

export { totPrice, totalQuantity as qty };

//default export
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
