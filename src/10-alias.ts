(() => {
  type UserID = string | number;

  let userId: UserID;

  function saludar(text: UserID) {
    if(typeof text === 'string') {
      console.log(`string ${text.toLowerCase()}`);
    }
  }

  //Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';

  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  //shirtSize = 'asdnaosdnao';
})()