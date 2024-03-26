/* 
  Arrow functions: 
  es una sintaxis más moderna y sencilla a 
  la hora de crear funciones de expresión.

  A estas funciones no se le aplica hoisting.
  Tieenen un return implícito.
  No tienen el object arguments.
  No se recomienda crear métodos en objetos
  con esta sintaxis debido a que afecta el contexto
  this.
  Una buena práctica es utilizar funciones tradicionales como las funciones de primer nivel y, luego, en su interior o en callbacks, utilizar funciones flecha.
*/

{
  console.log("Arrow functions");
  const saludar = () => {
    console.log("Hola mundo");
  };
  saludar();
}

{
  /* Return implícito */
  const sumar = () => 3 + 6;
  console.log(sumar());
}

{
  /* Omitir paréntesis cuando hay sólo 
  un parámetro */
  const saludar = (name) => {
    console.log("Hola, mi nombre es", name);
  };
  saludar("Jorge");
}

const padre = {
  a: function () {
    console.log(this);
  },
  b: () => {
    console.log(this);
  },
};

{
  const mascota = {
    nombre: "Spaick",
    raza: "Snaucer",
    edad: 3,
    ladrar() {
      console.log("Waoouu waaoou");
      console.log(this);
    },
    saludar: () => {
      console.log(this);
    },
  };
  mascota.ladrar();
  mascota.saludar();
}

{
  const sumar = (nums) => {
    let sum = 0;
    nums.forEach(num => sum += num);
    return sum;
  };

  const nums = [1,2,3,4,5]
  const result =  sumar(nums)
  console.log(result)
}
