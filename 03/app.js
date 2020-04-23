document.addEventListener('DOMContentLoaded', init);

function init() {

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


    console.log('DOM');
    const button = document.querySelector('.button');
    const span = document.querySelector('.span');
    console.log(button);
    console.log(span);
}


//po kliknięciu`<button/>` 
//pobrać number *IP* z jakim łączysz się z Internetem 
//i wstawić go do elementu `<span/>`.

//Do rozwiązanie tego zadania możesz użyć *API* dostępnego pod tym adresem: [https://www.ipify.org](https://www.ipify.org/). Dane odbierane z *API* powinny być w formacie *JSON*.
