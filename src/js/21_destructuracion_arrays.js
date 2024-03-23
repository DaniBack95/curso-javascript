console.log("Destructuración en arrays")
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
  habilidades: ["Correr", "Ladrar"]
};

{
  const {habilidades:[habilidad1, habilidad2]} = mascota
  console.log(habilidad1)
  console.log(habilidad2)
}

{
  function sumar([num1, num2]) {
    console.log(num1 + num2)
  }

  let nums = [3, 6]
  sumar(nums)
}

{
  function sumar([num1 = 0, num2 = 0] = []) {
    console.log(num1 + num2)
  }
  sumar()
}

{
  function sumar([num1 = 0, num2 = 0] = []) {
    console.log(num1 + num2)
  }
  sumar()
}

{
  function sumar([num1 = 0, num2 = 0, ...restNums] = []) {
    let result = num1 + num2
    for (let n of restNums) {
      result += n
    }
    console.log(result)
  }
  const nums = [3, 6, 9, 12, 15]
  sumar(nums)
}