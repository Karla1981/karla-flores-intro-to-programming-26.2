const city_weather = document.getElementById('city');
city_weather.textContent = 'Current weather in Chicago';

const latitude = 41.85;
const longitude = -87.65;
const api_url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current=temperature_2m&current=relative_humidity_2m`;


 // create fuction to get weather data
async function getWeatherData(){

    try {

        const response = await fetch(api_url);

        // if not response throw error
        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }
        // Parse the raw data into readable json object
        const data = await response.json();

        // extract the value out of the json object
        const temperature = data.current.temperature_2m;
        const currentHumidity = data.current.relative_humidity_2m;

        console.log('temp ', temperature);
        console.log('humidity ', currentHumidity);

        // inject the data into the html element using DOM manipulation
       // document.getElementById('temp').textContent = temperature;
       document.getElementById('temp').innerText = temperature + ' C';
       document.getElementById('humidity').innerText = currentHumidity + '%';

    } catch(error) {
        // catch any network errors
        console.log('Failed to fetch weather data: ', error.message);
        return {error: true, message: 'Weather data is currently unavailable.'};
    }
}
// call function
getWeatherData();