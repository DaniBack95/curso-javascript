/* 
  const, crea varible que no permite cambiar el valor de la referencia de la memoraia a la cual esta apuntando.
*/
const PI = 3.1416
console.log("##### Const #####")
console.log(`Mostrando el valor de la constante PI: ${PI}`)

/* constante con una estrucutra compuesta: objeto */
const user = {
  name: 'daniel', 
  edad: '28'
}
console.log("***** Mostrando el objeto User inicial *****")
console.log(user)
user.addres = 'calle 52 sur'
console.log("***** Mostrando el objeto User modificado *****")
console.log(user)

/* constante con una estrucutra compuesta: arreglo */
const colores = ['amarillo', 'azul', 'rojo']
console.log("***** Mostrando el array Colores inicial *****")
console.log(colores)
colores.push('violeta')
console.log("***** Mostrando el array Colores modificado *****")
console.log(colores)


