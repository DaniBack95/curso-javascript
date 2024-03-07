/* var, tiene alcance global */
console.log("##### Usando Var #####")
var namme = "Daniel"
console.log(`Valor de var nombre antes del bloque: ${namme}`)
{
  var namme = "Juan"
  console.log(`Valor de var nombre dentro del bloque ${namme}`)
}
console.log(`Valor de var nombre después del bloque: ${namme}`)

/* let, tiene alcance de bloque */
console.log("##### Usando Let #####")
let music = "Clasica"
console.log(`Valor de let music antes del bloque: ${music}`)
{
  let music = "Pop"
console.log(`Valor de let music dentro del bloque: ${music}`)
}
console.log(`Valor de let music después del bloque: ${music}`)
