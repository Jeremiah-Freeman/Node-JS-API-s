var Weather = require("./../js/weather.js").weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The temperature in " + city + " is " + convertedTemp + "F");
};

function initMap(coords) {
  var cityCoord = {lat: coords[0], lng: coords[1]};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: cityCoord
  });
  var marker = new google.maps.Marker({
    position: cityCoord,
    map: map
  });
}

$(document).ready(function() {
  initMap([45.5231, -122.6765]);

  var currentWeatherObject = new Weather();
  $('#display-city').click(function() {
   var city = $('#city').val();
   $('#city').val("");
   var coords = currentWeatherObject.getWeather(city);

 });
});
