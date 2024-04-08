/* 
  Clases:
  Es una sintaxis que ayuda a 
  crear de manera más fácil
  y eficiente funciones constructoras
  y prototípicas
*/

class Person {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log("Hola soy una persona, me llamo", this.nombre);
  }
  mostarNombre() {
    console.log(this.nombre);
  }
}

const daniel = new Person("Daniel", 20);
console.log(daniel);
daniel.saludar();

/* Herencia */
class Student extends Person {
  constructor(nombre, edad, activo) {
    super(nombre, edad);
    this.activo = activo;
    this.cursosAprobados = [];
  }
  saludar() {
    console.log("Hola soy estudiante, me llamos", this.nombre);
  }
  aprobarCursos(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
  mostarCursos() {
    console.log("***Cursos Aprobados ***");
    for (let curso of this.cursosAprobados) {
      console.log(curso);
    }
  }
}

const andrea = new Student("Andrea", 25, true);
console.log(andrea);
andrea.saludar();
andrea.aprobarCursos("Curso de HTML");
andrea.aprobarCursos("Cursos de CSS");
andrea.aprobarCursos("Curso de JavaScript");
andrea.mostarCursos();
andrea.mostarNombre();
daniel.saludar();

class Banda {
  constructor({ nombre, generos = [] }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }
  agregarIntegrante(integranteNuevo) {
    // Tu código aquí 👈
    let instrumenoNuevo =
      integranteNuevo.instrumento === "Batería" ? true : false;
    let bateriaExistente = this.integrantes.some((integrante) => {
      return integrante.instrumento === "Batería";
    });
    if (instrumenoNuevo != bateriaExistente) {
      this.integrantes.push(integranteNuevo);
      console.log("Integrante agregado a la banda");
    } else {
      console.log("Ya hay un baterista en la banda!");
    }
  }
}
//Crear clase Integrante
class Integrante {
  // Tu código aquí 👈
  constructor({ nombre, instrumento }) {
    (this.nombre = nombre), (this.instrumento = instrumento);
  }
}

const banda1 = new Banda({
  nombre: "Fruto del madero",
  generos: ["pop", "sacra", "gospel"],
});
const inte1Banda1 = new Integrante({
  nombre: "Andrea",
  instrumento: "Batería",
});
const inte2Banda1 = new Integrante({
  nombre: "Daniel",
  instrumento: "Piano",
});
banda1.agregarIntegrante(inte1Banda1);
banda1.agregarIntegrante(inte2Banda1);
console.log(banda1);
