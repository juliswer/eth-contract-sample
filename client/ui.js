const taskForm = document.querySelector("#taskForm");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const titleTask = taskForm["title"].value;
  const descriptionTask = taskForm["description"].value;

  App.createTask(titleTask, descriptionTask);
});
