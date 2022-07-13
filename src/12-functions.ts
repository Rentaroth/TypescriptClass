(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';

  function productToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes,
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  const producto = productToJson('P1', new Date(), 12, 'S');
  console.log(producto);
  console.log(producto.stock);
  console.log(producto.size);

  const productToJson2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes, // Campo opcional, no lo requerirá gracias al caracter '?'
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };
  const producto2 = productToJson2('P1', new Date(), 12);
  console.log(producto2);
  console.log(producto2.stock);
  console.log(producto2.size);
})();
