/* 
  Parámetros Rest:
  Las funciones pueden recibir argumentos inifinitos,
  puede recibirlos aún cuando estos no se hayan definido 
  en el listado de parámetros, pero solo 
  trabajará con los que fueron definidos.
  Para tener en cuenta el resto de parámetros 
  se antepone tres puntos, esto lo que hará es 
  reunir el resto de los parámetros en un array.
*/
{
  console.log("***** Parámetros rest ... *****")
  function sumAll(...nums) {
    let sum = 0;
    for (const element of nums) {
      sum += element
    }
    return sum
  }
  
  console.log(sumAll)
  console.log("const result = sumAll(1,2,3,4,5)")
  const result = sumAll(1,2,3,4,5)
  console.log(result)

  function concat(separator, ...strings) {
    return strings.join(separator)
  }
  console.log(concat)
  console.log('let text = concat(" ", "manzana", "kiwi", "feijoa")')
  let text = concat(" ", "manzana", "kiwi", "feijoa")
  console.log(text)
  console.log('let text2 = concat("-", 1,2,3,4,5,6,7)')
  let text2 = concat("-", 1,2,3,4,5,6,7)
  console.log(text2)
}