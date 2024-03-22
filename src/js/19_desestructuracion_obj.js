console.log("Destructuración objetos")
{
  const mascota = {
    nombre: "Loki",
    edad: 2,
    sexo: "macho", 
  }
  const {nombre, edad, sexo, hermanos = false} = mascota
  console.log(nombre)
  console.log(edad)
  console.log(sexo)
  console.log(hermanos)
}

{
  const mascota = {
    nombre: "Loki",
    edad: 2,
    sexo: "macho", 
    hermanos: [
      {nombre: "Thor"},
      {nombre: "Snoopy"},
    ],
  };

  const { hermanos: hermanosLoki} = mascota
  console.log(hermanosLoki)
}

{
  const mascota = {
    nombre: "Loki",
    edad: 2,
    sexo: "macho", 
    hermanos: [
      {
        nombre: "Thor",
        edad: 1,
      },
      {nombre: "Snoopy"},
    ],
  };

  const { hermanos: hermanosLoki, ...restData} = mascota
  for (let key in restData) {
    console.log(`${key}: ${restData[key]}`)
  }

  for (let hermano of hermanosLoki) {
    for (let key in hermano) {
      console.log(key, hermano[key])
    }
  }
} 

{
  const mascota = {
    nombre: "Loki",
    edad: 2,
    sexo: "macho", 
    hermanos: [
      {
        nombre: "Thor",
        edad: 1,
      },
      {nombre: "Snoopy"},
    ],
  };

  const {hermanos: hermanosLoki} = mascota
  // const nombresHermanos = Array.isArray(hermanosLoki) ? [] : "desconocidos"
  for (let hermano of hermanosLoki) {
    let idHermano = hermanosLoki.indexOf(hermano)
    idHermano += 1;
    console.log(`Hermano ${idHermano}: ${hermano.nombre}`)
  }
  
}