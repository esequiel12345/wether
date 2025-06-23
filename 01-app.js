const apiKey = "87b5abdd1ab18fdaca5ac926933b60de";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=es&q=";

const searchBox = document.querySelector(".search-bar input");
const searchButton = document.querySelector(".search-bar button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();
      
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity-value").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-value").innerHTML = data.wind.speed + " km/h";

    switch (data.weather[0].main.toLowerCase()) {
      case "clear":
        weatherIcon.src = "imagenes/clear.png";
        break;
      case "clouds":
        weatherIcon.src = "imagenes/clouds.png";
        break;
      case "rain":
        weatherIcon.src = "imagenes/rain.png";
        break;
      case "drizzle":
        weatherIcon.src = "imagenes/drizzle.png";
        break;
      case "snow":
        weatherIcon.src = "imagenes/snow.png";
        break;
      case "mist":
        weatherIcon.src = "imagenes/mist.png";
        break;
      default:
        weatherIcon.src = "imagenes/clear.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchButton.addEventListener("click", () => {
  const city = searchBox.value.trim();
  if (city !== "") {
    checkWeather(city);
  }
});

searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchButton.click();
  }
});
