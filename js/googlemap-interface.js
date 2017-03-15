var googleAPI = require('./../.env').apiKey;

function myMap() {
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

$(document).ready(function() {
  $('#city-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showCity').text("The city you have chosen is " + city + ".");
    $.get('https://maps.googleapis.com/maps/api/js?address='+city+'&key='+googleAPI+'&callback=myMap', function(response) {
      console.log(JSON.stringify(response));
    });
  });
});
