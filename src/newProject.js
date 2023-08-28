import { Project, projects } from "./project";
import { populateSidebar } from "./displayController";

function newProject() {
  const title = document.querySelector("#projectTitle").value;
  const description = document.querySelector("#projectDescription").value;
  const todos = [];

  projects.push(new Project(title, description, todos));
}

function newProjectDialog() {
  const dialog = document.createElement("dialog");

  const form = document.createElement("form");
  dialog.appendChild(form);

  const legend = document.createElement("legend");
  legend.textContent = "Create new project:";
  form.appendChild(legend);

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "projectTitle");
  titleLabel.textContent = "Title:";
  form.appendChild(titleLabel);
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("id", "projectTitle");
  titleInput.setAttribute("name", "projectTitle");
  form.appendChild(titleInput);

  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "projectDescription");
  descriptionLabel.textContent = "Description:";
  form.appendChild(descriptionLabel);
  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("id", "projectDescription");
  descriptionInput.setAttribute("name", "projectDescription");
  form.appendChild(descriptionInput);

  const cancelBtn = document.createElement("button");
  cancelBtn.setAttribute("type", "submit");
  cancelBtn.setAttribute("formmethod", "dialog");
  cancelBtn.textContent = "Cancel";
  form.appendChild(cancelBtn);

  const confirmBtn = document.createElement("button");
  confirmBtn.setAttribute("type", "submit");
  confirmBtn.setAttribute("id", "confirmBtn");
  confirmBtn.textContent = "Confirm";
  confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    newProject();
    populateSidebar();
    dialog.close();
  });
  form.appendChild(confirmBtn);

  return dialog;
}

export { newProjectDialog };