document.addEventListener('DOMContentLoaded', init);

const button = document.querySelector('.button');
const span = document.querySelector('.span');

function init() {

    const promise = fetch('https://api.ipify.org');

    promise
        .then(resp => {
            if (resp.ok) {
                return resp.text()
            }

            return Promise.reject(resp);
        })
        .then(ip => {
            const IPValue = ip
            function AddIPIntoSpan() {
                span.innerHTML = IPValue;
            }
            button.addEventListener('click', AddIPIntoSpan);

        })
        .catch(err => console.error(err))
        .finally(() => {
            console.log('Odpytywanie API zakończone!')
        });

}