var Weather = require("./../js/weather.js").weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
};

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
   var city = $('#weatherLocation').val();
   console.log(city);
   $('#weatherLocation').val("");
   currentWeatherObject.getWeather(city, displayHumidity);
 });
});
