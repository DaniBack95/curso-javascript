/* 
  Promesas
  una promesa representa el eventual cumplimiento o rechazo de una tarea asincrónica. Esta tarea podría ser cualquier operación que tarde un tiempo impredecible en completarse, como cargar datos de un servidor, leer un archivo o realizar cálculos complejos.

  Funcionamiento de las promesas
  Las promesas se basan en dos conceptos clave:

  Estado: Una promesa puede estar en uno de tres estados:

  Pendiente: La promesa aún no se ha resuelto ni rechazado.
  Resuelta: La operación asincrónica ha finalizado con éxito y la promesa contiene un valor.
  Rechazada: La operación asincrónica ha fallado y la promesa contiene un error.
  Acciones: Las promesas se asocian con dos métodos principales:

  resolve(valor): Se utiliza para indicar que la operación asincrónica ha finalizado con éxito y para establecer el valor de la promesa.
  reject(error): Se utiliza para indicar que la operación asincrónica ha fallado y para establecer el error de la promesa.
  Las promesas se crean utilizando el constructor Promise. Dentro del constructor, se pasa una función asíncrona llamada "ejecutor". Esta función tiene dos parámetros:

  resolve: Una función que se llama para establecer el valor de la promesa en caso de éxito.
  reject: Una función que se llama para establecer el error de la promesa en caso de fallo.
  Uso de las promesas
  Las promesas se utilizan principalmente para manejar el flujo de control en código asincrónico. Permiten encadenar operaciones asincrónicas de manera segura y evitar el "callback hell", un problema común en el manejo de múltiples callbacks anidados.

  Para utilizar una promesa, se pueden usar los métodos then y catch:

  then(callback): Se ejecuta una función callback cuando la promesa se resuelve con éxito. El callback recibe el valor de la promesa como argumento.
  catch(callback): Se ejecuta una función callback cuando la promesa se rechaza. El callback recibe el error de la promesa como argumento.
  También se pueden encadenar múltiples métodos then y catch para manejar secuencias de operaciones asincrónicas.

  Ventajas de las promesas
  Las promesas ofrecen varias ventajas sobre los callbacks tradicionales para manejar operaciones asincrónicas:

  Mejor legibilidad: El código con promesas es generalmente más fácil de leer y comprender, especialmente cuando se encadenan múltiples operaciones asincrónicas.
  Manejo de errores mejorado: Las promesas proporcionan una forma más estructurada de manejar errores asincrónicos mediante el método catch.
  Encadenamiento de promesas: Las promesas permiten encadenar fácilmente múltiples operaciones asincrónicas utilizando los métodos then y catch, lo que facilita el manejo de flujos de trabajo complejos.
*/
{
  console.log('Usando callbacks')
  const isPar = (num, callback) => {
    if(typeof num !== 'number' || Number.isNaN(num)){
      return callback(null, `${num} no es un número válido`)
    } else if(num < 0) {
      return callback(null, `${num} es menor a cero`)
    } else {
      return callback({par: num % 2 === 0, value: num}, null)
    }
  }

  isPar(7, (resp, err) => {
    if(err){
      console.log(err)
    } else {
      console.log(`${resp.value} es ${resp.par ? 'par' : 'impar'}`)
    }
  })
}

{
  console.log('Usando promesas')
  const isPar = (num) => {
    return new Promise((resolve, reject) => {
      if (isNaN(num) || num < 0) {
        reject(num);
      } else {
        if (num % 2 == 0) {
          resolve({ par: true, value: num });
        } else {
          resolve({ par: false, value: num });
        }
      }
    });
  };
  isPar(2)
    .then((response) => {
      if (response.par) {
        console.log(`${response.value} es par`);
      } else {
        console.log(`${response.value} es impar`);
      }
    })
    .catch((err) => {
      console.log(`Esto ${err} no es un número correcto`);
    });
}   

{  
  const isNumPar = (num) => {
    return new Promise((resolve, reject) => {
      if (typeof num !== "number" || Number.isNaN(num)) {
        reject(`${num} no es un numero válido`);
      } else if (num < 0) {
        reject(`${num} es un numero negativo`);
      } else {
        resolve({ par: num % 2 === 0, value: num });
      }
    });
  };
  isNumPar(5)
    .then(({ par, value }) => {
      console.log(`${value} es ${par ? "par" : "impar"}`);
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
}
