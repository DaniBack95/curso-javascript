/* undefined: siginifica que una variable no ha sido inicializada, es decir que no se le ha asignado ningún valor después de ser declarada */
let edad;
console.log(edad)
console.log(typeof edad)
console.log(Object(edad))


/* null, es un valor especial que se le da a una variable de manera intencional, quiere decir que su valor es nulo.
 si se le aplica el operador type of a null, arroja que es un tipo object, pero oficialmente esto es un error que yace desde los inicios de JavaScript y que no se pude sustituir por motivos de compatibilidad, lo cierto es que null es u un tipo de dato propio y no es un objeto*/

let altura = null
console.log(altura)
console.log(typeof altura)
console.log(Object(altura))

/* NaN, es un dato especial que representa un error de cálculo, esto sucede cuando se intenta realizar una operación matemática con algún valor que no es de tipo numérico */

let noNumber = "Esto no es un número";
let nonNumericOperation = (noNumber / 2); 
console.log(typeof nonNumericOperation)

