import { projects } from "./project";
import { populateInfo, populateTodos } from "./displayController";
import { newTodo } from "./newTodo";

function editTodo(currentProject, index) {
  let project = document.querySelector("#todoProject").value;

  if(currentProject == project) {
    projects[project].todos[index].title = document.querySelector("#todoTitle").value;
    projects[project].todos[index].description = document.querySelector("#todoDescription").value;
    projects[project].todos[index].dueDate = document.querySelector("#todoDueDate").value;
    projects[project].todos[index].priority = document.querySelector("#todoPriority").value;
    projects[project].todos[index].project = document.querySelector("#todoProject").value;
  }
  else {
    projects[currentProject].todos.splice(index, 1);
    newTodo();
  }
}

function editTodoDialog(todo, index) {
  let currentProject = todo.project;

  const dialog = document.createElement("dialog");

  const form = document.createElement("form");
  dialog.appendChild(form);

  const legend = document.createElement("legend");
  legend.textContent = "Edit todo:";
  form.appendChild(legend);

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "todoTitle");
  titleLabel.textContent = "Title:";
  form.appendChild(titleLabel);
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("id", "todoTitle");
  titleInput.setAttribute("name", "todoTitle");
  titleInput.value = todo.title;
  form.appendChild(titleInput);

  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "todoDescription");
  descriptionLabel.textContent = "Description:";
  form.appendChild(descriptionLabel);
  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("id", "todoDescription");
  descriptionInput.setAttribute("name", "todoDescription");
  descriptionInput.value = todo.description;
  form.appendChild(descriptionInput);

  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "todoDueDate");
  dueDateLabel.textContent = "Due Date:";
  form.appendChild(dueDateLabel);
  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("type", "date");
  dueDateInput.setAttribute("id", "todoDueDate");
  dueDateInput.setAttribute("name", "todoDueDate");
  dueDateInput.value = todo.dueDate;
  form.appendChild(dueDateInput);

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "todoPriority");
  priorityLabel.textContent = "Priority:";
  form.appendChild(priorityLabel);
  const priorityInput = document.createElement("input");
  priorityInput.setAttribute("type", "text");
  priorityInput.setAttribute("id", "todoPriority");
  priorityInput.setAttribute("name", "todoPriority");
  priorityInput.value = todo.priority;
  form.appendChild(priorityInput);

  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("for", "todoProject");
  projectLabel.textContent = "Project:";
  form.appendChild(projectLabel);
  const projectInput = document.createElement("select");
  projectInput.setAttribute("id", "todoProject");
  projectInput.setAttribute("name", "todoProject");
  projects.forEach((project, index) => {
    const projectOption = document.createElement("option");
    projectOption.setAttribute("value", index);
    projectOption.textContent = project.title;
    if(index == currentProject) {
      projectOption.selected = true;
    }
    projectInput.appendChild(projectOption);
  });
  form.appendChild(projectInput);

  const cancelBtn = document.createElement("button");
  cancelBtn.setAttribute("type", "submit");
  cancelBtn.setAttribute("formmethod", "dialog");
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => {
    dialog.remove();
  });
  form.appendChild(cancelBtn);

  const confirmBtn = document.createElement("button");
  confirmBtn.setAttribute("type", "submit");
  confirmBtn.setAttribute("id", "confirmBtn");
  confirmBtn.textContent = "Confirm";
  confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    editTodo(currentProject, index);
    let project = document.querySelector("#todoProject").value;
    populateInfo(projects[project], project);
    populateTodos(projects[project], project);
    dialog.close();
    dialog.remove();
  });
  form.appendChild(confirmBtn);

  return dialog;
}

export { editTodoDialog };