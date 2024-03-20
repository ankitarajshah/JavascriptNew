//Importing Module
// console.log("Importing");
// import "./shoppingCart.js";
// import { addtoCart } from "./shoppingCart.js";

// import { addtoCart, totPrice as price, qty } from "./shoppingCart.js";
// addtoCart("bread", 5);
// console.log(price, qty);

console.log("Importing Module");
// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addtoCart("bread", 5);
// console.log(ShoppingCart.totPrice);

//default import

// import add from "./shoppingCart.js";
// add("pizzzza", 2);

// Mix- import and default
import add, { cart } from "./shoppingCart.js";
add("pizzzza", 2);
add("bread", 6);
add("apples", 6);

console.log(cart);

////////top level await

// console.log("Start Fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// console.log(res);
// const data = await res.json();
// console.log(data);
// console.log("something after fetch");

// const getLastPost = async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   console.log(res);
//   const data = await res.json();
//   console.log(data);
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };
// //returns promise
// const lastPost = getLastPost();
// console.log(lastPost);
// // lastPost.then((last) => console.log(last));
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 10 },
  ],
  user: { loggedIn: true },
};
// const stateClone = Object.assign({}, state);
// state.user.loggedIn = false;
// console.log(stateClone);

const stateClone = Object.assign({}, state);
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateDeepClone);
