/* 
  Break: es una directiva que es usada en bucles y estructuras de control: while, do while, for, switch. Esta directiva lo que hace es romper con el bucle o la estructura, forzando su salida, en resumen detiene el bucle/estructura
*/

console.log("***** Break *****");
{
  console.log("El bucle imprime los numeros del 1 al 10");
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  console.log("El bucle se detiene cuando el valor de i == 5");
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
    console.log(i);
  }
}

/* 
  Continue: Esta directiva lo que hace es detener el bucle pero no de manera completa, detiene la la iteración actual y salta(continua) con la siguiente.
*/
console.log("***** Continue *****");
{
  console.log("El bucle imprime todas las vocales");
  let vocales = ["a", "e", "i", "o", "u"];
  for (let v = 0; v < vocales.length; v++) {
    console.log(vocales[v]);
  }

  {
    console.log(
      "El bucle imprime las vocales omitiendo la cuarta vocal, en este caso la 'o'"
    );
    let vocales = ["a", "e", "i", "o", "u"];
    for (let v = 0; v < vocales.length; v++) {
      if (v == 3) {
        continue;
      } else {
        console.log(vocales[v]);
      }
    }
  }
}

/* 
  Etiquetas: Las etiquetas de bucles son indetificadores que se usan para 
  tener un mayor control de estos, especialmente para bucles anidados, lo que permite romper con bucles internos para luego continuar con bulces externos.
  Se puede usar tanto con break como con continue
*/
{
  console.log("***** Etiquetas de bucles *****");
  console.log("Prueba 1: ");
  const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let target = 5;
  let found = false;
  let coordinates = null;

  searchTarget: for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === target) {
        found = true;
        coordinates = [i, j];
        break searchTarget;
      }
    }
    console.log(matriz[i]);
  }

  if (found) {
    console.log(
      "Elemento encontrado en la matriz, esta en las siguientes coordenadas: ",
      coordinates
    );
  } else {
    console.log("Elemento no encontrado en la matriz");
  }
}

{
  console.log("Prueba 2: ");
  const matriz = [
    [1, 2, 5],
    [4, 3, 6],
    [7, 8, 9],
  ];

  let target = 5;
  let found = false;
  let coordinates = null;

  searchTarget: for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === target) {
        found = true;
        coordinates = [i, j];
        break searchTarget;
      }
    }
    console.log(matriz[i]);
  }

  if (found) {
    console.log(
      "Elemento encontrado en la matriz, esta en las siguientes coordenadas: ",
      coordinates
    );
  } else {
    console.log("Elemento no encontrado en la matriz");
  }
}

{
  console.log("Prueba 3: ");
  const matriz = [
    [1, 2, 3],
    [4, 7, 6],
    [5, 8, 9],
  ];

  let target = 5;
  let found = false;
  let coordinates = null;

  searchTarget: for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === target) {
        found = true;
        coordinates = [i, j];
        break searchTarget;
      }
    }
    console.log(matriz[i]);
  }

  if (found) {
    console.log(
      "Elemento encontrado en la matriz, esta en las siguientes coordenadas: ",
      coordinates
    );
  } else {
    console.log("Elemento no encontrado en la matriz");
  }
}

{
  console.log("Prueba 4: ");
  const matriz = [
    [1, 2, 3],
    [4, 3, 6],
    [7, 8, 9],
  ];

  let target = 5;
  let found = false;
  let coordinates = null;

  searchTarget: for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === target) {
        found = true;
        coordinates = [i, j];
        break searchTarget;
      }
    }
    console.log(matriz[i]);
  }

  if (found) {
    console.log(
      "Elemento encontrado en la matriz, esta en las siguientes coordenadas: ",
      coordinates
    );
  } else {
    console.log("Elemento no encontrado en la matriz");
  }
}