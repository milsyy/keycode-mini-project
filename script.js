const key = document.querySelector("#key");
const keyCode = document.querySelector("#keyCode");
const code = document.querySelector("#code");

let onKeyPress = (e) => {
  key.textContent = e.key;
  keyCode.textContent = e.keyCode;
  code.textContent = e.code;
};

document.body.addEventListener("keypress", onKeyPress);
