const container = document.querySelector(".container");
const search = document.querySelector(".search button");
const weatherBox = document.querySelector(".weather-main");
const weatherinfo = document.querySelector(".weather-info");
const error404 = document.querySelector(".not-found");

search.addEventListener("click", () => {
  const APIKey = "22e4cc63ae3e31d9f4641d986cb16717";
  const city = document.querySelector(".search input").value;

  if (city === "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod === "404") {
        container.style.height = "605px";
        weatherBox.style.display = "none";
        weatherinfo.style.display = "none";
        error404.style.display = "block";
        error404.classList.add("fadeIn");
        return;
      }

      error404.style.display = "none";
      error404.classList.remove("fadeIn");

      const image = document.querySelector(".weather-main img");
      const temperature = document.querySelector(".weather-main .temp");
      const description = document.querySelector(".weather-main .desc");
      const humidity = document.querySelector(
        ".weather-info .humidity span"
      );
      const wind = document.querySelector(".weather-info .wind span");

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "images/clear.png";
          break;

        case "Rain":
          image.src = "images/rain.png";
          break;

        case "Snow":
          image.src = "images/snow.png";
          break;

        case "Clouds":
          image.src = "images/cloud.png";
          break;

        case "Haze":
          image.src = "images/mist.png";
          break;

        default:
          image.src = "";
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity} %`;
      wind.innerHTML = `${parseInt(json.wind.speed)} km/h`;

      weatherBox.style.display = "";
      weatherinfo.style.display = "";
      weatherBox.classList.add("fadeIn");
      weatherinfo.classList.add("fadeIn");
      container.style.height = "605px";
    });
});
