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
function formatearNumeros (num) {
  return num.toLocaleString(
    'es-ES', 
    { style: 'decimal', 
    minimumFractionDigits: 0, 
    maximumFractionDigits: 3 
  })
}
const verificarExistencia = (nombreProducto) => {
  return new Promise((resolve, reject) => {
    const producto = productos.find((producto) => {
      return producto.nombre === nombreProducto;
    });
    if (producto) {
      resolve(producto);
    } else {
      reject(new Error(`El producto ${nombreProducto} no existe`));
    }
  });
};
const verificarDisponibilidad = (cantidadDisponible) => {
  return new Promise((resolve, reject) => {
    if (cantidadDisponible > 0) {
      resolve(true);
    } else {
      reject("Producto no disponible, existencias agotadas");
    }
  });
};
const comprar = (cantidadSeleccionada, cantidadDisponible, precio) => {
  return new Promise((resolve, reject) => {
      if(cantidadSeleccionada > cantidadDisponible) {
        reject(new Error(`La cantidad seleccionada no disponible`))
      }else{
        let valorTotal = cantidadSeleccionada * precio
        resolve({valorTotal, cantidadSeleccionada})
      }
  })
}
(async function () {
  try {
    const {
      nombre, 
      descripcion, 
      cantidadDisponible,
      precio} = await verificarExistencia(
      "iPhone 14 Pro Max"
    );
    console.log(nombre);
    console.log(descripcion)
    const productoDisponible = await verificarDisponibilidad(cantidadDisponible)
    if(productoDisponible){
      console.log(`En stock: ${cantidadDisponible} unidades`)
      let precioFormat = formatearNumeros(precio)
      console.log(`$ ${precioFormat} COP`)
    }
    const resultadoCompra = await comprar(2, cantidadDisponible, precio)
    console.log(`Cantidad: ${resultadoCompra.cantidadSeleccionada}`)
    let valorTotalFormateado = formatearNumeros(resultadoCompra.valorTotal)
    console.log(`Total: ${valorTotalFormateado}`)
  } catch (error) {
    console.log(error);
  }
})();
