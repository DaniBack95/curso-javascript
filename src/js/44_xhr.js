/* 
  XMLHttpRequest(XHR)
    es una interfaz JavaScript que permite realizar 
    solicitudes HTTP asíncronas a un servidor. 
    Esto significa que una página web puede enviar y 
    recibir datos sin necesidad de recargarse por 
    completo, mejorando la experiencia del usuario y la eficiencia.
*/
const api = "https://jsonplaceholder.typicode.com/users";
const apiDummi = "http://direccion.invalida";
let json = null;
const getData = (url) => {
  return new Promise((resolve, reject) => {
    // instancia del objeto XHR
    const xhr = new XMLHttpRequest();
    /* 
    confiugración de la solicitud HTTP
    antes de ser enviada, 
    recibe como parámetros:
    Método HTTP(GET, POST, PUT, DELET, etc...)
    La ULR del servidor o recurso a acceder
    Un BOOLEANO, para establecer si la sincronización es
    asíncrona o síncrona, por defecto es asíncrona
    
    */
    xhr.open("GET", url);
    // Evento del estado de la solicitud
    xhr.addEventListener("readystatechange", (e) => {
      /* 
      estado actual del proceso de solicitud de XHR
      */
      if (xhr.readyState === 4) {
        /* 
        código de estdo HTTP de la respuesta del servidor: 
        100/200/300/400/500
        */
        if (xhr.status === 200) {
          json = JSON.parse(xhr.response);
          resolve(json);
        } else {
          // activación de evento en caso de error
          xhr.addEventListener("error", () => {
            let msj = xhr.statusText || `Status: ${xhr.status}`;
            reject(new Error(`Fallo de red, ${msj}`));
          });
        }
      }
    });
    /* 
    Activa la solicitud real HTTP, 
    envía los datos(si los hay) a la URL espcificada(servidor)
    */
    xhr.send();
  });
};
//Usando promesas
/* getData(api)
  .then((users) => {
    users.forEach(({id, name}) => {
      console.log(`${id}: ${name}`)
    });
  })
  .catch(err => {
    console.error(err)
  }) */
// Usando async/await
async function fethData() {
  try {
    const data = await getData(api);
    data.forEach(({ id, name }) => {
      console.log(`${id}: ${name}`);
    });
  } catch (err) {
    console.error(err);
  }
}
fethData();
