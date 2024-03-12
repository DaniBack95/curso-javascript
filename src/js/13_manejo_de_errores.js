/* 
  Try catch finally:
  Es como un condicional if else, se usa
  para gestionar los errores, 
  ejecuta un código en su primer
  bloque, lo evalua (try) y si este encuentra un error
  pasa al segundo bloque (catch) donde se 
  captura el error lanzado desde el try, el catch 
  retorna un objeto del error, las propiedades
  de este error son:
    namme
    message
    stack
  Cabe destacar que esta sentencia maneja
  errores en tiempo de ejecución, 
  código que entiende el motor de javascript, 
  más no errores de sintaxis o que no entiende
  el motor de JS.
  por útimo tenemos el bloque finally, que se 
  ejecuta siempre al final de las dos sentencias
  anteiores, se ejecuta sin importar si se 
  capturó un error. Se puede usar para liberar 
  recursos o ejecutar código de limpieza.
*/
{
  console.log("***** Sentencia try catch *****");
  try {
    console.log("dentro del try, sin erorres");
  } catch (error) {
    console.log("error en el try", error);
  } finally {
    console.log("Hola, ejecutandome desde el finally");
  }

  console.log("***** Try catch con error *****")
  try {
    console.log("Hola, estoy en otro try");
    miArray;
  } catch (error) {
    console.log("Error capturado en el try:")
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
  } finally {
    console.log("Hola, ejecutandome desde el finally");
  }
}

// simulando error de fetching de datos
{
  console.log("***** Simulando un error de fetching de datos *****")
  // const json = '{ "name":"John", "age": 30}';
  const json = '{ json:roto }';

  try {
    let user = JSON.parse(json)
    console.log(user.name)
  } catch(err) {
    console.log("Lo sentimos ha ocurrido un error en los datos")
    /* console.log(err.name)
    console.log(err.message) */
    console.warn(err)
  }
}
