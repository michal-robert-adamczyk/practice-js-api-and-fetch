


function init() {


    const submitButton = document.querySelector('.form__submit')




    submitButton.addEventListener('click', consoleLogValue);

    function consoleLogValue(e) {

        const key = '5c2272e32ff1442098abf9ecd58d4df6';
        const latitudeField = document.querySelector('.form__field--lat');
        const longitudeField = document.querySelector('.form__field--lng');
        const latitude = latitudeField.value;
        const longitude = longitudeField.value;


        e.preventDefault();
        console.log(latitude);
        console.log(longitude);
        console.log(key);
        const URL = `https://api.weatherbit.io/v2.0/current?key=[${key}]&lat=[${latitude}]&lon=[${longitude}]`;
        console.log(URL);
    }


}



document.addEventListener('DOMContentLoaded', init);



    // const promise = fetch('`https://api.weatherbit.io/v2.0/current?key=[key]&lat=[latitude]&lon=[longitude]`');

    // promise
    //     .then(resp => {
    //         if (resp.ok) {
    //             return resp.text()
    //         }

    //         return Promise.reject(resp);
    //     })
    //     .then(ip => {
    //         const IPValue = ip
    //         function AddIPIntoSpan() {
    //             span.innerHTML = IPValue;
    //         }
    //         button.addEventListener('click', AddIPIntoSpan);

    //     })
    //     .catch(err => console.error(err))
    //     .finally(() => {
    //         console.log('Odpytywanie API zakończone!')
    //     });



