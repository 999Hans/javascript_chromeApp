const todoForm = document.querySelector(".js-todoForm"),
  todoInput = todoForm.querySelector("input");

function todoSubmit(event) {
  event.preventDefault();
  console.log(todoInput.value);
}

function init() {
  todoForm.addEventListener("submit", todoSubmit);
}

init();
