const api = "https://jsonplaceholder.typicode.com/users"
const apiDummi = "https://jsonplaceholder.typicode.com/userss"
const apiLocal = "./js/43_data.json"
fetch(api)
  .then(res => {
    if(res.ok){
      return res.json()
    }else {
      return Promise.reject(res)
    }
  })
  .then(data =>{
    data.forEach(({id, name}) => {
      console.log(`${id}: ${name}`)
    });
  })
  .catch(err => {
    let msj = err.statusText || `Status: ${err.status}`
    console.error(`Fallo de conexión
    ${msj}`)
  })
  .finally(()=>{
    console.log("Proceso finalizado!")
  })