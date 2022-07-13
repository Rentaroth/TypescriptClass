// Con never se tipan funciones que no terminan

const endless = () => {
  while(true) {
    console.log('Nunca pares de aprender!');
  }
};


const fail = (error: string) => {
  throw new Error(error);
};

// No confundir con void, con void la función termina pero no retorna nada