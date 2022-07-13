// Sobrecargas
export function parseString(input: string): string[];
export function parseString(input: string[]): string;
export function parseString(input: number): boolean;

// Definición de la función
export function parseString(input: unknown):unknown {
  if(Array.isArray(input)) {
    return input.join(''); //string
  } else if (typeof input === 'string') {
    return input.split(''); //string[]
  } else if (typeof input === "boolean") {
    return true; //boolean
  }
}

const rta = parseString('Antonio');
const rta2 = parseString(rta);
console.log(rta);
console.log(rta2);

// Si en la sobrecarga se define un comportamiento para un tipo de entrada "unknown" entonces esa linea de sobrecarga debe ir de última