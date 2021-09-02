import weatherData from "../index";

export default function header() {
  const container = document.querySelector(".container");

  const form = document.createElement("form");
  const header = document.createElement("header");
  const logo = document.createElement("div");

  const inputText = document.createElement("input");
  inputText.type = "text";
  inputText.placeholder = "Search City";

  const btn = document.createElement("button");
  btn.type = "submit";
  btn.classList = ["search"];

  const btnSpam = document.createElement("span");
  btnSpam.classList.add("material-icons", "search-icon");
  btnSpam.innerText = "search";

  const logoSpan = document.createElement("span");
  logoSpan.innerText = "air";
  logoSpan.classList.add("material-icons", "weather-logo");

  const logoNameSpan = document.createElement("span");
  logoNameSpan.innerText = "Weather App";

  const userImg = document.createElement("img");
  userImg.classList.add("user-image");

  const aImg = document.createElement("a");
  aImg.href = "https://github.com/meutshuk";

  btn.appendChild(btnSpam);
  logo.appendChild(logoSpan);
  logo.appendChild(logoNameSpan);
  form.appendChild(inputText);
  form.appendChild(btn);
  header.appendChild(logo);
  header.appendChild(form);

  container.appendChild(header);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    weatherData(inputText.value);
    inputText.value = "";
  });

  async function showAvatar() {
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/meutshuk`);
    let githubUser = await githubResponse.json();

    userImg.src = githubUser.avatar_url;

    aImg.appendChild(userImg);
    header.appendChild(aImg);
  }
  showAvatar();
}
