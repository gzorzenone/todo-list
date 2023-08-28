import { Todo } from "./todo";

function Project(title, description, todos) {
  return {
    title,
    description,
    todos,
  };
};

let projects = [
  new Project("Default", "Todo List's default project.", [
    new Todo("Default", "Default todo.", "dd/mm/yyyy", "Medium", 0),
  ]),
];

export { Project, projects };