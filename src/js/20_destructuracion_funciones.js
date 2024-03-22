console.log("Destructuración en funciones")
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

{
  function infoMascota ({nombre, edad}) {
    console.log("El nombre de la moascota es", nombre)
    console.log("Tiene", edad, "años")
  }
  infoMascota(mascota)
}

{
  function nombresHermanos({hermanos}) {
    let nombres = []
    for (let hermano of hermanos) {
      nombres.push(hermano.nombre)
    }
    return nombres;
  }

  let hermanosLoki = nombresHermanos(mascota)
  console.log(hermanosLoki.join())

}