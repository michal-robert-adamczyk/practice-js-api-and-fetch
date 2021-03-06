const promise = fetch('https://www.breakingbadapi.com/api/characters');

promise
.then(resp => {
    if(resp.ok) {
        return resp.json();
    }

    return Promise.reject(resp);
    })
    .then(ip => console.log(ip))
    .then(resp => console.log(resp))
    .catch(err => console.error(err))
    .finally(()=>{
        console.log('Odpytywanie API zakończone!')
    });