(() => {
  let prices = [1, 2, 3, 4, 5, 6, 7]; // Este es un array de números, por lo que los valores que entren al array solo podrán ser números
  //prices.push('');
  //prices.push(false);
  //prices.push({});

  let array = [1, 2, 3, 4, 5, 'string', false]; //Este array recibe 3 tipados, serán permitidos cualquiera de los tipados con los cuales fue creado

  let ejemplo = [12, 'string'];

  let mixed: (number | string | boolean)[] = [12312, 'string'];//Para tipar un array con tipos de datos que no se usan desde su inicialización para insertarlos después se procede de esta forma

  mixed.push(true);

  console.log('mixed', mixed);

})()