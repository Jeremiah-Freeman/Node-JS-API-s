var Weather = require("./../js/weather.js").weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
};

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#display-city').click(function() {
   var city = $('#city').val();
   $('#city').val("");
   var coords = currentWeatherObject.getWeather(city, displayHumidity);

 });
});
