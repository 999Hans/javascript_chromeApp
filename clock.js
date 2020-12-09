const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function plusZero(num) {
  // if식 표현
  // if (num < 10) {
  //   return `0${num}`;
  // } else {
  //   return `${num}`;
  // }
  //  ``안에 if문 넣는 방법
  return `${num < 10 ? `0${num}` : `${num}`}`;
}

function getTime() {
  const date = new Date();
  const seconds = plusZero(date.getSeconds());
  const minutes = plusZero(date.getMinutes());
  const hours = plusZero(date.getHours());

  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
