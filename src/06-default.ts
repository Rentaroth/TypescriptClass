export const createProduct = (
  id: string | number,
  stock: number = 10, //Así se manejan los parámetros por defecto con Typescript, son más precisos que los del operador or || de JS
  isNew: boolean = true
) => {
  return {
    id,
    stock,
    isNew,
  };
};

const prod1 = createProduct('123hhg', 12, true);
console.log(prod1);