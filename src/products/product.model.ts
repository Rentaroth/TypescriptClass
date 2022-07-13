export type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type Product = {
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
};
