const verificarExistencia = (nombreProducto) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = productos.find(
        (producto) => producto.nombre === nombreProducto
      );
      if (producto) {
        return resolve(producto);
      } else {
        return reject(new Error(`${nombreProducto}: Producto no econtrado`));
      }
    }, 1500);
  });
};

const verificarDisponibilidad = (producto) => {
  return new Promise((resolve, reject) => {
    const {cantidadDisponible} = producto
    setTimeout(()=>{
      if(cantidadDisponible > 0) {
        resolve(producto)
      } else {
        reject('Producto no disponible: existencias agotadas')
      }
    }, 1000)
  })
}

const comprar = (cantidadSeleccionada, disponible, valor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cantidadSeleccionada > disponible) {
        return reject(new Error(`La cantidad seleccionada no está disponible, existencias disponibles: ${disponible} unidades`,));
      } else {
        return resolve({
          valorTotal: valor * cantidadSeleccionada,
          cantidadSeleccionada,
        });
      }
    }, 1000);
  });
};

const productos = [
  {
    nombre: "iPhone 14 Pro Max",
    cantidadDisponible: 5,
    descripcion:
      "El último teléfono insignia de Apple, con un potente chip A16 Bionic, una impresionante pantalla Super Retina XDR y un sistema de cámara increíble.",
    precio: 5719000,
  },
  {
    nombre: "Samsung Galaxy S23 Ultra",
    cantidadDisponible: 5,
    descripcion:
      "El teléfono de gama alta de Samsung, con una pantalla grande y vibrante Dynamic AMOLED 2X, una configuración de cuatro cámaras versátiles y una batería de larga duración.",
    precio: 1199,
  },
  {
    nombre: "Google Pixel 7 Pro",
    cantidadDisponible: 8,
    descripcion:
      "El último teléfono Pixel de Google, conocido por su rendimiento excepcional de la cámara, una experiencia Android limpia e intuitiva y un potente chip Tensor.",
    precio: 899,
  },
  {
    nombre: "OnePlus 11 Pro",
    cantidadDisponible: 20,
    descripcion:
      "Un teléfono de alto rendimiento de OnePlus, que ofrece una experiencia de usuario rápida y fluida, un diseño elegante y un precio competitivo.",
    precio: 799,
  },
  {
    nombre: "Xiaomi 13 Ultra",
    cantidadDisponible: 12,
    descripcion:
      "El teléfono insignia de Xiaomi, con una pantalla AMOLED grande, un potente procesador Snapdragon 8 Gen 2 y un sistema de cámara versátil.",
    precio: 849,
  },
];

/* verificarDisponibilidad("iPhone 14 Pro Max")
  .then(({ nombre, cantidadDisponible, precio }) => {
    if (cantidadDisponible > 0) {
      console.log("Producto disponible");
      console.log(nombre);
      console.log("En stock:", cantidadDisponible, "unidades");
      console.log(precio, "COP");
      return comprar(1, cantidadDisponible, precio)
        .then(({ valorTotal, cantidad }) => {
          console.log("Unidades selecionadas:", cantidad);
          console.log("Valor a pagar:", valorTotal);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Producto no disponible, existencias agotadas");
    }
  })
  .catch((err) => console.log(err)); */
verificarExistencia("iPhone 14 Pro Max")
  .then((producto) => {
    const {nombre, precio, descripcion} = producto
    console.log(nombre)
    console.log(precio)
    console.log(descripcion)
    return verificarDisponibilidad(producto)
  })
  .then((producto) => {
    const {cantidadDisponible, precio} = producto
    console.log('En stock:', cantidadDisponible, 'unidades')
    return comprar(2, cantidadDisponible, precio )
  })
  .then(res => {
    const {cantidadSeleccionada, valorTotal} = res
    console.log('Unidades seleccionadas:', cantidadSeleccionada)
    console.log('Valor a pagar: $', valorTotal, 'COP')
  })
  .catch(err => {
    console.log(err)
  })
    
