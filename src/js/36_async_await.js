/* 
  ¿Qué es Async/Await?

  Async/Await es una característica de JavaScript 
  que simplifica el manejo de operaciones asíncronas. 
  Es una forma más legible y limpia de trabajar con 
  promesas y hacer que el código asíncrono se comporte de manera síncrona.

  ¿Cómo funciona?

  Async: 
    La palabra clave async se utiliza para 
    declarar una función asíncrona. 
    Esto indica que la función devuelve una promesa y 
    permite el uso de await dentro de ella.
  Await: 
    La palabra clave await se utiliza para 
    esperar la resolución de una promesa. 
    Hace que el código se detenga y espere hasta que 
    la promesa se resuelva, y luego devuelve 
    el valor resuelto.

  ¿Para qué se usa?
  Simplificar el código asíncrono: 
    Async/Await hace que el código asíncrono sea 
    más legible y fácil de entender, especialmente para 
    desarrolladores que están más familiarizados con el estilo síncrono.
    Manejar promesas: 
    Facilita el manejo de múltiples promesas, 
    ya que permite escribir código que se parece al estilo
    síncrono, incluso cuando se trabaja con operaciones asíncronas.
  Manejo de errores: 
    Permite un manejo más fácil y natural de 
    errores en operaciones asíncronas mediante el uso 
    de try...catch, lo que simplifica la lógica 
    de manejo de errores.
*/

function calcularCuadrado(num) {
  return new Promise((resolve, reject) => {
    if (typeof num === "number" && !isNaN(num)) {
      setTimeout(() => {
        let cuadrado = num ** 2;
        resolve({ num, cuadrado });
      }, 1500);
    } else {
      reject(new Error(`'${num}' no es un número válido`));
    }
  });
}

async function obtenerCuadrados(a) {
  try {
    const { num, cuadrado } = await calcularCuadrado(a);
    console.log(`El cuadrado de ${num}, es ${cuadrado}`);
  } catch (err) {
    console.error(err);
  }
}

obtenerCuadrados(3);
