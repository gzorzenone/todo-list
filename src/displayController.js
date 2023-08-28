import { projects } from "./project";
import { items, info, todos } from ".";
import { editTodoDialog } from "./editTodo";
import { editProjectDialog } from "./editProject";

function displayDialog(dialog) {
  document.body.appendChild(dialog);
  dialog.showModal();
}

function populateSidebar() {
  items.replaceChildren();
  projects.forEach((project, index) => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.textContent = project.title;
    item.addEventListener("click", () => {
      populateInfo(project, index);
      populateTodos(project, index);
    });
    items.appendChild(item);
  });
}

function populateInfo(project, index) {
  info.replaceChildren();
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = project.title;
  info.appendChild(title);

  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent = project.description;
  info.appendChild(description);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => {
    displayDialog(editProjectDialog(project, index));
  });
  info.appendChild(editBtn);

  const removeBtn = document.createElement("button");
  removeBtn.setAttribute("data-index-number", index);
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    projects.splice(removeBtn.dataset.indexNumber, 1);
    populateSidebar();
    info.replaceChildren();
    todos.replaceChildren();
  });
  info.appendChild(removeBtn);
}

function populateTodos(project, projectIndex) {
  todos.replaceChildren();
  project.todos.forEach((todo, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = todo.title;
    card.appendChild(title);

    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = todo.description;
    card.appendChild(description);

    const dueDate = document.createElement("div");
    dueDate.classList.add("dueDate");
    dueDate.textContent = `Due Date: ${todo.dueDate}`;
    card.appendChild(dueDate);

    const priority = document.createElement("div");
    priority.classList.add("priority");
    priority.textContent = `Priority: ${todo.priority}`;
    card.appendChild(priority);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      displayDialog(editTodoDialog(todo, index));
    });
    card.appendChild(editBtn);

    const removeBtn = document.createElement("button");
    removeBtn.setAttribute("data-index-number", index);
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      projects[projectIndex].todos.splice(removeBtn.dataset.indexNumber, 1);
      populateTodos(project, projectIndex);
    });
    card.appendChild(removeBtn);

    todos.appendChild(card);
  });
}

export { displayDialog, populateSidebar, populateInfo, populateTodos };