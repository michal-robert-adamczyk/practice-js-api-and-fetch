const promise = fetch('https://api.ipify.org');

promise
.then(resp => resp.text())
.then(ip => console.log(ip))
.catch(err => console.error(err))
.finally(() => {
    console.log('Odpytytwanie API zakończone!')
})