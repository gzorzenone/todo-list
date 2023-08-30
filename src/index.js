import { displayDialog, populateSidebar } from "./displayController";
import { newProjectDialog } from "./newProject";
import { newTodoDialog } from "./newTodo";
import "./style.css";

const content = document.createElement("div");
content.classList.add("content");
document.body.appendChild(content);

const sidebar = document.createElement("div");
sidebar.classList.add("sidebar");
content.appendChild(sidebar);

const main = document.createElement("div");
main.classList.add("main");
content.appendChild(main);

const newProjectBtn = document.createElement("button");
newProjectBtn.textContent = "New Project";
newProjectBtn.addEventListener("click", () => {
  displayDialog(newProjectDialog());
});
sidebar.appendChild(newProjectBtn);

const newTodoBtn = document.createElement("button");
newTodoBtn.textContent = "New Todo";
newTodoBtn.addEventListener("click", () => {
  displayDialog(newTodoDialog());
});
sidebar.appendChild(newTodoBtn);

const items = document.createElement("div");
items.classList.add("items");
sidebar.appendChild(items);

const info = document.createElement("div");
info.classList.add("info");
main.appendChild(info);

const todos = document.createElement("div");
todos.classList.add("todos");
main.appendChild(todos);

populateSidebar();

export { content, sidebar, main, items, info, todos };