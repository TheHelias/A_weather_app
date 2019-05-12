$(document).ready(function(){
   $('.short').hide();
    if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(function(position){
        var currentPosition = position;
        var latitude = currentPosition.coords.latitude;
        var longitude = currentPosition.coords.longitude;
        var url = 'http://api.apixu.com/v1/current.json?key=7641f6bc2a1a41e4889120133191205&q='
        $.getJSON(url + latitude + ',' + longitude, function(data) {
            //console.log(data)
            var place = data.location.name + ', ' + data.location.region + ', ' + data.location.country;
            var sky = data.current.condition.text;
            var time = data.location.localtime.split(' ')[1];
            var wind = 'Wind ' + data.current.wind_kph + ' Kph';
            var theTemp = data.current.temp_c;
            var temperatureC = data.current.temp_c + '°C';
            //you can also use &#8451 to display  °c
            var temperatureF = data.current.temp_f + '°F';
            var humidity = 'Humidity ' + data.current.humidity + '%';
            $('#weather').html(place);
            if(theTemp <= 18){
                $('.grey-jumbo').css({
                    backgroundImage: 'url(https://images.unsplash.com/photo-1467932760935-519284fc87fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)'});
                $('#temp').html("It's pretty cold today...<hr>")
            }else if(theTemp >18 && theTemp<30 ){
                $('.grey-jumbo').css({
                    backgroundImage: 'url(https://images.unsplash.com/photo-1533471690391-a8503e272a12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1386&q=80)'});
                $('#temp').html("It's quite sunny today...<hr>")
            }else{
                $('.grey-jumbo').css({
                  backgroundImage: 'url(https://images.unsplash.com/photo-1413977886085-3bbbf9a7cf6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)'});
                $('#temp').html("It's a hot day...<hr>")
            }
            $('#info1').html(time);
            $('#info2').html(wind);
            $('#info3').html(temperatureC);
            $('#info5').html(sky);
            $('#info6').html(humidity);
            $('.short').show();
            //to make it toggle between f and c scale
            var toggle = true;
            $('#switch').on('click', function(){
                if(toggle){
                    $('#info3').html(temperatureF)
                    $('#switch').html('Show in Celsius');
                    toggle = false;
                }else{
                    $('#info3').html(temperatureC)
                    $('#switch').html('Show in Fahrenheit');
                    toggle = true;
                }
            });
            
    
        });
    })
})