const fetchWeatherButton = document.getElementById("fetchWeather");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");

const API_KEY = "5e4bc6957347a41bd46669b6a096ddb9";

fetchWeatherButton.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city !== "") {
        getWeather(city);
    }
});

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;

        weatherInfo.innerHTML = `<p>Weather: ${weatherDescription}</p><p>Temperature: ${temperature}°C</p>`;
    } catch (error) {
        weatherInfo.innerHTML = "City not found!";
    }
}
