var weatherAPI = require('./../.env').apiKey2;
var initMap = require('./../js/googlemap-interface.js').initModule;

function Weather() {
}

Weather.prototype.getWeather = function(city) {
  var coords = [];
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid='+weatherAPI).then(function(response) {
    var temp = Math.round(((response.main.temp - 273.15) * 1.8) + 32);
    $('.showWeather').text("The Temperature in " + city + " is " + temp + "F");
    var lat = parseFloat(response.coord.lat);
    var lon = parseFloat(response.coord.lon);
    coords.push(lat);
    coords.push(lon);
    console.log(lat,lon);
    initMap(coords);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  }).then(function(){

  });
};

exports.weatherModule = Weather;
