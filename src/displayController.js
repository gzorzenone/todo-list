import { projects } from "./project";
import { items } from ".";

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
    items.appendChild(item);
  });
}

export { displayDialog, populateSidebar };

// item.addEventListener("click", () => {  
    //   let title = document.createElement("div");
    //   title.classList.add("title");
    //   title.textContent = project.title;
    //   info.appendChild(title);
  
    //   let description = document.createElement("div");
    //   description.classList.add("description");
    //   description.textContent = project.description;
    //   info.appendChild(description);
  
    //   project.todos.forEach((todo) => {
    //     let card = document.createElement("div");
    //     card.classList.add("card");

    //     let title = document.createElement("div");
    //     title.classList.add("title");
    //     title.textContent = todo.title;
    //     card.appendChild(title);
  
    //     let description = document.createElement("div");
    //     description.classList.add("description");
    //     description.textContent = todo.description;
    //     card.appendChild(description);
  
    //     let dueDate = document.createElement("div");
    //     dueDate.classList.add("dueDate");
    //     dueDate.textContent = `Due Date: ${todo.dueDate}`;
    //     card.appendChild(dueDate);
  
    //     let priority = document.createElement("div");
    //     priority.classList.add("priority");
    //     priority.textContent = `Priority: ${todo.priority}`;
    //     card.appendChild(priority);

    //     todos.appendChild(card);
    //   });
    // });