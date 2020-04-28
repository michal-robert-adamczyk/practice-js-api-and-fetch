


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

        const URL = `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${latitude}&lon=${longitude}&lang=pl`;



        const promise = fetch(URL);

        promise
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }

                return Promise.reject(resp);
            })
            .then(data => {
                const weatherDescription = data.data[0].weather.description;
                const temperatureFahrenheit = ((data.data[0].temp) * 9 / 5) + 32;
                console.log(temperatureFahrenheit);
                console.log(weatherDescription);


                const latitudeOutput = document.querySelector('.weather__lat');
                latitudeOutput.innerText = latitude;

                const longitudeOutput = document.querySelector('.weather__lng');
                longitudeOutput.innerText = longitude;
                const weatherSummaryOutput = document.querySelector('.weather__summary');
                weatherSummaryOutput.innerText=weatherDescription;
                const weatherTemperatureOutput = document.querySelector('.weather__temperature');
                weatherTemperatureOutput.innerText = temperatureFahrenheit;
            })
            .catch(err => console.error(err))
            .finally(() => {
                console.log('Działa')
            })
    }




}



document.addEventListener('DOMContentLoaded', init);







