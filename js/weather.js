var weatherAPI = require('./../.env').apiKey2;
var initMap = require('./../js/googlemap-interface.js').initModule;


function Weather() {
}

// function initMap(coords) {
//   var cityCoord = {lat: coords[0], lng: coords[1]};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 16,
//     center: cityCoord
//   });
//   var marker = new google.maps.Marker({
//     position: cityCoord,
//     map: map
//   });
// }

Weather.prototype.getWeather = function(city) {
  // initMap([45.5231, -122.6765]);
  var coords = [];
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid='+weatherAPI).then(function(response) {
    $('.showWeather').text("The Temperature in " + city + " is " + response.main.temp + "F");
    // displayHumidity(city, response.main.temp);
    var lat = parseFloat(response.coord.lat);
    var lon = parseFloat(response.coord.lon);
    coords.push(lat);
    coords.push(lon);
    console.log(lat,lon);
    initMap(coords);

  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  }).then(function(){
    // console.log(coords);
    // console.log(coords[0]);
    // initMap(coords);
  });
};

Weather.prototype.convertTemp = function(temp) {
  var convertedTemp = ((temp - 273.15) * 1.8) + 32;
  return convertedTemp;
};

exports.weatherModule = Weather;
