(() => {
  let userId: string | number;
  userId = 12345;
  userId = 'asdasd';

  function saludar(text: string | number) {
    if(typeof text === 'string') {
      console.log(`string ${text.toLowerCase()}`);
    } else {
      console.log(`number ${text.toFixed(1)}`);
    }
  }

  saludar('Esto es un string');
  saludar(12.3123);
})()