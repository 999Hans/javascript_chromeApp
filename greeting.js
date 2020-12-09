const form = document.querySelector(".js-form"),
  input = form.querySelector("input");

const greeting = document.querySelector(".js-greeting");

function saveName(text) {
  localStorage.setItem("currentName", text);
}

function submitName(event) {
  event.preventDefault();
  const currentValue = input.value;
  saveName(currentValue);
  paintGreeting(currentValue);
}
function askForName() {
  form.classList.add("showing");
  form.addEventListener("submit", submitName);
}
function paintGreeting(text) {
  form.classList.remove("showing");
  greeting.classList.remove("nonDisplay");
  greeting.innerHTML = `Hello ${text}`;
}

function nameCheck() {
  const name = localStorage.getItem("currentName");
  if (name === null) {
    askForName();
  } else {
    paintGreeting(name);
  }
}

function init() {
  nameCheck();
}

init();
