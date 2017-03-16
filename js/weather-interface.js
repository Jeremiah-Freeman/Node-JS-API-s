var Weather = require("./../js/weather.js").weatherModule;

$(document).ready(function() {
  initMap([45.5231, -122.6765]);
  var currentWeatherObject = new Weather();
  $('#display-city').click(function() {
   var city = $('#city').val();
   $('#city').val("");
   var coords = currentWeatherObject.getWeather(city);
 });
});
