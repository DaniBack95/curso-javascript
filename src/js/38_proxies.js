/* 
  Proxies  
    Los proxies en JavaScript son objetos especiales que 
    permiten personalizar el comportamiento fundamental 
    de otro objeto (llamado "objetivo") interceptando 
    operaciones básicas en él, como lecturas de propiedades, 
    escrituras de propiedades, eliminaciones de propiedades, 
    entre otras. 
    Esto se logra definiendo un conjunto de métodos 
    llamados "manejadores" en el proxy que se invocan 
    cuando ocurren estas operaciones en el objeto objetivo.

  Los proxies se usan para:
    Validación de datos: 
      Pueden usarse para validar y filtrar 
      datos antes de permitir que se almacenen 
      en un objeto objetivo.
    Logging: 
      Pueden utilizarse para registrar 
      y monitorear las operaciones que se realizan 
      en un objeto objetivo.
    Seguridad: 
      Pueden utilizarse para implementar 
      controles de acceso y restricciones de seguridad 
      en un objeto objetivo.
    Mejora de la sintaxis: 
      Pueden utilizarse para agregar una capa 
      de abstracción y mejorar la sintaxis de acceso 
      a propiedades de un objeto.  
    Memoización: 
      Se pueden utilizar para almacenar los 
      resultados de cálculos costosos y reutilizarlos 
      en lugar de recalcularlos cada vez

  ¿Cómo funcionan los proxies?
    Los proxies se crean utilizando la clase Proxy 
    de JavaScript. Esta clase requiere dos argumentos:

    Target: El objeto original que queremos interceptar.
    Handler: Un objeto que define las trampas que 
    se activarán para interceptar las operaciones 
    sobre el objeto original.

    Las trampas son funciones especiales que se 
    invocan cuando se realiza una operación sobre el 
    objeto original. 
    Algunas de las trampas más comunes incluyen:

    get: 
      Se invoca cuando se accede a una 
      propiedad del objeto original.
    set: 
      Se invoca cuando se asigna un valor 
      a una propiedad del objeto original.
    has: 
      Se invoca cuando se comprueba si una 
      propiedad existe en el objeto original.
    deleteProperty: 
      Se invoca cuando se elimina una 
      propiedad del objeto original.
    apply: 
      Se invoca cuando se invoca un método 
      del objeto original.
    construct: 
      Se invoca cuando se crea una nueva 
      instancia del objeto original.
*/
const persona = {
  nombre: null, 
  edad: null, 
  ciudad: null,
}
const handlerProxyPersona = {
  set(object, property, value){
    if(property === "edad" ) {
      if(!Number.isInteger(value) || value < 0){
        throw new TypeError('La edad ingresada no es válida')
      }
    }
    object[property] = value
    return object
  }
}
const personaProxy = new Proxy(persona, handlerProxyPersona)
personaProxy.nombre = 'Lorena'
personaProxy.edad = 27
personaProxy.ciudad = 'Bogotá'
console.log({persona})
console.log({personaProxy})

let nombres = ['juan', 'MiGueL', 'Pedro']
let proxyNombres = new Proxy(nombres, {
  get(obj, prop){
    return (
      prop === 'length' 
        ? obj[prop] 
        : obj[prop].toUpperCase())
  },
  set(obj, prop, value){
    if(typeof value === 'string' && prop === 'add') {
      return obj.push(value)
    }
  }
})
proxyNombres.add = 'Mari'
for (let i = 0; i < proxyNombres.length; i++) {
  console.log(proxyNombres[i])
}




