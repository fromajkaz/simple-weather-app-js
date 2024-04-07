"use strict";

const apiKey = "40baec75924b4d332e3aa650e5617564";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".bg").style.background = "#000";
  }
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + "&deg";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
    searchBox.style.opacity = "1";
    document.querySelector(".weather").style.opacity = "1";
    document.querySelector(".bg").style.opacity = "1";
    document.querySelector(".bg").style.backgroundImage =
      "url('images/bg/cloud.jpg')";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
    searchBox.style.opacity = "1";
    document.querySelector(".weather").style.opacity = "1";
    document.querySelector(".bg").style.opacity = "1";
    document.querySelector(".bg").style.backgroundImage =
      "url('images/bg/clear.jpg')";
  } else if (data.weather[0].main == "drizzle") {
    weatherIcon.src = "images/drizzle.png";
    searchBox.style.opacity = "1";
    document.querySelector(".weather").style.opacity = "1";
    document.querySelector(".bg").style.opacity = "1";
    document.querySelector(".bg").style.backgroundImage =
      "url('images/bg/drizzle.jpg')";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
    searchBox.style.opacity = "1";
    document.querySelector(".weather").style.opacity = "1";
    document.querySelector(".bg").style.opacity = "1";
    document.querySelector(".bg").style.backgroundImage =
      "url('images/bg/mist.jpg')";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
    searchBox.style.opacity = "1";
    document.querySelector(".weather").style.opacity = "1";
    document.querySelector(".bg").style.opacity = "1";
    document.querySelector(".bg").style.backgroundImage =
      "url('images/bg/rain.jpg')";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "images/snow.png";
    searchBox.style.opacity = "1";
    document.querySelector(".weather").style.opacity = "1";
    document.querySelector(".bg").style.opacity = "1";
    document.querySelector(".bg").style.backgroundImage =
      "url('images/bg/snow.jpg')";
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
