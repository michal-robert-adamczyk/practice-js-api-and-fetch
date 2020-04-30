//napisanie obsługi formularza, która pozwoli na dodawanie danych do naszego lokalnego API.
// * wykorzystać odpowiednią metodę (`POST`)
// * utworzyć obiekt na podstawie wysłanych przez formularz dancyh, który trzeba zamienić na format *JSON* (`JSON.stringify()`)
// * przekazanć odpowiedni nagłówek (`'Content-Type': 'application/json'`)

// Po dodaniu kolejnego użytkownika należy zaktualizować widok przy pomocy funkcji `loadUsers()`, którą należy uruchomić w odpowiednim momencie np. `finally()`.

const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    addUser();
}

function loadUsers() {
    const promise = fetchGet(apiUrl);

    promise
        .then(data => insertUsers(data))
        .catch(err => console.error(err));
}

function fetchGet(url) {
    return fetch(url)
        .then(resp => {
            if(resp.ok) {
                return resp.json();
            }

            return Promise.reject(resp);
        });
}

function insertUsers(usersList) {
    const ulElement = document.querySelector('.users');
    ulElement.innerHTML = '';
    usersList.forEach(user => {
        const liElement = document.createElement('li');
        liElement.innerText = `${user.firstName} ${user.lastName}`;

        ulElement.appendChild(liElement);
    });
}

function addUser() {
    const form = document.querySelector('form');
    form.addEventListener('submit', e => {
        e.preventDefault();

        const firstNameToSetAtribute = document.querySelector('.form__field--first-name');
        const lastNameToSetAtribute = document.querySelector('.form__field--last-name')
                firstNameToSetAtribute.setAttribute('name', 'firstName');
        lastNameToSetAtribute.setAttribute('name', 'lastName');
        const { firstName, lastName } = e.target.elements;
        const data = {
            firstName: firstName.value, lastName: lastName.value
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(apiUrl, options)
            .then(resp => {
                console.log(resp);
                console.log('addUser');
            })
            .catch(err => console.error(err))
            .finally(loadUsers);
    });
}
