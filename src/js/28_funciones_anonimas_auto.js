/* Funciones anónimas:
  Las funciones anónimas autoejecutables son funciones 
  que se definen y se ejecutan automáticamente 
  en el mismo momento. Son útiles para encapsular 
  código, evitar la contaminación del espacio 
  de nombres global y modularizar el código.
  A día de hoy casi no se suele usar, 
  gracias a la implementación de módulos en 
  ES6
*/
// Versión clásica
(function(a, b){
  console.log(a + b)
})(3, 9)
// Versión unaria
+function(a, b){
  console.log(a * b)
}(3, 9)
//Versión de facebook
!function(a, b){
  console.log(a**b)
}(3, 9)