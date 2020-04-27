


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
        const URL = `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${latitude}&lon=${longitude}&lang=pl`;
        console.log(URL);


        const promise = fetch(URL);

        promise
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }

                return Promise.reject(resp);
            })
            .then(data => console.log(data))
            .catch(err => console.error(err))
            .finally(() => {
                console.log('Działa')
            })
    }




}



document.addEventListener('DOMContentLoaded', init);







