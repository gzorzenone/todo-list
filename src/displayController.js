import { projects } from "./project";
import { items, info, todos } from ".";

function displayDialog(dialog) {
  document.body.appendChild(dialog);
  dialog.showModal();
}

function populateSidebar() {
  items.replaceChildren();
  projects.forEach((project) => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.textContent = project.title;
    item.addEventListener("click", () => {
      populateInfo(project);
      populateTodos(project);
    });
    items.appendChild(item);
  });
}

function populateInfo(project) {
  info.replaceChildren();
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = project.title;
  info.appendChild(title);

  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent = project.description;
  info.appendChild(description);
}

function populateTodos(project) {
  todos.replaceChildren();
  project.todos.forEach((todo) => {
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

    todos.appendChild(card);
  });
}

export { displayDialog, populateSidebar, populateTodos };