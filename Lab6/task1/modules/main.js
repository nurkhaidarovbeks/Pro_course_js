import Product from "./product.js";
import { Cart } from "./cart.js";
import { formatPrice, render } from "./utils.js";

const cart = new Cart();

const p1 = new Product("Laptop", 1000);
const p2 = new Product("Mouse", 20);

cart.addItem(p1, 1);
cart.addItem(p2, 2);

render("total", formatPrice(cart.getTotal()));