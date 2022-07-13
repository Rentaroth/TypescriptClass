(() => {
  //let newNumber: number;
  //let newString: string;

  //newNumber = undefined;
  //newNumber = null;

  let newVar: undefined = undefined;
  let newVar2: null = null;

  let newNumber: number | null = null;
  let newString: string | undefined = undefined;

  function hi(name: string | null) {
    let hello = 'Hola';
    if(name) {
      hello += name;
    } else {
      hello += ' nobody';
    }
    return console.log(hello);
  }

  function hi2(name: string | null) {
    let hello = 'Hola';
    hello += name?.toLowerCase() || ' nobody';
    return console.log(hello);
  }
  hi(' Antonio');
  hi(null);

  hi2(' Antonio2');
  hi2(null);

})()