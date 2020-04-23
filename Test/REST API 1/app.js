const promise = fetch('https://api.ipify.org');

promise
.then(resp => {
    if(resp.ok) {
        return resp.text()
    }

    return Promise.reject(resp);
    })
    .then(ip => console.log(ip))
    .catch(err => console.error(err))
    .finally(()=>{
        console.log('Odpytywanie API zakończone!')
    });