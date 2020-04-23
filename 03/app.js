document.addEventListener('DOMContentLoaded', init);

function init() {
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
