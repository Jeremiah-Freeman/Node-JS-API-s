var googleAPI = require('./../.env').apiKey;

function GoogleMap(){
}

GoogleMap.prototype.getMap = function(city) {
  $.get('https://maps.googleapis.com/maps/api/geocode/json?address='+city+'&key='+googleAPI+'&callback=myMap').then(function(response) {
    return response.results.geometry.location;
  }).fail(function(error) {
    $('.showCity').text(error.responseJSON.message);
  });
};

exports.mapModule = GoogleMap;
