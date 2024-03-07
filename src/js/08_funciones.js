/* Funciones: fragmentos de código que se pueden reutilizar, este codigo esta encapsulado en un bloque (cuerpo de la función) que será ejecutado en cualquier parte del programa cuando sea invocada. */

/* Funciones declaradas */
{
  function greeting() {
    console.log("Hola desde una función declarada");
  }
  console.log("***** Usando una variable declarada *****");
  /* Invocación/llamada de la función: 
  a través de su nombre con los paréntesis */
  greeting();
}

/* Variables locales: son aquellas que son declaradas dentro de la función, solomante se pueden acceder a ellas dentro de la misma función y no por fuera de ella */
{
  console.log("***** Variables locales *****");
  function greeting() {
    let message = "¡Hola desde JavaScript!";
    console.log(message);
  }
  greeting();

  /* Esto da error, porque solo es posible acceder a esta varible dentro de la función en la que fue declarada, su alcance es local */
  // console.log(text);
}

/* Varialbles locales / globales: son varibales que son declradas fuera de la función,  pero la función puede acceder a dicha varible externa */
{
  console.log("***** Variables globales *****");
  let user = "Juan";
  function greeting() {
    let message = `¡Hola ${user}!`;
    console.log(message);
  }
  greeting();
}

/* Al tener acceso total a las variable, puede modificar su valor */
{
  console.log("***** modificando variable global *****");
  let user = "Juan";
  function greeting() {
    // modificando la variable
    user = "David";
    let message = `¡Hola ${user}!`;
    console.log(message);
  }
  // valor de la variables antes de la invocación
  console.log(user);
  // invocación
  greeting();
  // valor de la variable después de la invocación
  console.log(user);
}

/* Dentro de la función podemos declarar una variable local con el mismo nombre de una variable global, no va a generar error y la función usará la variable local sin afectar la variable global */
{
  console.log(
    "***** Declarando variable local con mismo nombre de la variables globlal *****"
  );
  let user = "Juan";
  function greeting() {
    // modificando la variable
    let user = "Felipe";
    let message = `¡Hola ${user}!`;
    console.log(message);
  }
  // valor de la variables antes de la invocación
  console.log(user);
  // invocación
  greeting();
  // valor de la variable después de la invocación
  console.log(user);
}

/* Parámetros: las funciones se pueden declarar con una lista de varialbes, estas son locales, de listan dentro de los paréntesis de la función 
Argumentos: son los valores (esto es información adicional para que pueda trabajar y procesar datos) que se le pasan a la función en el momento de su invocación, es decir se le proporciona los valores a las varialbes definidas (listadas)*/

{
  console.log("***** Una función con parámetros");
  function greeting(user, text) {
    console.log(`${user} : ${text}`);
  }

  greeting("Daniel", "¡Hola!");
}

{
  console.log("***** Otro ejemplo de función con parámetros");
  function greeting(user, text) {
    user = `* ${user} *`;
    console.log(`${user} : ${text}`);
  }
  let user = "Jorge";

  greeting(user, "¡Hola!");

  /* la variable globlal user no es modificada, la función usa la variable local declarada cómo parámetro */
  console.log(user);
}

/* Valores predeterminados: si la función tiene parámetros listados y al invocarla sin pasarle alguno de los argumentos su valor por defecto es undefined */
{
  console.log("***** Función sin argumentos");
  function greeting(user, text) {
    user = `* ${user} *`;
    console.log(`${user} : ${text}`);
  }
  let user = "Jorge";
  // sin argumentos
  greeting();
  // con un solo argumento
  greeting(user);
}

/* podemos asignar el valor de los parámetros que usará en caso de que el argumento sea omitido al momento de la invocación y que tome otro valor que no sea undefined */
{
  console.log("***** Función con valores predetermiandos");
  function greeting(user = "sin nombre", text = "sin texto") {
    user = `* ${user} *`;
    console.log(`${user} : ${text}`);
  }
  let user = "Jorge";

  greeting();
  greeting(user);
}

/* Retornando un valor: las funciones pueden o no retornar valores/reslutados, esto se hace mediante la palabra reserva return, esta directiva puede estar en cualquier parte de la función, de hecho puede haber muchas de ellas en una misma función, en el momento que es alcanzada la funcion se detiene inmediatamente y devuelve el valor al código de llamada  */
{
  console.log("***** Función retornando valor *****");
  function sum(a, b) {
    return a + b;
  }
  let result = sum(3, 9);
  console.log(result);

  console.log("***** Un ejemplo más de función retornando valor *****");
  function chekAge(age) {
    if (age > 17) {
      return true;
    } else {
      return false;
    }
  }

  /* if (chekAge(18)) {
    console.log("Acceso otorgado");
  } else {
    console.log("Acceso denegado");
  } */

  function showMovie(age) {
    if(!chekAge(age)) {
      return
    } 
    console.log("Mostrando peli...")
  }

  showMovie(20)
}

/* En JavaScript las funciones son un objto especial, también se les considera como ciudadanos de primera clase/ciudadanos de primer orden, esto debido a que las funciones pueden ser asignadas a una varible, pueden ser pasadas como argumentos a otra función y también  pueden ser retornadas como resultado de la ejecución de otra función. 
*/
{
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if(n % i == 0 ) return false
    }
    return true
  }

  function findPrimes(n) {
    let arrayPrimes = []
    for (let i = 2;  i <= n; i++) {
      if(!isPrime(i)) continue
      arrayPrimes.push(i)
    }
    return arrayPrimes
  }
  let numbersPrimes = findPrimes(20)
  console.log(numbersPrimes)
}