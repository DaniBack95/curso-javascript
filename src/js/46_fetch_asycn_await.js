const api = "https://jsonplaceholder.typicode.com/users";
async function getData(url){
  try {
    let response = await fetch(url)
    const {status, statusText, ok} = response
    if(ok){
      return response.json()
    }else {
      let msj = statusText || `Status: ${status}`
      throw new Error(`${msj}`);
    }
  } catch (error) {
    throw new Error(`Error de conexión: ${error.message}`);
  }
}
getData(api)
  .then(users => {
    users.forEach(user => {
      const {id, name} = user
      console.log(`${id}: ${name}`)
    });
  })
  .catch(err => {
    console.error(err.message)
  })