(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  } //De esta forma se realiza un tipado específico para objetos que entran como parámetros y se puede reutilizar.

  const products: Product[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data);
  };

  addProduct({
    title: 'prod1',
    createdAt: new Date(),
    stock: parseInt((Math.random() * 10).toFixed()),
  });
  addProduct({
    title: 'prod2',
    createdAt: new Date(),
    stock: parseInt((Math.random() * 10).toFixed()),
    size: 'XL',
  });
  console.log(products);
})();