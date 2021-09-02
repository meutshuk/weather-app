import "./style.css";
import weather from "./asset/weather";
import header from "./asset/header";

header();
// weather();

const superSecretAPIKEYNoStealPlzLoveYou = "05586f6565c4b0427a3d902d1a5ed0e9";
const mainDiv = document.createElement("div");
mainDiv.classList.add("main");
const container = document.querySelector(".container");
container.appendChild(mainDiv);

async function weatherData(location) {
  if (!location) location = "wollongong";

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=${superSecretAPIKEYNoStealPlzLoveYou}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  weather(data);
}

weatherData("nepal");
export default weatherData;
