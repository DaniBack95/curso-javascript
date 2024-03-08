/* 
Arrays
Es un objeto, una estructura que permite almacenar colecciones de datos, también se le conoce con el nombre de arreglo,  vector o matriz.
Los datos en el array se almacenan de manera ordenada.
*/

/* Formas de crear un array vacío*/
{
  // Literales
  console.log("***** Declarando arrays *****");
  console.log("***** Literales *****");
  const colors = [];
  console.log({ colors });
  console.log(typeof colors);
  // Constructor
  console.log("***** Constructor *****");
  const data = new Array();
  console.log(data);
  console.log(typeof data);
  // Podemos omitir el operador new
  const dataB = Array();
  console.log(dataB);
  console.log(typeof dataB);
}

/* Declarando e inicializando un array */
{
  // Literales
  console.log("***** definiendo e inicializando arrays *****");
  console.log("***** Literales *****");
  const colors = ["amarillo", "azul", "rojo"];
  console.log({ colors });
  console.log(colors);
  // Constructor
  const data = new Array("colombia", "españa", "méxico", "usa");
  console.log(data);
  // Podemos omitir el operador new
  const dataB = Array(1, 2, 3, 4, 5);
  console.log(dataB);
  /*   
    Si pasamos un único argumento de tipo numérico, creará el array de ese tamaño, pero cada posción estara vacía=undefined
    */
  console.log("***** Array con tamaño definido pero vacío *****");
  const sizeArray = new Array(3);
  console.log(sizeArray);
}

/* 
  índices de un array:
  A cada elemento del array se le asigna una posición o un índice, estos índices se empiezan a contar desde cero e indican la posición en la que se encuentra el elemento. 
*/
{
  console.log("***** Indices de un array*****");
  const colors = ["amarillo", "azul", "rojo"];
  console.table({ colors });
}

/* 
  Agregando más elementos a un array:
  Podemos agregar más elementos a un despúes de declararlo y/o inicializarlo atavés de []
*/

{
  console.log("***** Agregando más elementos a un array. *****");
  const colors = ["amarillo", "azul", "rojo"];
  colors[3] = "violeta";
  console.log(colors);
}
/* 
  Modificando un elemento dentro del array a través de [] 
*/
{
  console.log("***** Modificando el elemento de un array.  *****");
  const colors = ["amarillo", "azul", "rojo"];
  colors[1] = "violeta";
  console.log(colors);
}

/* Accediendo a los elementos de un array: 
  Se usa el nombre de la Arrai, seguido se abren llaves []. Dentro de las llaves Colocamos el número de la posición o índice del elemento que queremos acceder. Recordemos que los índices se empiezan a contar desde cero. Por lo tanto, si queremos ver el elemento de la posición dos. Tendríamos que restarle -1 */
{
  console.log("***** Accediendo a los elementos de un array.  *****");
  const colors = ["amarillo", "azul", "rojo"];
  console.log(colors[0]);
  console.log(colors[1]);
  console.log(colors[2]);
}

/* 
  Tamaño de un array : 
  El tamaño de una raíz está definido por el total de los elementos que almacenan su estructura. Podemos conocer el tamaño mediante la propiedad array.length 
*/
{
  console.log("***** Conociendo el tamaño del array *****");
  const colors = ["amarillo", "azul", "rojo"];
  console.log(colors.length);
}

/* 
  Métodos de un array:
  Los arrays en javascript poseen ciertos métodos que nos permite manipular los datos que almacena los más conocidos son array.pop()  array.push array.shift y array.unshift.
  Los métodos shift y unshift tienen un performance más lento que los métodos pop y push. 
  Los arrays en javascript pueden trabajar como pilas(LIFO) y colas(FIFO) gracias a estos métodos mencionados. 
  */

/* 
  Método array.pop():
  Este método extrae/elimina el último elemento del array. 
  Retorna el elemento extraído 
 */

