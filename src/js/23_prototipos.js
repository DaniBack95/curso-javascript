/* 
  Prototipos:
    JavaScript no esta basado en clases, 
    esta basado en prototipos, 
    los prototipos en sí son objetos, 
    son un mecanismo que permite que un 
    objeto hijo herede los artibutos y métodos
    de un objeto padre, simulando las 
    características de la programación orientada a 
    obetos.
    Se usan funciones constructoras y a partir 
    de ellas se crean instancias.

  La programación orientada a objetos tiene tres 
  conceptos fundamentales, los cuales también se
  aplican a los prototipos:
  
  Clases:
    Son el molde, la plantilla, 
    es la parte intangible(lo abstracto),
    apartir de la cual se va a crear los 
    objetos tangibles. 
  Objetos:
    Son la instancia de una clase, 
    es la representación tangible 
    de la clase, estos poseen:
    Atributos:
      Características, propidades del 
      objeto, son variables.
    Métodos:
      Acciones que pueden hacer el 
      objeto, son verbos, funciones

    Funciones prototípicas:
    Son funciones que se agregan al prototipo 
    de un objeto.
    Permiten agregar o modificar métodos en el prototipo del objeto en cualquier momento, lo que facilita la actualización y el mantenimiento del código. 
    Se recominda su uso por razones de eficiencia y rendimiento, 
    ya que al crear un nuevo objeto a partir de una función 
    constructora las propiedades y métodos se crearn nuevamente
    para cada objeto instanciado.
 */

{
  function Vehiculo(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;

    this.mostarMarca = function () {
      console.log(this.marca);
    };
    this.acelerar = function () {
      console.log("Máxima aceleración, 200Km/h");
    };
    this.frenar = function () {
      console.log("Activación ABS. Frenando...");
    };
  }

  const ford = new Vehiculo("ford", 2024);
  const mazda = new Vehiculo("mazda", 2020)
  ford.mostarMarca();
  ford.acelerar();
  console.log(ford);
  console.log(mazda)
}

{
  /* funciones prototípicas */
  function Vehiculo(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  Vehiculo.prototype.mostarMarca = function () {
    console.log(this.marca)
  }
  Vehiculo.prototype.mostarModelo = function () {
    console.log(this.modelo)
  }
  Vehiculo.prototype.acelerar = function (km = 0) {
    console.log(`Máxima aceleración, ${km}k/h`)
  }


  const audi = new Vehiculo('audi', 2023)
  console.log(audi)
  audi.mostarMarca()
  audi.acelerar(250)

  const bmw = new Vehiculo("BMW", 2022)
  console.log(bmw)
  bmw.mostarMarca()
  bmw.mostarModelo()
  bmw.acelerar(300)
}
