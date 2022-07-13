(() => {
  const login = (email: string, password: string) => {
    console.log(email, password);
  };

  //login({'antonio@mail.com', 'isj123'});

  //Esta es la manera en la que se puede tipar con un objeto como tipo
  const login1 = (data: { email: string; password: string }) => {
    console.log(data.email, data.password);
  };

  login1({ email: 'antonio@mail.com', password: 'isj123' });

  type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';

  const products: any[] = [];

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
