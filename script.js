const key = document.querySelector("#key");
const keyCode = document.querySelector("#keyCode");
const code = document.querySelector("#code");

let onKeyPress = (e) => {
  e.key === " " ? (key.textContent = "Space") : (key.textContent = e.key);
  keyCode.textContent = e.keyCode;
  code.textContent = e.code;
};

window.addEventListener("keydown", onKeyPress);
