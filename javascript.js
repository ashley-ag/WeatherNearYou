$(document).ready(function() {

  var searchInput = document.querySelector('.form-control');
  var cityText = document.querySelector('#city');
  var tempText = document.querySelector('#temp');
  var humidityText = document.querySelector('#humidity');
  var windSpeedText = document.querySelector('#windSpeed');
  var UVIndexText = document.querySelector('#UVIndex');
  //var citySearch = [];

 
// -------------------------------------------------------------------------------------------------------------------------------------------------------------


$("#search-button").on("click", function() {
  displayWeatherData();
})


// --------------------------------------------------------------------------------------------------------------------------------------------------------------

// local storage and history buttons

// function localStorageHistory() {
//   citySearch.push(searchInput.value);
//   localStorage.setItem("cities", JSON.stringify(citySearch));
//   console.log(localsotrage.getItem(JSON.parse(citySearch)));

  

// }


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


//Populate weather data and the forecast data

function displayWeatherData() {
  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + searchInput.value + '&units=imperial&appid=01ba96e862d6d6a63299345f7c985a13')
  .then(response => response.json())
  //.then(data => console.log(data))
  .then(data => {
  var cityVal = data.name;
  var iconVal = data.weather[0].icon;
  var tempVal = data.main.temp; 
  var humidityVal = data.main.humidity;
  var windSpeedVal = data.wind.speed;
  var iconLink = "http://openweathermap.org/img/w/" + iconVal + ".png"
  var long = data.coord.lon;
  var lat = data.coord.lat;

  cityText.textContent = cityVal;
  $('#iconPNG').attr('src', iconLink);
  tempText.textContent = "Temperature: " + tempVal + "° F";
  humidityText.textContent = "Humidity: " + humidityVal + "%";
  windSpeedText.textContent = "Wind Speed: " + windSpeedVal + " MPH";

//present 5 day forecast in forecast card
fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + long + '&units=imperial&appid=01ba96e862d6d6a63299345f7c985a13')
  .then(response => response.json())
//.then(data => console.log(data))
 .then(data => {
   console.log(data);
  // the date, an icon representation of weather conditions, the temperature, and the humidity  
    for(i=0; i < 5; i++) {

    var date = moment.unix(data.daily[i+1].dt).format("dddd, MMMM Do YYYY");
    var icon5 = data.daily[i].weather[0].icon;
    var temp5 = data.daily[i].temp.day;
    var hum5 = data.daily[i].humidity;
    var idNumber = i + 1;
    var dateFore5 = document.getElementById("date" + idNumber);
    var iconFore5 = document.getElementById("icon" + idNumber);
    var tempFore5 = document.getElementById("temp" + idNumber);
    var humFore5 = document.getElementById("humidity" + idNumber);
    var icon5Show = "http://openweathermap.org/img/w/" + icon5 + ".png"
    
    $(".show").removeClass("hidden");

    dateFore5.textContent = date;
    iconFore5.setAttribute('src', icon5Show);
    tempFore5.textContent = "Temperature: " + temp5 + "° F";
    humFore5.textContent = "Humidity: " + hum5 + "%";

    } 


var UVINumber = data.current.uvi;
//UVINumber = 8;
UVIndexText.textContent = "UV Index: " + UVINumber;

if (UVINumber <= 2){
  UVIndexText.classList.add("lowUVI");
}

if(UVINumber <= 5){
  UVIndexText.classList.add("midUVI");
}

if(UVINumber >= 6){
  UVIndexText.classList.add("highUVI");
}


})
})
} 

//doc ready closing 
})