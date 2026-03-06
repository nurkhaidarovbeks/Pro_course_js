import { Product, Cart } from "./core.mjs";
import { formatPrice } from "./utils.mjs";
import * as Config from "./config.mjs";

const cart = new Cart();
const p1 = new Product(1, "Widget", 10.99);

cart.addItem(p1, 2);

console.log(Tax rate: ${Config.taxRate});
console.log(Total: ${formatPrice(cart.getTotal())});