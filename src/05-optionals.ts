// Los parámetros opcionales se tienen que poner al final

export const createProduct = (
  id: string | number,
  stock?: number,
  isNew?: boolean
) => {
  return {
    id,
    stock: stock || 10,
    isNew: isNew ?? true,
  };
};

// Si al operador or || le llegan parámetros como o, '', false, forsozamente entregará el valor predeterminado, es un error de JS
// El operador nullish coalescing ?? valida solo cuando le llegan los parámetros null y undefined

createProduct('123hyw', 20, true);