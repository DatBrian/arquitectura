import Product from "./src/components/product";
import Cart from "./src/components/cart";

const user1 = 1;
const user2 = 2;

const cart = new Cart();

const product1 = new Product("Laptop", 1000);
const product2 = new Product("Phone", 500);
const product3 = new Product("Tablet", 300);

product1.addToCart(user1);
product2.addToCart(user1);
product3.addToCart(user2);

console.log("User 1 cart:", cart.getCart(user1));
console.log("User 2 cart:", cart.getCart(user2));
