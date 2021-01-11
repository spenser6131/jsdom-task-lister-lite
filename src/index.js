document.addEventListener("DOMContentLoaded", () => {

  let taskForm = document.querySelector("form#create-task-form");
  let tasksList = document.querySelector("ul#tasks");
  
  taskForm.addEventListener("submit", submitForm);
  tasksList.addEventListener("click", removeListItem);
  
  function submitForm(e) {
    e.preventDefault();
    let taskDescription = document.querySelector("input#new-task-description").value;
    let taskPriority = document.querySelector("select#new-task-priority").value;
    let taskDueDate = document.querySelector("input#new-task-due-date").value;
    tasksList.innerHTML += `<li class="${taskPriority}">${taskDescription}<br>Due ${taskDueDate}</li>`;
    taskForm.reset();
  };

  function removeListItem(e) {
    let listItem = e.target
    if (listItem.tagName === "LI")
      listItem.remove();
  }


});