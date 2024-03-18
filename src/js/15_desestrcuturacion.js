/* 
  Des-estructuración:
  Es una sintaxis que permite dividir la estructura 
  de un array/objeto, 
  esto permite extraer valores de un array  o propiedades
  de un objeto en variables de forma dinámica.
*/

{
  console.log("***** Desestructuración de arreglos ******");
  const numbers = [1, 2, 3, 4, 5];
  const [a, b, c, d] = numbers;
  console.log(a, b, c, d);
}

{
  console.log("Intercambio de valor usando desestructuración");
  let fruit1 = "manazana";
  let fruit2 = "kiwi";
  console.log(`fruta 1 = ${fruit1}, fruta 2 = ${fruit2}`);
  [fruit2, fruit1] = [fruit1, fruit2];
  console.log(`fruta 1 = ${fruit1}, fruta 2 = ${fruit2}`);
}

{
  console.log("***** Desestructuración con objetos*****");
  /* 
    La desestructuración en objetos 
    las varialbes deben  tener los mismos nombres
    de las propiedades del objeto
  */
  const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Bogotá",
  };

  console.log(persona);
  const { nombre, edad, ciudad } = persona;
  console.log("nombre: ", nombre);
  console.log("edad: ", edad);
  console.log("ciudad: ", ciudad);
}

{
  console.log(
    "****** Desestructuración de objeto con asignación de variables con nuevos nombres *****"
  );
  const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Bogotá",
  };
  const { nombre: namme, edad: age, ciudad: city } = persona;
  console.log("namme:", namme);
  console.log("age:", age);
  console.log("city:", city);
}

/* 
  Se puede poner valores predeterminados cuando
la propiedad no existe y esta retorna undefined, entonces 
podemos asignarle un valor que no sea undefined 
*/
{
  console.log(
    "****** Desestructuración de objeto con valores predeterminados *****"
  );
  const persona = {
    nombre: "Juan",
    edad: 25,
  };
  const { nombre: namme, edad: age, ciudad: city} = persona;
  console.log("namme:", namme);
  console.log("age:", age);
  console.log("sin valor predeterminado")
  console.log("city:", city);
}

{
  console.log(
    "****** Desestructuración de objeto con valores predeterminados *****"
  );
  const persona = {
    nombre: "Juan",
    edad: 25,
  };
  const { nombre: namme, edad: age, ciudad: city = "desconocida"} = persona;
  console.log("namme:", namme);
  console.log("age:", age);
  console.log("con valor predeterminado")
  console.log("city:", city);
}