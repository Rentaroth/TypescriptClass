import { faker } from '@faker-js/faker';

import { product, addProduct, updateProduct, getProduct, getAllProducts, deleteProduct } from './products/product.service';
import { Product } from './products/product.model';
import { CreateProductDto } from './products/product.dto';

const newProduct: Product = {
  id: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  image: faker.image.imageUrl(),
  description: faker.commerce.productDescription(),
  color: faker.color.rgb(),
  size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
  stock: faker.datatype.number({ min: 0, max: 100 }),
  price: parseInt(faker.commerce.price(0, 5000, 0)),
  isNew: faker.datatype.boolean(),
  tags: faker.helpers.arrayElements(),
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
  category: {
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    name: faker.commerce.productName(),
  },
};

const newCreatedProduct: CreateProductDto = {
  title: faker.commerce.productName(),
  image: faker.image.imageUrl(),
  description: faker.commerce.productDescription(),
  color: faker.color.rgb(),
  size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
  stock: faker.datatype.number({ min: 0, max: 100 }),
  price: parseInt(faker.commerce.price(0, 5000, 0)),
  isNew: faker.datatype.boolean(),
  tags: faker.helpers.arrayElements(),
  categoryId: faker.datatype.uuid(),
}

for(let i = 0; i <= 10; i++) {
  addProduct(newCreatedProduct);
}
//updateProduct(product[0].id, { price: 6000 });
//const prod = getProduct(product[0].id);
let prod = getAllProducts();
console.log(prod);

//deleteProduct(product[1].id);

prod = getAllProducts();
console.log(prod);
