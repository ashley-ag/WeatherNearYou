$(document).ready(function() {

  var searchInput = document.querySelector('.form-control');
  var cityText = document.querySelector('#city');
  var iconText = document.querySelector('#icon');
  var tempText = document.querySelector('#temp');
  var humidityText = document.querySelector('#humidity');
  var windSpeedText = document.querySelector('#windSpeed');
  var UVIndexText = document.querySelector('#UVIndex');


$("#search-button").on("click", function() {
//take the input from the search bar and fetch the data from open weather
console.log(searchInput.value);
//present todays weather data for specific city in the today card
fetch('http://api.openweathermap.org/data/2.5/weather?q=' + searchInput.value + '&units=imperial&appid=01ba96e862d6d6a63299345f7c985a13')
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => {
    var cityVal = data['name'];
    var iconVal = data['weather'][0]['icon'];
    var tempVal = data['main']['temp']; 
    var humidityVal = data['main']['humidity'];
    var windSpeedVal = data['wind']['speed'];
    var iconLink = "http://openweathermap.org/img/w/" + iconVal + ".png"

    cityText.textContent = cityVal;
    $('#iconPNG').attr('src', iconLink);
    tempText.textContent = "Tempature: " + tempVal + "° F";
    humidityText.textContent = "Humidity: " + humidityVal + "%";
    windSpeedText.textContent = "Wind Speed: " + windSpeedVal + " MPH";

    })


//present 5 day forecast in forecast card

//store search history

//append search history in aside


//make search history clickable to bring up the forecast 

//

})

})
