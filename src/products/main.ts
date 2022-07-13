import { addProduct, products, calcStock } from "./product.service";

addProduct({
  title: 'prod1',
  createdAt: new Date(),
  stock: parseInt((Math.random() * 10).toFixed()),
})

addProduct({
  title: 'prod2',
  createdAt: new Date(),
  stock: parseInt((Math.random() * 10).toFixed()),
  size: 'XL',
})

console.log(products);
const total = calcStock();
console.log(total);