/* 
  Objetos literales:
  Es una sintaxis más moderna y cómoda
  para asignar propiedades y métodos a un 
  objeto
*/

{
  console.log("***** Objeto literal *****")

  let carro = {
    marca: "Ford",
    linea: "Ranger",
    modelo: 2024,
    motor: "4 en línea Ford 2.0L Panther Turbo",
    pasajeros: 5,
    cilindrada: 2.0,
    potencia: "168 hp",

    abs(){
      console.log("Activación de frenado ABS")
    },
    aceleracion(){
      console.log("Máxima aceleración a 180Km/h")
    }
  }

  console.log(carro)
  carro.aceleracion()
  carro.abs()

  for (let key in carro) {
    console.log(key)
  }
  console.log('aceleracion' in carro)
}

/* 
  También evita repetir los nombres de las 
  variables(propiedades) y asi 
  asignar los valores directamente
*/
{
  function createUser(name, age, city, msj){
    return {
      name, 
      age, 
      city,
      msj,
    }
  }

  let userOne = createUser(
    "Daniel", 
    25,
    "Bogotá",
    function() {
      console.log("Hola mi nombre es ", this.name)
    }
  )

  console.log(userOne)
  userOne.msj()
}