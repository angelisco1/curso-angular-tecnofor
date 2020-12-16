function getUsuarios() {
  const promesa = fetch('https://jsonplaceholder.typicode.com/users');
  console.log({promesa});
  return promesa;
}

getUsuarios()
  .then((resp) => {
    console.log({resp});
    return resp.json()
  })
  .then(datos => {
    console.log({datos});
  });


function getMensaje() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('El canario está en la jaula...')
      reject('No te lo digo...')
    }, 2000)
  })
}

getMensaje()
  .then((msg) => {
    console.log({msg});
  })
  .catch(err => {
    console.log({err});
  })