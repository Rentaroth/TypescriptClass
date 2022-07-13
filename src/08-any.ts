(() => {
  let myDinamicVar: any;
  myDinamicVar = 1234;
  myDinamicVar = true;
  myDinamicVar = 'String';
  myDinamicVar = {};

  myDinamicVar = 'hola';
  const result = (myDinamicVar as string).toLowerCase();

  myDinamicVar = 123123;
  const result2 = (<number>myDinamicVar).toFixed();
})()