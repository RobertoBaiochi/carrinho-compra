import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("Hotwheels ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);
