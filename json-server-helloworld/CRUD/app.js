console.log('test');
const apiUrl = 'http://localhost:3000/excursions';

document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM loaded');
    loadExcursions();
    removeExcursions();
    addExcursion();
    updateExcursions();

}

function loadExcursions() {
    fetch(apiUrl)
        .then(resp => {
            if (resp.ok) { return resp.json(); }
            return Promise.reject(resp);
        })
        .then(data => {
            console.log(data);
            insertExcursions(data);
        })

        .catch(err => console.error(err));
}



function insertExcursions(excursionsArr) {
    const ulEl = document.querySelector('.excursions');
    ulEl.innerHTML = '';
    excursionsArr.forEach(item => {
        const liEl = document.createElement('li');
        liEl.dataset.id = item.id;
        liEl.classList.add('excursions__item');
        liEl.innerHTML = `
        [<a href="#">usuń</a>]
        <span>${item.name}</span>:
        <span>${item.price}</span> PLN
        <button>edytuj</button>`;

        ulEl.appendChild(liEl);
    });
}

function removeExcursions() {
    const ulEl = document.querySelector('.excursions');
    ulEl.addEventListener('click', e => {
        const targetEl = e.target;
        if (targetEl.tagName === 'A') {
            const parentEl = targetEl.parentElement;
            const id = parentEl.dataset.id;
            const options = { method: 'DELETE' };
            fetch(`${apiUrl}/${id}`, options)
                .then(resp => console.log(resp))
                .catch(err => console.error(err))
                .finally(loadExcursions);
        }
    })
}

function addExcursion() {
    const form = document.querySelector('form');
    form.addEventListener('submit', e => {
        e.preventDefault();

        const { name, price } = e.target.elements;
        const data = {
            name: name.value, price: price.value
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(apiUrl, options)
            .then(resp => {
                console.log(resp);
                console.log('addExcursion');
            })
            .catch(err => console.error(err))
            .finally(loadExcursions);
    });
}

function updateExcursions() {
    const ulEl = document.querySelector('.excursions');
    ulEl.addEventListener('click', e => {
        const targetEl = e.target;
        console.log(targetEl)
        if (targetEl.tagName === 'BUTTON') {
            const parentEl = targetEl.parentElement;
            const spanList = parentEl.querySelectorAll('span');
            const isEditable = [...spanList].every(span => span.isContentEditable);
            if (isEditable) {
                // zapisz dane w API
                const id = parentEl.dataset.id;
                const data = {
                    name: spanList[0].innerText,
                    price: spanList[1].innerText,
                }
                const options = { 
                    method: 'PUT',
                    body: JSON.stringify( data ),
                    headers: { 'Content-Type': 'application/json' } 
                };
                fetch(`${apiUrl}/${id}`, options)
                    .then(resp => console.log(resp))
                    .catch(err => console.error(err))
                    .finally( () => {
                        targetEl.innerText = 'edytuj';
                        spanList.forEach(
                            span => span.contentEditable = false
                        );
                    });

            } else {
                //ustaw [contentEditable] na [true]
                targetEl.innerText = 'zapisz';
                spanList.forEach(
                    span => span.contentEditable = true
                );
            }
        }
    });
}