document.getElementById('city').addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        searchWeather();
        event.preventDefault();
        document.getElementById("btn").click();
    }
});

function searchWeather(cityName) {
    if (cityName.trim().length == 0) {
        return alert('Please enter a City Name');
    }
    var http = new XMLHttpRequest();
    var apiKey = '43c4965713024ed03657a299a9ea86af';
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + apiKey;
    var method = 'GET';

    function capital_letter(str) {
        str = str.split(" ");
        for (var i = 0, x = str.length; i < x; i++) {
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }
        return str.join(" ");
    }

    http.open(method, url);
    http.onreadystatechange = function () {
        if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {
            var data = JSON.parse(http.responseText);
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            var locationURL = `${lat},${lon}`;
            city.value = '';
            return locationURL;
        } else if (http.readyState === XMLHttpRequest.DONE) {
            alert('Something went wrong!');
        }
    };
    http.send();
}

var locationURL;
document.querySelector(".testBtn").addEventListener('click', function(){
    console.log(locationURL);
});
