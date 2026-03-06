import { taxRate } from "./constants.js";

export class Cart {

  constructor() {
    this.items = [];
  }

  addItem(product, qty) {
    this.items.push({ product, qty });
  }

  getSubtotal() {
    return this.items.reduce(
      (sum, item) => sum + item.product.price * item.qty,
      0
    );
  }

  getTotal() {
    const subtotal = this.getSubtotal();
    return subtotal + subtotal * taxRate;
  }

}