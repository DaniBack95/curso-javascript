/* 
  Concatenar: es unir dos cadenas de caracteres o unir una cadea de caracteres con valores de una varible 
*/
let saludo = "Hola"
let nombre = "Daniel"
let apellido = "Baracaldo"
let pais = "Colombia"

/* Concatenar con el operador "," */
console.log(saludo, "mi nombre es ", nombre, apellido)
/* Concatenar con el operador "+" */
console.log(saludo + " mi nombre es " + nombre + " " + apellido)

/* Interplación de variables es la unión de cadenas de texto con variables de forma dinámica, esto se puede hacer a través de los template strings */
console.log(`Hola, me llamo ${nombre} ${apellido}, soy de ${pais} `)
