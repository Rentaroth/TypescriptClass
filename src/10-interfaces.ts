type Sizes = 'S' | 'M' | 'L' | 'XL';
/* type Product = {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}; */

interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
};

const product: Product[] = [];

product.push({
  id: '123ni',
  title: 'Product1',
  createdAt: new Date(),
  stock: 15,
  size: 'L',
});
