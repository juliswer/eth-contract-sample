const taskForm = document.querySelector("#taskForm");

document.addEventListener("DOMContentLoaded", () => {
    App.init()
})

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const titleTask = taskForm["title"].value;
  const descriptionTask = taskForm["description"].value;

  App.createTask(titleTask, descriptionTask);
});
