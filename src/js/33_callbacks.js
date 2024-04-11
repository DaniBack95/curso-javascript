/* 
  Funciones callback:
  En JavaScript, una callback es una función que se 
  pasa como argumento a otra función. 
  La función receptora "llama de vuelta" 
  a la función callback en algún momento posterior, 
  generalmente cuando se ha completado una tarea 
  o se ha producido un evento
*/
function sumar(a,b,callback){
  let result = a + b
  callback(result)
}
function confirmar(restult) {
  console.log('se ha completado la operación!')
  console.log('resultado: ', restult)
}
sumar(3,9, confirmar)
function multi(a,b,callback){
  let result = a * b
  console.log('Realizando operación')
  setTimeout(() => {
    callback(result)
  }, 2000);
}
multi(3, 9, (result)=> {
  console.log('resultado:', result)
})
let num = 0
function cuadrado(value, callback){
  let res = value * value
  num++
  setTimeout(() => {
    callback(value, res)
  }, 3000);
}
let intervalCuadrados = setInterval(() => {
  cuadrado(num, (val1, val2)=>{
    console.log(val1, val2)
  })
  if(num > 10) {
    clearInterval(intervalCuadrados)
  }
}, 1000);