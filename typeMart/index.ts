import products from './products';

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

const productName: string = 'hoodie'
const shippingAddress: string = '575 Broadway, New York City, New York';
const product = products.filter(product => product.name === productName)[0];

if (String(product.preOrder) === 'true') {
    console.log('You will send them a message when it’s on the way.')
}

if (Number(product.price) > 25) {
    console.log(`Delivery is free!`)
    shipping = 0;
} else {
    console.log(`Delivery is 5$`)
    shipping = 5;
}

taxPercent = shippingAddress.includes('New York') ? 0.1 : 0.05;
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

class Result {
    productName: string;
    shippingAddress: string;
    producePrice: number;
    taxTotal: number;
    shipping: number;
    total: number;


    constructor(productName: string, shippingAddress: string, productPrice: number, taxTotal: number, shipping: number, total: number) {
        this.productName = productName;
        this.shippingAddress = shippingAddress;
        this.producePrice = productPrice;
        this.taxTotal = taxTotal;
        this.total = total;
        this.shipping = shipping;
    }

    print() {
        console.log(`Product name: ${this.productName}\nShipping address: ${this.shippingAddress}\nPrice of the product: ${product.price}$\nTax total: ${taxTotal}$\nShipping: ${shipping}$\nTotal amount: ${total}$`)
    }
}

let result = new Result(productName, shippingAddress, Number(product.price), taxTotal, shipping, total);
result.print();

console.log(result);
