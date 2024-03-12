const h2 = document.getElementById("subtitle");
h2.innerHTML = "Operadores Js";
/* 
  Operadores:
  Son simbolos que representan una operación, se usan
  en un o más valores, esto valores son llamados operandos.
  Tipos de operadores:
    * operadores aritméticos
    * operadores de asignación
    * operadores de comparación
    * operadores unarios
    * operadores lógicos
    * operadores de incremento y decremento
    * operadores bit a bit 
*/

/* 
  Aritméticos: 
    suma: a + b
    resta: a - b
    multiplicación: a * b
    división: a / b
    exponenciación a ** b
*/

{
  console.log("***** Operadores aritméticos *****");
  let a = 9;
  let b = 3;
  console.log(`Valores: a = ${a} b = ${b}`);
  console.log("Suma");
  console.log(a + b);
  console.log("Resta");
  console.log(a - b);
  console.log("Mulitpilcación");
  console.log(a + b);
  console.log("División");
  console.log(a / b);
  console.log("Módulo");
  console.log(a % b);
  console.log("Exponenciación");
  console.log(a ** b);
}

/* 
  Operadores de asignación:
*/

{
  console.log("***** Operadores de asignación *****");
  let a = 9;
  let b = 3;
  console.log(`Asingnamos a = ${a}`);
  console.log(`Asingnamos b = ${b}`);
  console.log(`Asingnación de suma +=`);
  console.log((a += b));
  console.log(`Asingnación de resta -=`);
  console.log((a -= b));
  console.log(`Asingnación de multiplicación *=`);
  console.log((a *= b));
  console.log(`Asingnación de división /=`);
  console.log((a /= b));
  console.log(`Asingnación de módulo %=`);
  console.log((a %= b));
  console.log(`Asingnación de exponenciación **=`);
  a = 3;
  console.log((a **= b));
}

/* 
  Operadores de comparación: retornan un valor booleano
*/
{
  console.log("***** Operadores de comparación *****");
  let a = 9;
  let b = 3;
  console.log(`Mayor que: ${a} > ${b}:`);
  console.log(a > b);
  console.log(`Menor que: ${a} < ${b}:`);
  console.log(a < b);
  console.log(`Igual que: ${a} == ${b}:`);
  console.log(a == b);
  console.log(`Diferente que: ${a} != ${b}:`);
  console.log(a != b);

  /* 
    En el operador igual tenemos dos tipos:
    comparación no esctricta y comparación estricta. 
    No estricta: es la comparacion con 2 iguales
      ==, esta comparación hace type coerción implícita, 
      no tiene en cuenta los tipos, solo los valores, 
      por lo tanto Js convertirá alguno de los valores 
      a un tipo con el que pueda realizar la operación 
      de comparación y arrojar un resulado que no 
      sea un error.
  */
  console.log("***** Comparación no estricta *****");
  {
    console.log("***** number y string*****");
    let a = 3;
    let b = "3";
    console.log("a:", a, "b:", b);
    console.log("a:", a, " == ", "b:", b, a == b);
  }

  {
    console.log("***** number y truthy/falsy *****");
    let a = 1;
    let b = true;
    console.log("a:", a, "b:", b);
    console.log("a:", a, " == ", "b:", b, a == b);
  }
  /* 
    comparación estricta:
      Es la comparación con 3 iguales ===,
      Js no hara type coerción, tendra encuenta que sea igual
      tanto en valor como en tipo de dato
  */
  console.log("***** Comparación estricta *****");
  {
    let a = 0;
    let b = false;
    console.log("a:", a, "b:", b);
    console.log("a:", a, " === ", "b:", b, a === b);
  }
  {
    let a = "20";
    let b = 20;
    console.log("a:", a, "b:", b);
    console.log("a:", a, " === ", "b:", b, a === b);
  }
}

/* 
  operadores unarios:
  son operadores que se aplican a un solo operando:
    incremento => ++ (++pre-incremento y post-incremento++)
    decremento => -- (--pre-incremento y post-incremento--)
    positivo => +
    negativo => -
    negación => !
    tipos => typeof
*/
{
  console.log("***** Operadores unarios *****");
  let number = 3;
  console.log("Incremento(post-incremento)");
  console.log(`n n++ n`);
  console.log(number, number++, number);
}
{
  let number = 3;
  console.log("Incremento(pre-incremento)");
  console.log(`n ++n n`);
  console.log(number, ++number, number);
}
{
  let number = 3;
  console.log("Decremento (post-decremento)");
  console.log(`n n-- n`);
  console.log(number, number--, number);
}
{
  let number = 3;
  console.log("Decremento (pre-decremento)");
  console.log(`n --n n`);
  console.log(number, --number, number);
}

/* Unario positivo */
{
  console.log("Operador unario positivo +");
  let n = -5;
  console.log("n = ", n);
  console.log("n = ", +n);

  let m = "33";
  console.log("m = ", m);
  console.log("m = ", +m);
}

/* Unario negativo */
{
  console.log("Operador unario negativo -");
  let n = 5;
  console.log("n = ", n);
  console.log("n = ", -n);

  let m = "33";
  console.log("m = ", m);
  console.log("m = ", -m);
  console.log(n, "+", m, "=", n + m);
  console.log(n, "+", m, "=", n + +m);

  let j = -9;
  console.log("j = ", j);
  console.log("j = ", -j);
}

/* 
  Operador typeof:
  Es un operador que devuelve en forma de string 
  el tipo de dato al que pertenece el valor que 
  se le pasa: string, número, un objeto, una variable,
  etc
*/
{
  console.log("***** Operador typeof *****");
  console.log("numero =>", typeof 5);
  const saludar = function () {
    return `Hola programador`;
  };
  console.log("saludar() =>", typeof saludar());
  console.log("saludar() =>", typeof saludar);
  console.log("Boolean =>", typeof true);
  console.log("Objeto =>", typeof {});
  console.log("Undefined =>", typeof undefined);
  console.log("Null =>", typeof null);
  console.log("NaN =>", typeof NaN);
  console.log("String =>", typeof "JavaScript");
}

/* 
  Operadores lógicos:
  Estos operdores evaluan una condición y retornan un 
  valor boleano.
    AND &&:
      Retorna true si los dos valores operandos son
      verdadero, falso en cualquier otro 
      caso

*/
{
  console.log("***** Operadores lógicos *****")
  console.log("operador And (&&)")
  let and = 3 > 2 &&  9 > 3
  console.log("3 > 2 &&  9 > 3")
  console.log(and)

  /* si el primer valor es verdadero,
  retorna el segundo valor */
  console.log("3 && 9")
  console.log(3 && 9)
  console.log("9 && 3")
  console.log(9 && 3)

  /* 
    And retorna el primer valor que encuentre 
    como falso, despué de eso, no demás operandos
    son ignorados
  */
  console.log("null && 1")
  console.log(null && 1)
  console.log("1 && undefined")
  console.log(1 && undefined)
  console.log(" '' && undefined ")
  console.log('' && undefined )
}