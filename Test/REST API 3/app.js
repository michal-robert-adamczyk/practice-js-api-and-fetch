const promise = fetch(
    'https://www.breakingbadapi.com/api/characters/1',
    { method: 'GET' }// domyślne ustawienie
);

promise
    .then(resp => {
        if (resp.ok) {
            return resp.json();
        }

        return Promise.reject(resp);
    })

    .then(ip => console.log(ip))
    .catch(err => console.error(err))
    .finally(() => {
        console.log('Odpytywanie API zakończone!')
    });