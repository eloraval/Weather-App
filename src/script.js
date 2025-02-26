let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hours < 10) {
  hours = `0${hours}`;
}
let p = document.querySelector("#current-time");
p.innerHTML = `${day} ${hours}:${minutes}`;

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city");
  let h1 = document.querySelector("#city");
  h1.innerHTML = `${cityInput.value}`;
  const apiKey = "0b33fbcoa6fff114b107fae8f07b3a0t";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput.value}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(function (response) {
    console.log(response.data);
    let temperatureElement = document.querySelector(
      ".current-temperature-value"
    );
    temperatureElement.innerHTML = Math.round(
      response.data.temperature.current
    );
  });
}

const enterCity = document.querySelector("#city-form");
enterCity.addEventListener("submit", searchCity);
