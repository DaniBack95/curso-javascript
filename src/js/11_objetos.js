/* 
  Objetos:
  Son un tipo de dato complejo o compuesto que almacena una colección de datos de manera desordenada, Esa estructura se forma a partir de algo llamado clave:valor las claves también son conocidas como keys y técnicamente como propiedades o atributos, Las claves son Variables que pueden almacenar datos primitivos o datos compuestos, puede ir desde un string, un número, un boolean, un array e incluso almacenar otros objetos, también pueden almacenar funciones, estas funciones dentro de un objeto se le denominan métodos, ya que ejecutan una acción específica.
*/

/* 
  Declarando un objeto vacío:
  Hay dos formas de declarar objetos, 
  1. A través del objeto literal usando {}  (la más usada y cómoda)
  2. A través del constructor new object()
*/

{
  console.log("***** Delcarando un objeto *****");
  console.log("***** Objeto literal *****");
  const user = {};
  console.log(user);
}

{
  console.log("***** Objeto con el constructor *****");
  const user = new Object();
  console.log(user);
}

/* 
  Declarando e inicializando
*/
{
  console.log("***** Declarando e inicializando el objeto *****");
  const user = {
    namme: "Sebastian",
    age: "20",
    sports: ["soccer", "basketball", "cycling", "mountaineering"],
    student: true,
  };
  console.table(user);
}

/* 
  Accediendo a las propiedades de un objeto:
  A través de la notación de punto, si ponemos el nombre de una propiedad que no es real del objeto devuelve undefined
*/
{
  console.log("***** Accediendo a las propiedades: notación de punto ****");
  const user = {
    namme: "Sebastian",
    age: 20,
    sports: ["soccer", "basketball", "cycling", "mountaineering"],
    student: true,
  };
  console.log(user.namme);
  console.log(user.sports);
  console.log(user.student);
  // no existe la propiedad title
  console.log(user.title);
}
/* 
  Accediendo a las propiedades de un objeto:
  A través de la notación de corchetes
*/
{
  console.log("***** Accediendo a las propiedades: notación de corchetes ****");
  const user = {
    namme: "Sebastian",
    age: 20,
    sports: ["soccer", "basketball", "cycling", "mountaineering"],
    student: true,
    5: "manzana",
  };
  console.log(user["sports"]);
  console.log(user["age"]);
  console.log(user["namme"]);
  console.log(user[5]);

  /* En la notacion de corchetes podemos usar palabras separadas por espacio */
  user["ciudad de nacimiento"] = "Bogotá";
  console.log(user["ciudad de nacimiento"]);
  console.log(user);

  /* También podemos asignar el identificador de la propiedad de un objeto a una variable y pasarla dentro de la notatión de corchetes */
  let prop = "namme";
  console.log(user[prop]);
}

/* 
  Operador in:
  Es un operador que valida si una propiedad existe o no en ubjeto, este operador retorna un valor booleano, true o flase

  sintaxis: propiedad in objeto
  donde:
  propiedad: es el nombre de la propiedad que se quiere comprobar
  objeto: el objeto donde se quiere comprobar dicha propiedad

*/
{
  console.log("***** Operador In ****");
  const user = {
    namme: "Sebastian",
    age: 20,
    sports: ["soccer", "basketball", "cycling", "mountaineering"],
    student: true,
    5: "manzana",
  };
  console.log("¿Existe la propiedad namme?");
  console.log("namme" in user);

  let prop = "ciudad";
  console.log("¿Existe la propiedad ciudad?");
  console.log(prop in user);
}

/*
  Eliminar propiedades:
  Se pueden elimnar propiedades con el operador delet
*/
{
  console.log("***** Operador delet ****");
  const user = {
    namme: "Sebastian",
    age: 20,
    sports: ["soccer", "basketball", "cycling", "mountaineering"],
    student: true,
    5: "manzana",
  };
  console.log("Accediendo a la porpiedad student");
  console.log(user.student);
  console.log("Eliminando la porpiedad student");
  delete user.student;
  console.log(user.student);
}

/* 
  Bucles en los objetos:
  podemos iterar sobre los objetos, reccorrer todas las claves con el for in
*/

{
  console.log("***** Bucle for in ****");
  const user = {
    namme: "Sebastian",
    age: 20,
    sports: ["soccer", "basketball", "cycling", "mountaineering"],
    student: true,
    5: "manzana",
  };

  console.log("Mostrando las claves del objeto user bucle for in");
  for (let key in user) {
    console.log(key);
  }

  console.log("Mostrando las claves y valores del objeto user bucle for in");
  for (let key in user) {
    console.log(`${key} : ${user[key]}`);
  }
}

/* 
  Métodos de un objeto:
  En los objetos, las propiedades son variables que pueden almacenar cualquier tipo de dato, por lo cual también podemos almacenar funciones en estas propiedades a esas propiedades que contienen una función se le denominan métodos, ya que ejecutan una acción específica. 
*/
{
  console.log("***** Métodos de un objeto ****");
  const user = {
    namme: "Sebastian",
    age: 20,
    sports: ["soccer", "basketball", "cycling", "mountaineering"],
    student: true,
    5: "manzana",

    greeting: function () {
      console.log(`Hola mi nombre es ${this.namme}, tengo ${this.age} años`);
    },

    showStudent() {
      console.log(this.student)
    },
  };
  console.log("usando el método greeting");
  user.greeting();
  user.showStudent()
}

