let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thusday",
  "Friday",
  "Saturday",
];
let currentTime = new Date();
let dayNow = currentTime.getDay();
let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let currentTimeNow = document.querySelector("#current-time");
currentTimeNow.innerHTML = `${days[dayNow]} ,  ${hours} : ${minutes}`;
// challlenge 2
function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  console.log(cityInput.value);
  let city = document.querySelector("#cities");
  city.innerHTML = `${cityInput.value}`;
}

let form = document.querySelector("#search-input");
form.addEventListener("submit", search);
// challenge 3

function celsiusTemp() {
  let celsiusTemperature = 100;
  let degreesCelsius = document.querySelector("#degrees");
  degreesCelsius.innerHTML = `${celsiusTemperature}`;
}
let tempCelsius = document.querySelector("#celsius");
tempCelsius.addEventListener("click", celsiusTemp);

function fahrenheitTemp() {
  let fahrenheitTemperature = 50;
  let degreesCelsius = document.querySelector("#degrees");
  degreesCelsius.innerHTML = `${fahrenheitTemperature}`;
}
let tempFahrenheit = document.querySelector("#fahrenheit");
tempFahrenheit.addEventListener("click", fahrenheitTemp);
