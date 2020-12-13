const todoForm = document.querySelector(".js-todoForm"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".js-todoList"),
  checkList = document.querySelector(".js-checkList");

function makeList(text) {
  //   const li = document.createElement("li");
  //   li.innerText = text;
  //   todoList.appendChild(li);
  const checkContainer = document.createElement("div");
  const check = document.createElement("input");
  const checkContent = document.createElement("span");
  const br = document.createElement("br");
  check.type = "checkbox";
  checkContent.innerText = text;
  checkContainer.appendChild(check);
  checkContainer.appendChild(checkContent);
  checkContainer.appendChild(br);

  checkList.appendChild(checkContainer);
}

function todoSubmit(event) {
  event.preventDefault();
  localStorage.setItem("todo", JSON.stringify(todoInput.value));
  makeList(JSON.parse(localStorage.getItem("todo")));
}

function init() {
  todoForm.addEventListener("submit", todoSubmit);
}

init();
