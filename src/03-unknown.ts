let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = {};
anyVar = 2123;
anyVar = 'asdf';

// Any pudo ser asignado a una variable que esperaba un boolean siendo anyVar un string, por eso no usar Any
let isNew: boolean = anyVar;

// También se puede ejecutar cualquier tipo de función que no exista en la variable tipada con Any, mala práctica
//anyVar.doSomething()

let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 1;
unknownVar = [];
unknownVar = {};

// Aquí te pide que valides el tipado de la variable primero y luego revisa si existe el método
//unknownVar.doSomething()

// Acá ya confirmó el tipado que necesitas y procedió a revisar si existe el método
/* if (typeof unknownVar === 'string') {
  unknownVar.doSomething();
} */

// Acá cambiamos el método por uno que si existe para strings y si lo permitió
if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

// Es mejor tipar los métodos los cuales no sabes si el resultado siempre es del mismo tipo con unknown en vez de any
const parser = (str: string): unknown => {
  return JSON.parse(str);
};

// Cuando se asigna una variable con tipado unknown se recomienda hacer una validación del tipado, así se asegura saber de que tipo es la asignación resultante
//const variable: boolean = unknownVar;
