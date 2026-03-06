import { taxRate } from "./config.mjs";

export class Product {
    #id;
    #name;
    #price;

    constructor(id, name, price) {
        this.#id = id;
        this.#name = name;
        this.#price = price;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get price() {
        return this.#price;
    }
}

export class Cart {
    #items = [];

    addItem(product, quantity) {
        this.#items.push({ product, quantity });
    }

    getSubtotal() {
        return this.#items.reduce(
            (total, { product, quantity }) => total + product.price * quantity,
            0
        );
    }

    getTax() {
        return this.getSubtotal() * taxRate;
    }

    getTotal() {
        return this.getSubtotal() + this.getTax();
    }

    get items() {
        return [...this.#items];
    }
}