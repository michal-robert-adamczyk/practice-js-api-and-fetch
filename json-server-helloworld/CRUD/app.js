console.log('test');
const apiUrl = 'http://localhost:3000/excursions';

document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM loaded');
    loadExcursions();


}

function loadExcursions() {
    fetch(apiUrl)
    .then(resp => {
        if (resp.ok) { resp.json(); }
        return Promise.reject(resp);
    })
        .then(data => {
            insertExcursions(data);
        })
        .then(data => {
            removeExcursions(data);
        })

        .catch(err => console.error(err));
}

function insertExcursions(excursionsArr) {
    const ulEl = document.querySelector('.excursions');
    ulEl.innerHTML='';
    excursionsArr.forEach(item => {
        const liEl = document.createElement('li');
        liEl.dataset.id = item.id;
        liEl.classList.add('excursions__item');
        liEl.innerText = `${item.name}: ${item.price}PLN`;

        ulEl.appendChild(liEl);
    });
}
function removeExcursions() {
    const ulEl = document.querySelector('.excursions');
    ulEl.addEventListener('click', e => {
        const targetEl = e.target;
        if(targetEl.tagName === 'LI'){
            const id = targetEl.dataset.id;
            const options = {method: 'DELETE'};
            fetch(`${apiUrl}/${id}`, options)
            .then(resp => console.log(resp))
            .catch(err => console.error(err))
            .finally(loadExcursions);
        }
    })
}