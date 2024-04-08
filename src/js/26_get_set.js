/* 
  Métodos estáticos:
  son métodos que se pueden ejecutar desde la clase, 
  sin necesidad de instanciar o crear un objeto
*/

{
  class Animal {
    constructor({ nombre, edad }) {
      this.nombre = nombre;
      this.edad = edad;
    }

    comer() {
      console.log(`${this.nombre} está comiendo`);
    }
    dormi() {
      console.log(`${this.nombre} esta durmiendo`);
    }
  }

  class Perro extends Animal {
    constructor({ nombre, edad, tamanio }) {
      super(nombre, edad);
      this.tamanio = tamanio;
    }

    static queSoy() {
      console.log(
        "soy un mamífero carnívoro de la familia de los cánidos, hago parte de una especie del género Canis."
      );
    }

    ladrar() {
      console.log(this.nombre, "Guaff guaauuff");
    }
  }

  Perro.queSoy();
}

/* 
  Get y set:
  Son métodos, get permite obtener el valor
  de un atributo del objeto.
  set permite modificar o establecer
  el valor de un atributo
*/

{
  class Animal {
    constructor({ nombre, edad }) {
      this.nombre = nombre;
      this.edad = edad;
    }

    comer() {
      console.log(`${this.nombre} está comiendo`);
    }
    dormir() {
      console.log(`${this.nombre} esta durmiendo`);
    }
  }

  class Perro extends Animal {
    constructor({ nombre, edad, tamanio }) {
      super(nombre, edad);
      this.tamanio = tamanio;
      this.raza = null;
    }
    static queSoy() {
      console.log(
        "soy un mamífero carnívoro de la familia de los cánidos, hago parte de una especie del género Canis."
      );
    }
    ladrar() {
      console.log(this.nombre, "Guaff guaauuff");
    }
    get getRaza() {
      return this.raza
    }
    set setRaza(raza){
      this.raza = raza
    }
  }
  const draco = new Perro({
    nombre: 'Draco',
    edad: 2,
    tamanio: 'mediano'
  })
  console.log(draco.getRaza)
  draco.setRaza = 'Labrador'
  console.log(draco.getRaza)
}
