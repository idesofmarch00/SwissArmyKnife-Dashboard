import { config } from "../../env.js";

/**
 * DOM element to display the weather information
 */
const weather = document.getElementById("weather");

/**
 * API key for accessing the OpenWeatherMap API
 */
const API_KEY = config.WEATHER_API_KEY;

/**
 * Function to fetch and display the weather information based on the user's current location
 */
navigator.geolocation.getCurrentPosition((position) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`
  )
    .then((res) => {
      if (!res.ok) {
        throw Error("Weather data not available.");
      }
      return res.json();
    })
    .then((data) => {
      const iconURL = `"http://openweathermap.org/img/w/${data.weather[0].icon}.png"`;
      const city = data.name;
      const temperature = Math.round(data.main.temp);

      weather.innerHTML = `
                    <div class="weather-header">
                        <img id="weatherIcon" src=${iconURL} >
                        <p class="weather-temperature">${temperature}&degC</p>
                    </div>
                    <p class="weather-city">${city}</p>
                `;
    })
    .catch((err) => console.error(err));
});
