/* 
  Es un un tipo de dato primitivo e inmutable, dentro de ellos tenemos:
    + números enteros positivos y negativos
    + números decimales o flotantes 
    + valores numéricos especiales:
      + ∞ cuando supera los números enteros positivos 
      + -∞ cuando supera los números enteros negativos
      + NaN se da como resultado de una error de calculo matemático.
*/

/* numero entero */
let a = 5;
console.log(a);
let b = new Number(3);
console.log(b);
let c = "5.5";
console.log(typeof c, `: ${c}`);
console.log(+c);
console.log(parseInt(c));
console.log(parseFloat(c));
console.log(a.toFixed(3));
console.log(Number.parseFloat(b));

let noNumber = "texto";
let noNumericOperation = a * noNumber;
console.log(noNumericOperation)
console.log(noNumericOperation == Number.NaN);
console.log(Number.isNaN(noNumericOperation));
