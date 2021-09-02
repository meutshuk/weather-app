export default function weather(data) {
  const mainDiv = document.querySelector(".main");
  const body = document.querySelector("body");

  const div = document.createElement("div");
  const cityName = document.createElement("h1");
  const temp = document.createElement("h2");

  cityName.innerText = data.name;
  temp.innerText = data.main.temp;
  console.log(data.weather[0].main);

  mainDiv.innerText = "";

  div.appendChild(temp);
  div.appendChild(cityName);
  mainDiv.appendChild(div);

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
