/* Existe otra sintaxis para crear funciones llamada expresión de función, en el que una variable recibe un valor como función, entonces una función es un valor, un valor especial ya que se puede invocar, entonces se pueden trabajar con ellas como se trabajan con otros tipos de valores.
A las funciones de expresión no se les aplica HOISTING */
{
  function saludar() {
    console.log("Hola amigos!");
  }
  console.log("***** Mostrando el codigo de la función *****");
  console.log(saludar);

  /* copiando la función en una variable */
  console.log("***** copiando función *****");
  let myFunc = saludar;
  // desde la copia
  myFunc();
  // desde la funcion creada
  saludar();

  // Expresión de función
  console.log("***** Función de expresión *****");
  let saludo = function () {
    console.log("Saludo de expresión");
  };
  saludo();
}

/* Funciones anónimas: son funciones que no tienen nombre ni son alamacenadas en ninguna variable, estas funciones suelen ser utilizadas como callbacks (funciones que se pasan como argumento a otra función o tambén funciones que solo se usarań una sola vez segun el resulado de una condición, como se muestra en el siguiente ejemplo) */
{
  let age = 20;

  let welcome =
    age < 18
      ? function () {
          console.log("¡Bienvenido niño!");
        }
      : function () {
          console.log("Bienvenido Jóven!");
        };

  welcome();
}

/* Closures */
{
  console.log("***** Closure ******")
  const incr = (function () {
    let num = 0;
    return function () {
      num++;
      return num;
    };
  })();

  console.log(incr())
  console.log(incr())
  console.log(incr())

}
