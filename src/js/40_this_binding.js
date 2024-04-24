/* 
This: tipos de binding = enlazamiento

  1.Default binding = invocación directa
      ocurre cuando se invoca directamente 
      la función,  el valor de this es el objeto global.
  2.Implicit binding = invocación de método
      Ocurre cuando se llama a un método de un objeto. 
      Dentro del método, this hace referencia al 
      objeto que contiene el método.
  3.Explicit binding = invocación indirecta
      se usa los métodos call, aply y bind para 
      establecer de manera explícita el valor de this
      en el momento de la llamada de la función 
      bin hace que el valor de this no pueda ser cambiado 
      por call o aply
  4.New binding = instancia de objetos
      Este enlazamiento ocurre cuando se intancia 
      una clase, this toma el valor de la clase
      o constructor
  5.Lexical binding: arrow functions
      Las arrow function no tienen su propio this, 
      heredan el valor de this del ámbito en 
      que fue definida/creada.

  Funciones anónimas:
    This toma el valor del objeto donde 
    es definida
  Eventos:
    This toma el valor del elemento que 
    generón el evento
  Módulos:
    This toma el valor de undefined ya que
    al usar module por defecto 
    se activa el modo strict.
*/

/* default binding */
function showThisGlobal () {
  console.log('Holas desde el ámbito global')
  console.log('this:', this)
}
showThisGlobal()

/* Implicit binding */
const pet = {
  nombre: 'michi',
  saludar(){
    console.log('miu miu, soy', this.nombre)
  }
}
pet.saludar()

/* Aqui la función queda suelta al contexto global */
let greet = pet.saludar
greet()

/* eventos: aqui this toma el contexto del elemento*/
const button = document.querySelector('#btn')
button.addEventListener('click', function(){
  console.log(this)
})

/*Explicit binding: aqui se soluciona los dos problemas
anteriores con call, aplay y bind 
call y aplay ejecutan inmediatamente la funcion con el contexto 
indicado
bind retorna la funcion con el nuevo contexto indicado, 
pero espera a que sea invocada o a que suceda el 
evento
*/
let greet2= pet.saludar.call(pet)
const goku = {
  nombre: 'goku',
  saludar(efusivo, conDespedida){
    const saludoNormal = `Hola me llamo ${this.nombre}!`
    const despedidaNormal = `Chaauu!`
    const saludo = efusivo 
      ? saludoNormal.toUpperCase()
      : saludoNormal
    const despedida = efusivo 
      ? despedidaNormal.toUpperCase()
      : despedidaNormal
    console.log(saludo)
    if(conDespedida){
      console.log(despedida)
    }
  }
}
goku.saludar(true, true)
const vegueta = {
  nombre: 'Vegueta'
}
goku.saludar.call(vegueta, true, false)
goku.saludar.call(vegueta, [true, false])

/* solucion para los enventos */
/* aqui el valor de this es undefined ya que 
en el contexto del elmento no esta definido this.nombre */
button.addEventListener('mouseover', goku.saludar)
/* lo resolvemos con bind */
button.addEventListener('mouseout', goku.saludar.bind(goku, true, true))

/* valor de this en arrow functions, hereda 
el contexto de donde fue creada */
const carro = {
  marca: 'Ford',
  motor: 'lineal',
  cilindraje: 2.5,
  acelerar: () => {
    console.log('Maxima velociad')
    console.log(this)
  },
}
carro.acelerar()
const acel = carro.acelerar
acel()
