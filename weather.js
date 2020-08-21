var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

button.addEventListener('click', function () {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=a2bd7213a39113727af6fff678a49f8d')
    .then(response => response.json())
    .then(data => {
      console.log(inputValue)
      var tempValue = data['main']['temp'];
      var descValue = data['weather'][0]['description'];
      temp.innerHTML = Math.round(tempValue -273.15) + ' C';
      desc.innerHTML = descValue;
      console.log(data);
    })
    .catch(err => alert("wrong city name"))
})

var cityList = ["https://api.openweathermap.org/data/2.5/weather?q=London&appid=a2bd7213a39113727af6fff678a49f8d",
 "https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=a2bd7213a39113727af6fff678a49f8d",
 "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=a2bd7213a39113727af6fff678a49f8d",
 "https://api.openweathermap.org/data/2.5/weather?q=New York,us&appid=a2bd7213a39113727af6fff678a49f8d",
 "https://api.openweathermap.org/data/2.5/weather?q=Pekin,cn&appid=a2bd7213a39113727af6fff678a49f8d"
]

linkLondon = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=a2bd7213a39113727af6fff678a49f8d";
var request = new XMLHttpRequest();
request.open('GET', linkLondon, true);
request.onload = function () {
  var obj = JSON.parse(this.response);
  console.log(obj);
  document.getElementById('london-weather').innerHTML = obj.weather[0].description;
  document.getElementById('london-location').innerHTML = obj.name;
  document.getElementById('london-temp').innerHTML = Math.round(obj.main.temp - 273.15) + ' C';
  document.getElementById('london-icon').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
}
request.send();

linkMoscow = "https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=a2bd7213a39113727af6fff678a49f8d";
var request = new XMLHttpRequest();
request.open('GET', linkMoscow, true);
request.onload = function () {
  var obj = JSON.parse(this.response);
  console.log(obj);
  document.getElementById('moscow-weather').innerHTML = obj.weather[0].description;
  document.getElementById('moscow-location').innerHTML = obj.name;
  document.getElementById('moscow-temp').innerHTML = Math.round(obj.main.temp - 273.15) + ' C';
  document.getElementById('moscow-icon').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
}
request.send();

linkParis = "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=a2bd7213a39113727af6fff678a49f8d";
var request = new XMLHttpRequest();
request.open('GET', linkParis, true);
request.onload = function () {
  var obj = JSON.parse(this.response);
  console.log(obj);
  document.getElementById('paris-weather').innerHTML = obj.weather[0].description;
  document.getElementById('paris-location').innerHTML = obj.name;
  document.getElementById('paris-temp').innerHTML = Math.round(obj.main.temp - 273.15) + ' C';
  document.getElementById('paris-icon').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
}
request.send();

linkNewYork = "https://api.openweathermap.org/data/2.5/weather?q=New York,us&appid=a2bd7213a39113727af6fff678a49f8d";
var request = new XMLHttpRequest();
request.open('GET', linkNewYork, true);
request.onload = function () {
  var obj = JSON.parse(this.response);
  console.log(obj);
  document.getElementById('newYork-weather').innerHTML = obj.weather[0].description;
  document.getElementById('newYork-location').innerHTML = obj.name;
  document.getElementById('newYork-temp').innerHTML = Math.round(obj.main.temp - 273.15) + ' C';
  document.getElementById('newYork-icon').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
}
request.send();

linkPekin = "https://api.openweathermap.org/data/2.5/weather?q=Pekin,cn&appid=a2bd7213a39113727af6fff678a49f8d";
var request = new XMLHttpRequest();
request.open('GET', linkPekin, true);
request.onload = function () {
  var obj = JSON.parse(this.response);
  console.log(obj);
  document.getElementById('pekin-weather').innerHTML = obj.weather[0].description;
  document.getElementById('pekin-location').innerHTML = obj.name;
  document.getElementById('pekin-temp').innerHTML = Math.round(obj.main.temp - 273.15) + ' C';
  document.getElementById('pekin-icon').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
}
request.send();

let user = localStorage.getItem('currenUser')
var slideIndex = JSON.parse(localStorage.getItem('users')).user.find((f) => f.login == user).currentCity + 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  setCurrentCity(slideIndex-1);
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function setCurrentCity(index) {
  let obj = localStorage.getItem('users')
  obj = JSON.parse(obj)
  let user = localStorage.getItem('currenUser')
  let i = obj.user.findIndex((f) => f.login == user)
  obj.user[i].currentCity = index
  localStorage.setItem(`users`, JSON.stringify(obj))
}

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}