
const apiKey = 'YOUR_API_KEY';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

const tempElement = document.getElementById('temp');
const highLowElement = document.getElementById('high-low');
const humidityElement = document.getElementById('humidity');
const rainElement = document.getElementById('rain');
const windElement = document.getElementById('wind');
const skyElement = document.getElementById('sky');

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     console.log

let geoloc = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    geoloc.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  geoloc.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

if ("geolocation" in navigator) {
    /* geolocation is available */
    alert("yes")
  } else {
    alert('no')
    /* geolocation IS NOT available */
  }