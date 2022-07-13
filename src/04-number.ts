(() => {
  let productPrice = 100;
  //productPrice = null;
  productPrice = 120;
  console.log('productPrice:', productPrice);

  let customerAge: number = 28;
  //customerAge = customerAge + '1';
  customerAge = customerAge + 1;

  let productsInStock: number; // Para crear variables sin asignar se tiene que tipar porque no se pueden inferir
  //console.log('productsInStock', productsInStock);
  //if(productsInStock < 10) {
  //  console.log('is smaller');
  //}

  let discount = parseInt('ashdas');
  if(123 < discount) {
    console.log('discount', discount);
  } else {
    console.log('not discount', discount);
  }

  let hex = 0xfff;
  console.log('hex', hex);
  let bin = 0b011001;
  console.log('bin', bin);

  const myNumber: Number = 123; //Al tipar un número no se recomienda hacerlo con la palabra Number con N mayúscula, sinó con todo en minúscula.
})();