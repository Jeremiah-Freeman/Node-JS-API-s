var googleAPI = require('./../.env').apiKey;

function GoogleMap(){
}

GoogleMap.prototype.getMap = function(city) {
  $.get('https://maps.googleapis.com/maps/api/js?address='+city+'&key='+googleAPI+'&callback=myMap').then(function(response) {
    // console.log(response);
    return response;
  }).fail(function(error) {
    $('.showCity').text(error.responseJSON.message);
  });
};


exports.mapModule = GoogleMap;
