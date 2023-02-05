"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("./products"));
let shipping;
let taxPercent;
let taxTotal;
let total;
const productName = 'hoodie';
const shippingAddress = '575 Broadway, New York City, New York';
const product = products_1.default.filter(product => product.name === productName)[0];
if (String(product.preOrder) === 'true') {
    console.log('You will send them a message when it’s on the way.');
}
if (Number(product.price) > 25) {
    console.log(`Delivery is free!`);
    shipping = 0;
}
else {
    console.log(`Delivery is 5$`);
    shipping = 5;
}
taxPercent = shippingAddress.includes('New York') ? 0.1 : 0.05;
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
class Result {
    constructor(productName, shippingAddress, productPrice, taxTotal, shipping, total) {
        this.productName = productName;
        this.shippingAddress = shippingAddress;
        this.producePrice = productPrice;
        this.taxTotal = taxTotal;
        this.total = total;
        this.shipping = shipping;
    }
    print() {
        console.log(`Product name: ${this.productName}\nShipping address: ${this.shippingAddress}\nPrice of the product: ${product.price}$\nTax total: ${taxTotal}$\nShipping: ${shipping}$\nTotal amount: ${total}$`);
    }
}
let result = new Result(productName, shippingAddress, Number(product.price), taxTotal, shipping, total);
result.print();
console.log(result);
