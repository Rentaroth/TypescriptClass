// Tipado general de arrays
const prices: (number | string)[] = [1, 2, 3, 4, 'asd'];

prices.push(2);
prices.push('asf');

// Tipado específico de arrays, con limitación del tamaño del array y especificidad en cada puesto del array
let users: [string, number, boolean] = ['Antonio', 28, true];
//users = ['Antonio', 28, true];

const [username, age] = users;
users.push(34);

console.log(username, age);
