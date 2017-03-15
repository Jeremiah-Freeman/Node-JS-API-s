var GoogleMap = require('./../js/googlemap.js').mapModule;

$(document).ready(function() {
  var currentMapObject = new GoogleMap();
  $('#city-location').click(function() {
    console.log("Not this time");
    var city = $('#location').val();
    $('#location').val("");
    currentMapObject.getMap(city);
  });

  initMap();
});


function initMap() {
  var uluru = {lat: 45.5231, lng: -122.6765};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
