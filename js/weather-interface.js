//var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    alert(city);
  });
    $('#kelvin-temp').click(function() {
      var citytemp= $('#location').val();
      $('#location').val("");
    alert(citytemp);
  });
});
/*
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
     .then(function(response){
        $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
     })

     .fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
      });
  });
});
*/