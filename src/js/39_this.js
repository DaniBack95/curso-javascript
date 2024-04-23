/* 
This
  la palabra clave this es una referencia 
  al objeto actual en el contexto de la 
  ejecución de código. Su valor cambia dependiendo de 
  cómo y dónde se utiliza. 

Cómo funciona?
  El valor de this se establece en tiempo de ejecución, 
  según cómo se llama a la función:

  En los métodos de un objeto, this se refiere al 
  objeto que invoca el método.

  En las funciones normales, el valor de this 
  depende de cómo se llama a la función. 
  Puede ser el objeto global (window en un navegador) o 
  undefined en el modo estricto (strict mode).

  En los constructores, this se refiere a la 
  nueva instancia del objeto que se está creando.

  En los eventos de los elementos del DOM, 
  this se refiere al elemento que activó el evento.
*/

/* valor de this en el modo estricto debido al uso de modules */
console.log(this)

/* valor de this cuando se invoca un objeto */
const persona = {
  nombre: 'Juan',
  saludar() {
    console.log('Mi nombres es:', this.nombre)
  }
}
persona.saludar()

/* Aqui se genera un error debido a que la varible 
greet hace referencia al contexto global, y en este caso this
tiene como valor undefined */
/* const greet = persona.saludar
greet() */

/* valor de this cuando se instancia un objeto */
class Humano {
  constructor(nombre){
    this.nombre = nombre
  }
  showNombre(){
    console.log('nombre:', this.nombre)
  }
}
const humano1 = new Humano('Tomás');
humano1.showNombre()

/* this en el evento del dom */
const button = document.querySelector('#btn')
button.addEventListener('mouseover', function(){
  console.log(this)
})