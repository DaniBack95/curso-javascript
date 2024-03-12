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
  console.log("***** Operadores lógicos *****");
  console.log("operador And (&&)");
  let and = 3 > 2 && 9 > 3;
  console.log("3 > 2 &&  9 > 3");
  console.log(and);

  /* si el primer valor es verdadero,
  retorna el segundo valor */
  console.log("3 && 9");
  console.log(3 && 9);
  console.log("9 && 3");
  console.log(9 && 3);

  /* 
    And retorna el primer valor que encuentre 
    como falso, despué de eso, no demás operandos
    son ignorados
  */
  console.log("null && 1");
  console.log(null && 1);
  console.log("1 && undefined");
  console.log(1 && undefined);
  console.log(" '' && undefined ");
  console.log("" && undefined);
}

/* 
  OR: 
  Evalua una condición, devuelve verdadero si al menos
  uno de los valores de los operandos es verdadero o falso
  si los valores de todos los operandos evaludos son falsos
*/
{
  console.log("operador OR (||)");
  let or = 3 > 2 || 9 > 3;
  console.log("3 > 2 ||  9 > 3");
  console.log(or);
  console.log("3 > 2 ||  9 < 3");
  console.log(3 > 2 || 9 < 3);
  console.log("3 < 2 ||  9 < 3");
  console.log(3 < 2 || 9 < 3);

  /* 
    Si el primer operando es verdadero (true):

    Se devuelve el valor del primer operando, 
    sin evaluar el segundo operando, ya que no es necesario.
    esto se debe a que en una operación or, si uno de
    los operandos es verdadero, entonces el resultado 
    será verdadero, independientemente del valor del otro operando.

    Si el primer operando es falso (false):

    Se evalúa y devuelve el valor del segundo operando.
    Si el segundo operando también es falso, 
    se devuelve el valor del segundo operando.
  */

  console.log("1 || 0");
  console.log(1 || 0);
  console.log("0 || 1");
  console.log(0 || 1);
  console.log("null || 0");
  console.log(null || 0);
  console.log("0 || null");
  console.log(0 || null);
  console.log("0 || null || undefined");
  console.log(0 || null || undefined);
  console.log("undefined || null || 0 ");
  console.log(undefined || null || 0);
}

/* 
  Operador NOT !:
  Oprador unario que se usa para negar un valor, 
  es decir invierte el valor del operando, 
  si el valor es falso y se le aplica este operador
  su valor pasa a ser verdadero
*/
{
  console.log("operador NOT (!)");
  console.log("!false");
  console.log(!false);
  console.log("!true");
  console.log(!true);
  console.log("!null");
  console.log(!null);
  console.log("!0");
  console.log(!0);
  console.log("!''");
  console.log(!"");
  console.log("!'cat'");
  console.log(!"cat");
}

/* 
  Operador ternario:
  es un operador condicional, tiene 3 operandos,
  es como la versión compacta o corta del condicional
  if
*/
{
  console.log("***** Operador condicional: ternario ? :*****");
  const isLoguin = false;
  let user = isLoguin ? "Usuario" : "Invitado";
  console.log(user);

  const num = 3;
  const msj = num > 0 ? "Positivo" : "Negativo";
  console.log('const msj = num > 0 ? "Positivo" : "Negativo"');
  console.log("El número es:", msj);

  console.log("***** Obtener el tipo de dato con operador ternario *****");
  function getDataType(value) {
    return typeof value === "number"
      ? "Es un Número"
      : typeof value === "string"
      ? "Es un String"
      : typeof value === "boolean"
      ? "Es un Booleano"
      : "Es otro tipo de dato";
  }

  let dataType = getDataType(2024);
  console.log(dataType);
}
/* 
  Operador de asignación lógica nula:
  Es un operador que se usa para asignar un valor a una
  variable solo si esta varible tine como valor null 
  o undefined
*/
{
  console.log("***** Operador de asignacion lógica nula *****");

  let edad;
  console.log("Edad => ", edad);
  edad ??= 20;
  console.log("edad ??= 20");
  console.log("Edad => ", edad);

  let nombre = "Jorge";
  console.log("nombre =>", nombre);
  nombre ??= "Usuario desconocido";
  console.log('nombre ??= "Usuario desconocido"');
  console.log("nombre =>", nombre);

  function configPlayer(options) {
    options.life ??= 100;
    options.speed ??= 25;
    options.level ??= 1;
    return options;
  }

  const viewOptions = configPlayer({ level: 5 });
  console.log(viewOptions);
}

/* 
  Operador coalesciente null:
  Este operador es útil cuando se desea asignar un valor 
  predeterminado a una variable si la variable original 
  es null o undefined.
*/
{
  let firstName = null;
  let lastName = null;
  let nickName = "Supercode";
  console.log(firstName ?? lastName ?? nickName ?? "Anonymus");

  const user = {
    namme: "Andrés",
    age: "23",
    email: "andrea@gmail.com",
    hobbies: ["Leer", "Cocinar", "Viajar"],
  };

  let namme = user.namme ?? "Desconocido"
  let student = user.student ?? "Pendiente"
  console.log(namme)
  console.log(student)
}
