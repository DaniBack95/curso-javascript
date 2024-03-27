function Animal (nombre, raza) {
  this.nombre = nombre
  this.raza = raza
}
Animal.prototype.saludar = function () {
  console.log("Hola mi nombre es", this.nombre)
}
const rocket = new Animal("rocket", "mapache")
console.log(Object.getPrototypeOf(rocket))

// Herencia
function Perro (nombre, raza, tamanio) {
  this.super = Animal
  this.super(nombre, raza)
  this.tamanio = tamanio
}
Perro.prototype = new Animal()
Perro.prototype.contructor = new Perro()
Perro.prototype.saludar = function (){
  console.log("Hola Soy un perro, mi nombre es", this.nombre)
}
Perro.prototype.ladrar = function () {
  console.log("Waauu Wauuufff")
}
const perro1 = new Perro("Mailo", "corcker", "mediano")
console.log(Object.getPrototypeOf(perro1))
perro1.saludar()
rocket.saludar()
perro1.ladrar()