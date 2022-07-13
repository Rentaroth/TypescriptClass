// "Antonio" => [A, n, t, o, n, i, o] ... string => string[]
// [A, n, t, o, n, i, o] => "Antonio" ... string[] => string

export function parseString(input: string | string[]): string | string[] {
  if(Array.isArray(input)) {
    return input.join(''); //string
  } else {
    return input.split(''); //string[]
  }
}

const rta = parseString('Antonio');
const rta2 = parseString(rta);
console.log(rta);
console.log(rta2);