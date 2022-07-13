(() => {
  let isEnable = true;
  //isEnable = 'is not string';
  //isEnable = 123123;
  //isEnable = false; // Solo se puede cambiar entre verdadero y falso

  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random();
  isNew = random <= 0.5 ? true : false;
  console.log('isNew', isNew);

  const myBoolean: Boolean = false; //No usar el tipado de boolean en mayúscula

  //myBoolean = undefined;
  //myBoolean = null; //Los valores null y undefined no se tipan con boolean TS no los considera booleanos
})()