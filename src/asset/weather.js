export default function weather(data) {
  const mainDiv = document.querySelector(".main");

  const locationNameDiv = document.createElement("div");
  const city = document.createElement("h1");
  const weatherCondition = document.createElement("span");
  const weatherImg = document.createElement("img");

  const tempDiv = document.createElement("div");
  const tempSpan = document.createElement("span");

  const tempDescriptionDiv = document.createElement("div");
  const maxTemp = document.createElement("span");
  const minTemp = document.createElement("span");
  const humidity = document.createElement("span");
  const feelsLike = document.createElement("span");

  locationNameDiv.classList.add("locationName");
  city.classList.add("city");
  weatherCondition.classList.add("weatherCondition");
  weatherImg.classList.add("weatherImg");
  tempDiv.classList.add("tempDiv");
  tempSpan.classList.add("temp");
  tempDescriptionDiv.classList.add("tempDescription");
  maxTemp.classList.add("information");
  minTemp.classList.add("information");
  feelsLike.classList.add("information");
  humidity.classList.add("information");

  city.innerText = data.name; //* City Name
  weatherCondition.innerText = data.weather[0].description; //* says if the sky is cloudy or rainy

  tempSpan.innerText = data.main.temp.toFixed(1); //* Temperature number
  maxTemp.innerText = `Maximum Temp: ${data.main.temp_max.toFixed(1)}`;
  minTemp.innerText = `Minimum Temp: ${data.main.temp_min.toFixed(1)}`;
  humidity.innerText = `Humidity: ${data.main.humidity.toFixed(1)}`;
  feelsLike.innerText = `Feels Like: ${data.main.feels_like.toFixed(1)}`;

  weatherImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  mainDiv.innerText = "";

  weatherCondition.appendChild(weatherImg);
  locationNameDiv.appendChild(weatherCondition);
  locationNameDiv.appendChild(city);
  tempDiv.appendChild(tempSpan);
  tempDescriptionDiv.appendChild(maxTemp);
  tempDescriptionDiv.appendChild(minTemp);
  tempDescriptionDiv.appendChild(humidity);
  tempDescriptionDiv.appendChild(feelsLike);
  tempDiv.appendChild(tempDescriptionDiv);

  mainDiv.appendChild(locationNameDiv);
  mainDiv.appendChild(tempDiv);
  // giphy(data.weather[0].main);
}

async function giphy(text) {
  const body = document.querySelector("body");
  const gif = await fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=MAtR4i91jTP8Hpci7vpVwosGSQ3Tmr7y&s=" +
      text,
    { mode: "cors" }
  );
  const replyGif = await gif.json();
  body.style.backgroundImage = `url(${replyGif.data.images.original.url})`;
}
