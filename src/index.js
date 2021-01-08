document.addEventListener("DOMContentLoaded", () => {


  let taskForm = document.querySelector("form#create-task-form");
  let taskDescription = document.querySelector("input#new-task-description");
  let taskPriority = document.querySelector("select#new-task-priority");
  let tasksList = document.querySelector("ul#tasks");

  taskForm.addEventListener("submit", submitForm);
  tasksList.addEventListener("click", removeListItem);

  function submitForm(e) {
    e.preventDefault();
    let newTask = taskDescription.value;
    let newPriority = taskPriority.value;
    tasksList.innerHTML += `<li class="${newPriority}">${newTask}</li>`;
    taskForm.reset();
  };

  function removeListItem(e) {
    let listItem = e.target
    if (listItem.tagName === "LI")
      listItem.remove();
  }


});