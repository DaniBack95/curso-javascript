/* 
  spread operator:
  Este operador permite descomponer objetos 
  iterables cómo sitrngs, arrays y objetos 
  iterables, es decir que permite
  obtener cada valor de manera independiente, esto 
  sirve para poder pasarlos 
  como argumentos y para hacer una copia 
  por valor y no por referencia, pero es una copia
  poco profunda de estos objetos
*/

{
  function sumar(n1, n2, n3){
    return n1 + n2 + n3
  }
  const numbers = [3,6,9]
  let result = sumar(...numbers)
  console.log(result)
}
{
  function sumar(n1,n2,...n){
    let operandos = [n1, n2,...n]
    let sum = 0;
    for(let num of operandos) {
      sum += num
    }
    console.log(operandos)
    console.log(sum)
  }
  sumar(3,6,9)
  const numbers = [3,6,9,12,16]
  sumar(...numbers)
}
{
  const texto = "Hola programador"
  const letters = [...texto]
  console.log(texto)
  console.log({letters})
  for (let letter of letters) {
    console.log(letter)
  }

  {
    const user = {
      nombre: "daniel",
      edad: 25
    }
    console.log(user)
    const user2 = {...user}
    console.log(user2)
    user2.nombre = "Juan"
    user2.ciudad = "Bogotá"
    console.log(user2)
    console.log(user)
  }
}