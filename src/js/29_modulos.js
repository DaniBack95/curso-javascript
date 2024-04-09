import Perro, { sumar, restar, PI, arit, saludar } from "./30_modulos_export"; 
console.log(PI)
let resultSum = sumar(3, 6)
console.log(resultSum)
let resultRest = restar(12, 9)
console.log(resultRest)
let resulMulti = arit.multiplicar(3,9)
console.log(resulMulti)
saludar('Juan')
const perro1 = new Perro({nombre:'Chimuelo', edad: 1, raza:'ciberiano'});
perro1.getNombre