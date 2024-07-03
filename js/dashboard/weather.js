// const weather = document.querySelector(".js-weather");

// const API_KEY = "5b6ef3caa38dfdec0ef471202470c402";
// const COORDS = "coords";

// function getWeather(lat, lng) {
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
//   )
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(json) {
//       const temperature = json.main.temp;
//       const place = json.name;
//       weather.innerText = `temperature : ${temperature}˚ C
//       location : ${place}`;
//     });
// }

// function saveCoords(coordsObj) {
//   localStorage.setItem(COORDS, JSON.stringify(coordsObj));
// }

// function handleGeoSucces(position) {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;
//   const coordsObj = {
//     latitude,
//     longitude
//   };
//   saveCoords(coordsObj);
//   getWeather(latitude, longitude);
// }

// function handleGeoError() {
//   console.log("Can't access geolocation");
// }

// function askForCoords() {
//   navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
// }

// function loadCoords() {
//   const loadedCoords = localStorage.getItem(COORDS);
//   if (loadedCoords === null) {
//     askForCoords();
//   } else {
//     const parsedCoords = JSON.parse(loadedCoords);
//     getWeather(parsedCoords.latitude, parsedCoords.longitude);
//   }
// }

// function init() {
//   loadCoords();
// }

// init();

const weather = document.getElementById("weather");
const API_KEY = "5b6ef3caa38dfdec0ef471202470c402";

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
                        <img id="weatherIcon"src=${iconURL} >
                        <p class="weather-temperature">${temperature}&degC</p>
                    </div>
                    <p class="weather-city">${city}</p>
                `;
    })
    .catch((err) => console.error(err));
});
