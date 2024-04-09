/* 
  Temporizadores:
  Los temporizadores en JavaScript son funciones 
  que permiten ejecutar código después de un período 
  de tiempo determinado. Son herramientas esenciales 
  para crear aplicaciones interactivas y dinámicas.

  Tipos de temporizadores:
  setTimeout(): Ejecuta una función una sola vez 
  después de un período de tiempo especificado.
  setInterval(): Ejecuta una función de forma 
  repetida a intervalos regulares.

  Funciones adicionales:
  clearTimeout(): Cancela un temporizador setTimeout().
  clearInterval(): Cancela un temporizador setInterval().
  Para usar estas funciones clear, se debe guardar el 
  temporizador en una varible
*/
let milisegundos = 3000
console.log('Set Timeout')
setTimeout(() => {
  console.log(`Saludando a los ${milisegundos / 1000} segundos...`)
}, milisegundos);
let timeOut = setTimeout(()=>{
  console.log('Usando el clear set timeout')
}, milisegundos)
clearTimeout(timeOut)
let num=0
let interval = setInterval(() => {
  num++
  console.log(num)
  if(num == 10 ) {
    clearInterval(interval)
  }
}, 1000);