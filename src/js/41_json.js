/* 
JSON
  JavaScript Object Notation
  Es un formato ligero para la representación 
  de estructuras de datos y el intercambio
  de datos.
  Es ampliamente utilizado en el intercambio de datos 
  entre aplicaciones web y servidores, así como en el 
  almacenamiento de datos estructurados.
  JSON no está vinculado a un lenguaje de 
  programación específico, lo que permite su uso 
  en diversas plataformas y tecnologías.

  JSON se compone por 2 tipos de estructuras:

    Objetos: Representados por llaves {} y contienen 
    pares clave-valor. Las claves son cadenas de texto 
    y los valores pueden ser de diversos tipos, 
    como números, cadenas de texto, booleanos, 
    objetos anidados o arrays.

    Arrays: epresentados por corchetes [] y 
    contienen una lista ordenada de valores.
    Los valores pueden ser de cualquier tipo de dato 
    JSON válido.

    Métodos para formatear y analizar datos JSON
    JSON.parse():
      analiza una cadena de texto como JSON, transformando opcionalmente el valor producido por el análisis en objetos JavaScript.
      JSON.parse(cadenaJSON[, reviver])
      cadenaJSON:
      La cadena JSON que se desea convertir en 
      un objeto JavaScript.
      reviver:
      Es una función opcional para convertir el valor 
      de las propiedades
    JSON.stringify():
      Convierte objetos JavaScript en cadenas JSON.
      JSON.stringify(objeto[, replacer[, space]])
      objeto:
      El objeto JavaScript que se desea convertir a JSON.
      replacer:
      Una función opcional para personalizar la representación de propiedades clave
      spaces:
      Un número opcional para definir el sangrado de la salida JSON.
*/
const url = "./js/43_data.json";
let data = null;
function fetchData() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        // Analiza cadenas JSON y las convierte en objetos JavaScript.
        data = JSON.parse(xhr.responseText);
        resolve(data);
      } else {
        let msj = xhr.statusText || "No se pudo obtener los datos"
        reject(new Error(`${msj}, status: ${xhr.status}`));
      }
    };
    xhr.onerror = reject;
    xhr.send();
  });
}

const $fragment = document.createDocumentFragment()
const $ul = document.querySelector('#list-data')
fetchData()
  .then((data) => {
    console.log(data)
    data.forEach(({name, address: {street, suite, city}}) => {
      let $li = document.createElement('li')
      $li.innerHTML = `${name} -- ${city}: ${street}, ${suite}`
      $fragment.appendChild($li)
    });
    $ul.appendChild($fragment)
  })
  .catch((err) => {
    $ul.innerHTML = err
    console.error(err)
  });

let persona = [{
  nombre: 'felipe',
  apellido: 'gómez',
  edad: 25,
  lenguajes: ['javascript', 'html', 'css'],
  experiencia: true
}]
let objectToJson = JSON.stringify(persona, null, 4)
console.log(objectToJson)
