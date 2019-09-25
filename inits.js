"use strict";

var searchButton = document.querySelector('#btn');
var fiveDayBtn = document.querySelector('#fiveDayBtn');
var searchCity = document.querySelector('#city');
var weatherIcon = document.querySelector('.weatherIcon');
var dateTime = document.querySelector('#date');
var hourly = document.querySelector('.hourlyLI');

var list = document.querySelector('ul');

var loadingText = document.querySelector('#load');
var weatherBox = document.querySelector('#weather');
var lowTemp = document.querySelector('#low-temp');
var highTemp = document.querySelector('#high-temp');
var humidity = document.querySelector('.humidity');
var input = document.getElementById('city');

var weatherDescription = document.querySelector('#weatherDescription');