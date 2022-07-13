import { faker } from '@faker-js/faker';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { Product } from './product.model';

export const product: Product[] = [];

export const addProduct = (data: CreateProductDto) => {
  const newProd = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  return product.push(newProd);
};

export const getAllProducts = () => {
  return product;
};

export const getProduct = (id: number | string): Product | Error => {
  const item = product.find((item) => item.id === id);
  if (item) {
    return item;
  }
  return new Error('Product does not exist');
};

export const updateProduct = (id: string | number, data: UpdateProductDto) => {
  const item = product.find((item) => item.id === id);
  if (item) {
    const index = product.indexOf(item);
    product[index] = {
      ...item,
      ...data,
    };
    return product[index];
  }
  return new Error('Product does not exist');
};

export const deleteProduct = (id: string | number) => {
  const index = product.findIndex((item) => item.id === id);
  product.splice(index, 1);
    return 'Done!';
  return new Error('Product does not exist');
};
