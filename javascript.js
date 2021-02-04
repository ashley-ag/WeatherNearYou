$(document).ready(function() {

  var searchInput = document.querySelector('.form-control');
  var cityText = document.querySelector('#city');
  var tempText = document.querySelector('#temp');
  var humidityText = document.querySelector('#humidity');
  var windSpeedText = document.querySelector('#windSpeed');
  var UVIndexText = document.querySelector('#UVIndex');
  var UVISpan = document.querySelector('#UVInumber');
  



$("#search-button").on("click", function() {
//take the input from the search bar and fetch the data from open weather

addEventListener("click", function(){
  var name = nameInput.value;

  var newLocalStorageEntry = {
      citySearch: searchInput.value,
  };

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
    var long = data['coord']['lon'];
    var lat = data['coord']['lat'];

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
     
    
    // the date, an icon representation of weather conditions, the temperature, and the humidity  
      for(i=0; i > 4; i++) {

      var date = new Date();
      var icon5 = data['daily'][i]['weather'][i]['icon'];
      var temp5 = data['daily'][i]['temp']['day'];
      var hum5 = data['daily'][i]['humidity'];
      var dateFore5 = document.getElementById("date" + [i]);
      var forecastFore5 = document.getElementById("forecast" + [i]);    
      
      $(".card").removeClass("hidden");

      dateFore5.textContent = date;
      forecastFore5.textContent = icon5, temp5, hum5;

      }

    })
})

//store search history

//append search history in aside

//make search history clickable to bring up the forecast 

//

})

})

})