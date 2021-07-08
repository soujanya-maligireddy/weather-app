let request = require('request');
let argv = require('yargs').argv;

let apikey = 'a7137443420cb6c818e449f96b62c9ee';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apikey}`


request(url, function(err, response, body) {
    if(err){
        console.log('error:', error);
    } else {
        var weather = JSON.parse(body)
        var message = `It's ${weather.main.temp} degress in ${weather.name}!`;
        console.log(message);
    }
});