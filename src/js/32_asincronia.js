/* 
  Procesamiento de un hilo único y multihilo
    JavaScript es un lenguaje de programación de un solo hilo, 
    lo que significa que solo puede ejecutar 
    una pieza de código a la vez en un solo 
    hilo de ejecución. 
    Sin embargo, el entorno en el que se ejecuta 
    JavaScript (como el navegador o Node.js) 
    puede ser multihilo, lo que significa que 
    puede tener múltiples hilos de ejecución ejecutándose 
    simultáneamente para manejar tareas como el 
    rendimiento de la interfaz de usuario, solicitudes de 
    red, E/S de disco, etc.

    Operaciones de CPU, entrada y salida
    Operaciones de CPU: 
      Son aquellas que implican cálculos
      y manipulación de datos en la memoria.
    Operaciones de entrada: 
      Son aquellas que involucran 
      la interacción del usuario, como hacer clic en un botón 
      o escribir en un campo de texto.
    Operaciones de salida: 
      Son aquellas que involucran 
      la presentación de datos al usuario, como mostrar 
      contenido en la pantalla o enviar datos a través de la red.

    Concurrentes, paralelas, bloqueantes y no bloqueantes
    Concurrentes: 
      Las operaciones concurrentes son 
      aquellas que pueden ocurrir en cualquier 
      momento, pero no necesariamente al mismo tiempo.
    Paralelas: 
      Las operaciones paralelas son aquellas 
      que ocurren simultáneamente en diferentes 
      hilos o procesos.
    Bloqueantes: 
      Las operaciones bloqueantes 
      son aquellas que detienen la ejecución 
      del hilo hasta que se completa la operación.
    No bloqueantes: 
      Las operaciones no bloqueantes 
      son aquellas que permiten que el hilo 
      continúe ejecutándose mientras espera que 
      se complete la operación.

  Síncronas y asíncronas
    Síncronas: 
      Las operaciones síncronas son aquellas 
      que se ejecutan una detrás de otra en 
      secuencia, esperando que cada una se complete 
      antes de pasar a la siguiente.
    Asíncronas: 
      Las operaciones asíncronas son aquellas que no 
      se ejecutan en secuencia y pueden continuar 
      ejecutándose mientras otras operaciones están en curso.

  Funcionamiento del Event Loop
    El Event Loop es un bucle que se ejecuta 
    continuamente, monitoreando la cola de tareas 
    y la pila de ejecución para determinar qué tareas 
    se ejecutarán a continuación. El ciclo de eventos 
    consta de los siguientes componentes:

    Call Stack (Pila de Llamadas): 
      Es donde se almacenan las funciones y las operaciones 
      que se están ejecutando actualmente.

    Web APIs (APIs del Navegador o del Entorno): 
      Son APIs proporcionadas por el entorno de ejecución, 
      como el navegador o Node.js, que realizan 
      operaciones asíncronas como temporizadores, 
      eventos de DOM, solicitudes de red, etc.

    Callback Queue (Cola de Callbacks): 
      Es donde se almacenan las funciones de retorno 
      de llamada (callbacks) de las operaciones 
      asíncronas una vez que se completan.

    Microtask Queue (Cola de Microtareas): 
      Es donde se almacenan las microtareas, que son tareas 
      de alta prioridad que se ejecutan después de que 
      se vacíe la pila de llamadas pero antes de que se 
      tomen tareas de la cola de callbacks.

    Render Queue (Cola de Renderización): 
      Es donde se almacenan las actualizaciones de la 
      interfaz de usuario que se procesarán en el próximo 
      frame de renderización.

    El Event Loop sigue un ciclo continuo en el que 
    verifica si la pila de llamadas está vacía. 
    Si la pila de llamadas está vacía, comprueba si 
    hay microtareas en la cola de microtareas y las ejecuta. 
    Si no hay microtareas, toma una tarea de la cola de 
    callbacks y la ejecuta. Este proceso se repite 
    continuamente mientras la aplicación está en ejecución.
*/

{
  console.log('Código síncrono')
  function dos(){
  console.log('dos')
  }
  function uno(){
  console.log('uno')
  dos()
  console.log('tres dentro de uno')
  }
  uno()
  console.log('fin del código síncrono'
)}
{
  console.log('Código asíncrono')
  function dos(){
    setTimeout(()=>{
      console.log('dos asíncrono')
    }, 1000)
  }
  function uno(){
    setTimeout(() => {
      console.log('Uno asíncrono')
    }, 500);
    dos()
  }
  uno()
  console.log('Fin código asíncrono')
}