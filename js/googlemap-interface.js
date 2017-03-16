var GoogleMap = require('./../js/googlemap.js').mapModule;
var Weather = require("./../js/weather.js").weatherModule;
// $(document).ready(function() {
//   var currentWeatherObject = new Weather();
//   var coords = currentWeatherObject.getWeather();
//   var currentMapObject = new GoogleMap();
//   $('#city-location').click(function() {
//     var city = $('#location').val();
//     $('#location').val("");
//     currentMapObject.getMap(city);
//   });
//
//   initMap(coords);
// });


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

exports.initModule = initMap;
