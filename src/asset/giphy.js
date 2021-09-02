async function giphy(text) {
  const body = document.querySelector("body");

  const gif = await fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=MAtR4i91jTP8Hpci7vpVwosGSQ3Tmr7y&s=" +
      text,
    { mode: "cors" }
  );
  const replyGif = await gif.json();
  body.style.backgroundImage = `url(${replyGif.data.images.original.url})`;
  //   img.src = replyGif.data.images.original.url;
}
