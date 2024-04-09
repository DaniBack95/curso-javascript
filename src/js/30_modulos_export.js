/* 
  Módulos en JavaScript
  Los módulos en JavaScript son una característica que 
  permite organizar el código en archivos 
  independientes y reutilizables. Proporcionan una forma 
  de encapsular lógica relacionada y variables dentro 
  de un ámbito local, evitando la contaminación 
  del espacio global.

  Características principales:
  Encapsulación: El código y las variables dentro 
  de un módulo están encapsulados, lo que significa 
  que no están disponibles fuera del módulo a 
  menos que se exporten explícitamente.

  Reutilización: Los módulos pueden ser reutilizados 
  en diferentes partes de una aplicación o en 
  múltiples proyectos, lo que promueve la modularidad 
  y la mantenibilidad del código.

  Gestión de dependencias: Los módulos pueden 
  depender de otros módulos, lo que permite una 
  gestión eficiente de las dependencias y la 
  estructura de la aplicación.

  Tipos de módulos:
  Módulos de ES6 (ECMAScript 6): Introducidos en ECMAScript 6, 
  los módulos de JavaScript utilizan las palabras 
  clave import y export para importar y exportar 
  código entre archivos.

  CommonJS: Un formato de módulo ampliamente 
  utilizado en entornos de servidor, como Node.js. 
  Se basa en las funciones require y module.exports.

  AMD (Asynchronous Module Definition): Diseñado para 
  cargar módulos de forma asíncrona en a
  plicaciones web. Requiere un cargador AMD, 
  como RequireJS.

  UMD (Universal Module Definition): Un formato que 
  permite que el mismo código funcione tanto en 
  entornos de navegador como de servidor. 
  Combina las características de CommonJS y AMD.

  Ventajas de los módulos:
  Organización y estructura: Permiten 
  dividir el código en archivos más pequeños 
  y manejables.
  Reutilización: Facilitan la reutilización 
  del código en diferentes partes de una aplicación 
  o en proyectos futuros.
  Encapsulación: Ayudan a evitar la contaminación 
  del espacio global al encapsular el código y las variables.
  Gestión de dependencias: Permiten gestionar de manera 
  eficiente las dependencias entre diferentes partes de 
  una aplicación.
*/

  /* Módulo artimética */
export const PI = 3.1416
export function sumar(a, b){
    return a + b
}
export function restar(a, b){
  return a - b
}
function multiplicar(a,b){
  return a*b
}
function dividir(a,b){
  return a / b
}
export const arit = {
  multiplicar, 
  dividir
}
/* Export default
  exporta por defecto el código
  expecificado, se puede hacer directamente
  con funciones declaradas y clases, 
  con variables y constantes se hace después de 
  ser definidas.
  Solo se permite un único export default por 
  archivo.
*/
const saludo = (nombre) => {
  console.log('Hola', nombre)
}
// export default saludar
export function saludar(nombre){
  console.log('Hola', nombre)
}
export default class Perro {
  constructor({nombre, edad, raza}){
    this.nombre = nombre
    this.edad = edad
    this.raza = raza
  }
  get getNombre(){
    console.log(this.nombre)
  }
}