{
  console.log("***** Método array.pop() *****");
  const colors = ["amarillo", "azul", "rojo"];
  console.log("***** Array original  *****");
  console.log(colors);
  let color = colors.pop();
  console.log("***** Array después de aplicar el método pop *****");
  console.log(colors);
  console.log("***** Mostrando el valor que retorna el método pop *****");
  console.log(colors);
}

/* 
  Método array.push():
  Este método agrega 1 o más elementos al final de la array. 
*/ {
  console.log("***** Método array.push() *****");
  const colors = ["amarillo", "azul", "rojo"];
  console.log("***** Array original  *****");
  console.log(colors);
  console.log("***** Aplicando método push  *****");
  colors.push("violeta", "verde");
  console.log(colors);
}

/* 
  Bucles en el array:
  Podemos iterar o recorrer los elementos de un array mediante un for clásico. Un for of o Foreage 
*/

{
  /* Recorriendo con un for clásico para mostrar cada elemento del array.  */
  console.log("***** Recorriendo con un for clásico. *****");
  const colors = ["amarillo", "azul", "rojo"];
  for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
  }
}

{
  /* Recorriendo con un for of para mostrar cada elemento del array.  */
  console.log("***** Recorriendo con un for of. *****");

  const colors = ["amarillo", "azul", "rojo"];
  for (const color of colors) {
    console.log(color);
  }

  console.log("***** Otro ejemplo con un for of. *****");
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log("***** Array numbers *****");
  console.log(numbers);
  console.log("***** elevando al cuadrado  *****");
  const squaredNumbers = [];
  for (let number of numbers) {
    number **= 2;
    squaredNumbers.push(number);
  }
  console.log(squaredNumbers);
}

/* Iterar un array foreach:
  Es un método que recibe como parámetro una función dicha función puede recibir 3 parámetros, el primer parámetro es la iteración sobre el elemento, la segunda sobre el índice del array y la tercera, el array completo. 
*/
{
  console.log("***** Recorriendo array  con un foreach: 1 parámetro *****");
  function showElement(element) {
    console.log(`Elemento: ${element}`);
  }

  const colors = ["amarillo", "azul", "rojo"];
  colors.forEach(showElement);
}

{
  console.log("***** Recorriendo array  con un foreach: 2 parámetros. *****");
  function showElement(element, index) {
    console.log(`Elemento: ${element} en la posición ${index}`);
  }
  const colors = ["amarillo", "azul", "rojo"];
  colors.forEach(showElement);
}

{
  console.log("***** Recorriendo array  con un foreach: 3 parámetros. *****");
  function showElement(element, index, array) {
    console.log(`Elemento: ${element} en la posición ${index}`);
    console.log(`Array completo: ${array}`);
  }
  const colors = ["amarillo", "azul", "rojo"];
  colors.forEach(showElement);
}

{
  /* 
    En vez de pasar una función declarada al método foreach, podemos pasar un fución anónima o una array función 
  */
  console.log("***** Pasando una función anónima *****");
  const countrys = ["Colombia", "México", "Argentina", "Canadá", "Finlandia"];
  countrys.forEach(function (country) {
    console.log(`Country: ${country}`);
  });
}
{
  console.log("*****  *****");
  const countrys = ["Colombia", "México", "Argentina", "Canadá", "Finlandia"];
  countrys.forEach(function (country, index) {
    console.log(`Country ${index}: ${country}`);
  });
}

/* 
  Arrays multidimensional: 
  Se les conoces multidimensional porque se pueden almacenar arrays dentro de un array
*/
{
  console.log("***** Array multidimensional *****");
  const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  console.table(matriz);
  console.log(matriz);
  console.log(`Elemento central de la matriz => ${matriz[1][1]}`);
  matriz.forEach((subMatriz, index) => {
    if(index % 2 !== 0) {
      subMatriz.forEach((element, index) =>{
        if(index % 2 === 0) {
          subMatriz[index] = 0
        }
      }) 
    } else {
      subMatriz.forEach((element, index) =>{
        if(index % 2 !== 0) {
          subMatriz[index] = 0
        }
      }) 
    }
  })
  console.log(matriz)
}
