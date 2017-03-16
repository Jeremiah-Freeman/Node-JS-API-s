var weatherAPI = require('./../.env').apiKey2;
var initMap = require('./../js/googlemap-interface.js').initModule;


function Weather() {
}

Weather.prototype.getWeather = function(city,displayHumidity) {
  var coords = [];
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid='+weatherAPI).then(function(response) {
    $('.showWeather').text("The humidity in " + city + " is " + response.main.temp + "%");
    var lat = parseFloat(response.coord.lat);
    var lon = parseFloat(response.coord.lon);
    coords.push(lat);
    coords.push(lon);
    console.log(lat,lon);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  }).then(function(){
    console.log(coords);
    console.log(coords[0]);
    initMap(coords);

  });
};

exports.weatherModule = Weather;
