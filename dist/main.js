/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayDialog: () => (/* binding */ displayDialog),
/* harmony export */   populateInfo: () => (/* binding */ populateInfo),
/* harmony export */   populateSidebar: () => (/* binding */ populateSidebar),
/* harmony export */   populateTodos: () => (/* binding */ populateTodos)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _editTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editTodo */ "./src/editTodo.js");
/* harmony import */ var _editProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editProject */ "./src/editProject.js");





function displayDialog(dialog) {
  document.body.appendChild(dialog);
  dialog.showModal();
}

function populateSidebar() {
  ___WEBPACK_IMPORTED_MODULE_1__.items.replaceChildren();
  _project__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project, index) => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.textContent = project.title;
    item.addEventListener("click", () => {
      populateInfo(project, index);
      populateTodos(project, index);
    });
    ___WEBPACK_IMPORTED_MODULE_1__.items.appendChild(item);
  });
}

function populateInfo(project, index) {
  ___WEBPACK_IMPORTED_MODULE_1__.info.replaceChildren();
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = project.title;
  ___WEBPACK_IMPORTED_MODULE_1__.info.appendChild(title);

  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent = project.description;
  ___WEBPACK_IMPORTED_MODULE_1__.info.appendChild(description);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => {
    displayDialog((0,_editProject__WEBPACK_IMPORTED_MODULE_3__.editProjectDialog)(project, index));
  });
  ___WEBPACK_IMPORTED_MODULE_1__.info.appendChild(editBtn);

  const removeBtn = document.createElement("button");
  removeBtn.setAttribute("data-index-number", index);
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    _project__WEBPACK_IMPORTED_MODULE_0__.projects.splice(removeBtn.dataset.indexNumber, 1);
    populateSidebar();
    ___WEBPACK_IMPORTED_MODULE_1__.info.replaceChildren();
    ___WEBPACK_IMPORTED_MODULE_1__.todos.replaceChildren();
  });
  ___WEBPACK_IMPORTED_MODULE_1__.info.appendChild(removeBtn);
}

function populateTodos(project, projectIndex) {
  ___WEBPACK_IMPORTED_MODULE_1__.todos.replaceChildren();
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
      displayDialog((0,_editTodo__WEBPACK_IMPORTED_MODULE_2__.editTodoDialog)(todo, index));
    });
    card.appendChild(editBtn);

    const removeBtn = document.createElement("button");
    removeBtn.setAttribute("data-index-number", index);
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      _project__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].todos.splice(removeBtn.dataset.indexNumber, 1);
      populateTodos(project, projectIndex);
    });
    card.appendChild(removeBtn);

    ___WEBPACK_IMPORTED_MODULE_1__.todos.appendChild(card);
  });
}



/***/ }),

/***/ "./src/editProject.js":
/*!****************************!*\
  !*** ./src/editProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editProjectDialog: () => (/* binding */ editProjectDialog)
/* harmony export */ });
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");


function editProject(project) {
  project.title = document.querySelector("#projectTitle").value;
  project.description = document.querySelector("#projectDescription").value;
}

function editProjectDialog(project, index) {
  const dialog = document.createElement("dialog");

  const form = document.createElement("form");
  dialog.appendChild(form);

  const legend = document.createElement("legend");
  legend.textContent = "Edit project:";
  form.appendChild(legend);

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "projectTitle");
  titleLabel.textContent = "Title:";
  form.appendChild(titleLabel);
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("id", "projectTitle");
  titleInput.setAttribute("name", "projectTitle");
  titleInput.value = project.title;
  form.appendChild(titleInput);

  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "projectDescription");
  descriptionLabel.textContent = "Description:";
  form.appendChild(descriptionLabel);
  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("id", "projectDescription");
  descriptionInput.setAttribute("name", "projectDescription");
  descriptionInput.value = project.description;
  form.appendChild(descriptionInput);

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
    editProject(project);
    (0,_displayController__WEBPACK_IMPORTED_MODULE_0__.populateSidebar)();
    (0,_displayController__WEBPACK_IMPORTED_MODULE_0__.populateInfo)(project);
    (0,_displayController__WEBPACK_IMPORTED_MODULE_0__.populateTodos)(project, index)
    dialog.close();
    dialog.remove();
  });
  form.appendChild(confirmBtn);

  return dialog;
}



/***/ }),

/***/ "./src/editTodo.js":
/*!*************************!*\
  !*** ./src/editTodo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editTodoDialog: () => (/* binding */ editTodoDialog)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _newTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newTodo */ "./src/newTodo.js");




function editTodo(currentProject, index) {
  let project = document.querySelector("#todoProject").value;

  if(currentProject == project) {
    _project__WEBPACK_IMPORTED_MODULE_0__.projects[project].todos[index].title = document.querySelector("#todoTitle").value;
    _project__WEBPACK_IMPORTED_MODULE_0__.projects[project].todos[index].description = document.querySelector("#todoDescription").value;
    _project__WEBPACK_IMPORTED_MODULE_0__.projects[project].todos[index].dueDate = document.querySelector("#todoDueDate").value;
    _project__WEBPACK_IMPORTED_MODULE_0__.projects[project].todos[index].priority = document.querySelector("#todoPriority").value;
    _project__WEBPACK_IMPORTED_MODULE_0__.projects[project].todos[index].project = document.querySelector("#todoProject").value;
  }
  else {
    _project__WEBPACK_IMPORTED_MODULE_0__.projects[currentProject].todos.splice(index, 1);
    (0,_newTodo__WEBPACK_IMPORTED_MODULE_2__.newTodo)();
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
  _project__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project, index) => {
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
    (0,_displayController__WEBPACK_IMPORTED_MODULE_1__.populateInfo)(_project__WEBPACK_IMPORTED_MODULE_0__.projects[project], project);
    (0,_displayController__WEBPACK_IMPORTED_MODULE_1__.populateTodos)(_project__WEBPACK_IMPORTED_MODULE_0__.projects[project], project);
    dialog.close();
    dialog.remove();
  });
  form.appendChild(confirmBtn);

  return dialog;
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content),
/* harmony export */   info: () => (/* binding */ info),
/* harmony export */   items: () => (/* binding */ items),
/* harmony export */   main: () => (/* binding */ main),
/* harmony export */   sidebar: () => (/* binding */ sidebar),
/* harmony export */   todos: () => (/* binding */ todos)
/* harmony export */ });
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _newTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newTodo */ "./src/newTodo.js");




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
  (0,_displayController__WEBPACK_IMPORTED_MODULE_0__.displayDialog)((0,_newProject__WEBPACK_IMPORTED_MODULE_1__.newProjectDialog)());
});
sidebar.appendChild(newProjectBtn);

const newTodoBtn = document.createElement("button");
newTodoBtn.textContent = "New Todo";
newTodoBtn.addEventListener("click", () => {
  (0,_displayController__WEBPACK_IMPORTED_MODULE_0__.displayDialog)((0,_newTodo__WEBPACK_IMPORTED_MODULE_2__.newTodoDialog)());
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

(0,_displayController__WEBPACK_IMPORTED_MODULE_0__.populateSidebar)();



/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newProjectDialog: () => (/* binding */ newProjectDialog)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");



function newProject() {
  let title = document.querySelector("#projectTitle").value;
  let description = document.querySelector("#projectDescription").value;
  let todos = [];

  _project__WEBPACK_IMPORTED_MODULE_0__.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project(title, description, todos));
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
    newProject();
    (0,_displayController__WEBPACK_IMPORTED_MODULE_1__.populateSidebar)();
    dialog.close();
    dialog.remove();
  });
  form.appendChild(confirmBtn);

  return dialog;
}



/***/ }),

/***/ "./src/newTodo.js":
/*!************************!*\
  !*** ./src/newTodo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newTodo: () => (/* binding */ newTodo),
/* harmony export */   newTodoDialog: () => (/* binding */ newTodoDialog)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");




function newTodo() {
  let title = document.querySelector("#todoTitle").value;
  let description = document.querySelector("#todoDescription").value;
  let dueDate = document.querySelector("#todoDueDate").value;
  let priority = document.querySelector("#todoPriority").value;
  let project = document.querySelector("#todoProject").value;

  _project__WEBPACK_IMPORTED_MODULE_0__.projects[project].todos.push(new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo(title, description, dueDate, priority, project));
}

function newTodoDialog() {
  const dialog = document.createElement("dialog");

  const form = document.createElement("form");
  dialog.appendChild(form);

  const legend = document.createElement("legend");
  legend.textContent = "Create new todo:";
  form.appendChild(legend);

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "todoTitle");
  titleLabel.textContent = "Title:";
  form.appendChild(titleLabel);
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("id", "todoTitle");
  titleInput.setAttribute("name", "todoTitle");
  form.appendChild(titleInput);

  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "todoDescription");
  descriptionLabel.textContent = "Description:";
  form.appendChild(descriptionLabel);
  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("id", "todoDescription");
  descriptionInput.setAttribute("name", "todoDescription");
  form.appendChild(descriptionInput);

  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "todoDueDate");
  dueDateLabel.textContent = "Due Date:";
  form.appendChild(dueDateLabel);
  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("type", "date");
  dueDateInput.setAttribute("id", "todoDueDate");
  dueDateInput.setAttribute("name", "todoDueDate");
  form.appendChild(dueDateInput);

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "todoPriority");
  priorityLabel.textContent = "Priority:";
  form.appendChild(priorityLabel);
  const priorityInput = document.createElement("input");
  priorityInput.setAttribute("type", "text");
  priorityInput.setAttribute("id", "todoPriority");
  priorityInput.setAttribute("name", "todoPriority");
  form.appendChild(priorityInput);

  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("for", "todoProject");
  projectLabel.textContent = "Project:";
  form.appendChild(projectLabel);
  const projectInput = document.createElement("select");
  projectInput.setAttribute("id", "todoProject");
  projectInput.setAttribute("name", "todoProject");
  _project__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project, index) => {
    const projectOption = document.createElement("option");
    projectOption.setAttribute("value", index);
    projectOption.textContent = project.title;
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
    newTodo();
    let project = document.querySelector("#todoProject").value;
    (0,_displayController__WEBPACK_IMPORTED_MODULE_2__.populateInfo)(_project__WEBPACK_IMPORTED_MODULE_0__.projects[project], project);
    (0,_displayController__WEBPACK_IMPORTED_MODULE_2__.populateTodos)(_project__WEBPACK_IMPORTED_MODULE_0__.projects[project], project);
    dialog.close();
    dialog.remove();
  });
  form.appendChild(confirmBtn);

  return dialog;
}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


function Project(title, description, todos) {
  return {
    title,
    description,
    todos,
  };
};

let projects = [
  new Project("Default", "Todo List's default project.", [
    new _todo__WEBPACK_IMPORTED_MODULE_0__.Todo("Default", "Default todo.", "dd/mm/yyyy", "Medium", 0),
  ]),
];



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
function Todo(title, description, dueDate, priority, project) {
  return {
    title,
    description,
    dueDate,
    priority,
    project,
  };
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhDQUFRO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdFQUFZLENBQUMsOENBQVE7QUFDekIsSUFBSSxpRUFBYSxDQUFDLDhDQUFRO0FBQzFCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEc4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsdUNBQUk7QUFDWjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lZGl0UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWRpdFRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXdQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXdUb2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGl0ZW1zLCBpbmZvLCB0b2RvcyB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBlZGl0VG9kb0RpYWxvZyB9IGZyb20gXCIuL2VkaXRUb2RvXCI7XG5pbXBvcnQgeyBlZGl0UHJvamVjdERpYWxvZyB9IGZyb20gXCIuL2VkaXRQcm9qZWN0XCI7XG5cbmZ1bmN0aW9uIGRpc3BsYXlEaWFsb2coZGlhbG9nKSB7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcbiAgZGlhbG9nLnNob3dNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVNpZGViYXIoKSB7XG4gIGl0ZW1zLnJlcGxhY2VDaGlsZHJlbigpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgaXRlbS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcG9wdWxhdGVJbmZvKHByb2plY3QsIGluZGV4KTtcbiAgICAgIHBvcHVsYXRlVG9kb3MocHJvamVjdCwgaW5kZXgpO1xuICAgIH0pO1xuICAgIGl0ZW1zLmFwcGVuZENoaWxkKGl0ZW0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVJbmZvKHByb2plY3QsIGluZGV4KSB7XG4gIGluZm8ucmVwbGFjZUNoaWxkcmVuKCk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gIGluZm8uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XG4gIGluZm8uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkaXNwbGF5RGlhbG9nKGVkaXRQcm9qZWN0RGlhbG9nKHByb2plY3QsIGluZGV4KSk7XG4gIH0pO1xuICBpbmZvLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHJlbW92ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LW51bWJlclwiLCBpbmRleCk7XG4gIHJlbW92ZUJ0bi50ZXh0Q29udGVudCA9IFwiUmVtb3ZlXCI7XG4gIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RzLnNwbGljZShyZW1vdmVCdG4uZGF0YXNldC5pbmRleE51bWJlciwgMSk7XG4gICAgcG9wdWxhdGVTaWRlYmFyKCk7XG4gICAgaW5mby5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB0b2Rvcy5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgfSk7XG4gIGluZm8uYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVUb2Rvcyhwcm9qZWN0LCBwcm9qZWN0SW5kZXgpIHtcbiAgdG9kb3MucmVwbGFjZUNoaWxkcmVuKCk7XG4gIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImR1ZURhdGVcIik7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHt0b2RvLmR1ZURhdGV9YDtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHt0b2RvLnByaW9yaXR5fWA7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGlzcGxheURpYWxvZyhlZGl0VG9kb0RpYWxvZyh0b2RvLCBpbmRleCkpO1xuICAgIH0pO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbiAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlbW92ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LW51bWJlclwiLCBpbmRleCk7XG4gICAgcmVtb3ZlQnRuLnRleHRDb250ZW50ID0gXCJSZW1vdmVcIjtcbiAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udG9kb3Muc3BsaWNlKHJlbW92ZUJ0bi5kYXRhc2V0LmluZGV4TnVtYmVyLCAxKTtcbiAgICAgIHBvcHVsYXRlVG9kb3MocHJvamVjdCwgcHJvamVjdEluZGV4KTtcbiAgICB9KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XG5cbiAgICB0b2Rvcy5hcHBlbmRDaGlsZChjYXJkKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlEaWFsb2csIHBvcHVsYXRlU2lkZWJhciwgcG9wdWxhdGVJbmZvLCBwb3B1bGF0ZVRvZG9zIH07IiwiaW1wb3J0IHsgcG9wdWxhdGVJbmZvLCBwb3B1bGF0ZVNpZGViYXIsIHBvcHVsYXRlVG9kb3MgfSBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbGxlclwiO1xuXG5mdW5jdGlvbiBlZGl0UHJvamVjdChwcm9qZWN0KSB7XG4gIHByb2plY3QudGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RUaXRsZVwiKS52YWx1ZTtcbiAgcHJvamVjdC5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdERlc2NyaXB0aW9uXCIpLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdERpYWxvZyhwcm9qZWN0LCBpbmRleCkge1xuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XG4gIGxlZ2VuZC50ZXh0Q29udGVudCA9IFwiRWRpdCBwcm9qZWN0OlwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGxlZ2VuZCk7XG5cbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0VGl0bGVcIik7XG4gIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdFRpdGxlXCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0VGl0bGVcIik7XG4gIHRpdGxlSW5wdXQudmFsdWUgPSBwcm9qZWN0LnRpdGxlO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdERlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3REZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdERlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZShcImZvcm1tZXRob2RcIiwgXCJkaWFsb2dcIik7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRpYWxvZy5yZW1vdmUoKTtcbiAgfSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uZmlybUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBjb25maXJtQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29uZmlybUJ0blwiKTtcbiAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xuICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlZGl0UHJvamVjdChwcm9qZWN0KTtcbiAgICBwb3B1bGF0ZVNpZGViYXIoKTtcbiAgICBwb3B1bGF0ZUluZm8ocHJvamVjdCk7XG4gICAgcG9wdWxhdGVUb2Rvcyhwcm9qZWN0LCBpbmRleClcbiAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICBkaWFsb2cucmVtb3ZlKCk7XG4gIH0pO1xuICBmb3JtLmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xuXG4gIHJldHVybiBkaWFsb2c7XG59XG5cbmV4cG9ydCB7IGVkaXRQcm9qZWN0RGlhbG9nIH07IiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBwb3B1bGF0ZUluZm8sIHBvcHVsYXRlVG9kb3MgfSBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbGxlclwiO1xuaW1wb3J0IHsgbmV3VG9kbyB9IGZyb20gXCIuL25ld1RvZG9cIjtcblxuZnVuY3Rpb24gZWRpdFRvZG8oY3VycmVudFByb2plY3QsIGluZGV4KSB7XG4gIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvUHJvamVjdFwiKS52YWx1ZTtcblxuICBpZihjdXJyZW50UHJvamVjdCA9PSBwcm9qZWN0KSB7XG4gICAgcHJvamVjdHNbcHJvamVjdF0udG9kb3NbaW5kZXhdLnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvVGl0bGVcIikudmFsdWU7XG4gICAgcHJvamVjdHNbcHJvamVjdF0udG9kb3NbaW5kZXhdLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvRGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgcHJvamVjdHNbcHJvamVjdF0udG9kb3NbaW5kZXhdLmR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9EdWVEYXRlXCIpLnZhbHVlO1xuICAgIHByb2plY3RzW3Byb2plY3RdLnRvZG9zW2luZGV4XS5wcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb1ByaW9yaXR5XCIpLnZhbHVlO1xuICAgIHByb2plY3RzW3Byb2plY3RdLnRvZG9zW2luZGV4XS5wcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvUHJvamVjdFwiKS52YWx1ZTtcbiAgfVxuICBlbHNlIHtcbiAgICBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICBuZXdUb2RvKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZWRpdFRvZG9EaWFsb2codG9kbywgaW5kZXgpIHtcbiAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gdG9kby5wcm9qZWN0O1xuXG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcbiAgbGVnZW5kLnRleHRDb250ZW50ID0gXCJFZGl0IHRvZG86XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9UaXRsZVwiKTtcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvVGl0bGVcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG9UaXRsZVwiKTtcbiAgdGl0bGVJbnB1dC52YWx1ZSA9IHRvZG8udGl0bGU7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvRGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOlwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb0Rlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0b2RvRGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9EdWVEYXRlXCIpO1xuICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvRHVlRGF0ZVwiKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0b2RvRHVlRGF0ZVwiKTtcbiAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdG9kby5kdWVEYXRlO1xuICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvUHJpb3JpdHlcIik7XG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb1ByaW9yaXR5XCIpO1xuICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0b2RvUHJpb3JpdHlcIik7XG4gIHByaW9yaXR5SW5wdXQudmFsdWUgPSB0b2RvLnByaW9yaXR5O1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuXG4gIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9Qcm9qZWN0XCIpO1xuICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3Q6XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb1Byb2plY3RcIik7XG4gIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG9kb1Byb2plY3RcIik7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJvamVjdE9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBpbmRleCk7XG4gICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgaWYoaW5kZXggPT0gY3VycmVudFByb2plY3QpIHtcbiAgICAgIHByb2plY3RPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG4gIH0pO1xuICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG5cbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoXCJmb3JtbWV0aG9kXCIsIFwiZGlhbG9nXCIpO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkaWFsb2cucmVtb3ZlKCk7XG4gIH0pO1xuICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbmZpcm1CdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgY29uZmlybUJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbmZpcm1CdG5cIik7XG4gIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSBcIkNvbmZpcm1cIjtcbiAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZWRpdFRvZG8oY3VycmVudFByb2plY3QsIGluZGV4KTtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb1Byb2plY3RcIikudmFsdWU7XG4gICAgcG9wdWxhdGVJbmZvKHByb2plY3RzW3Byb2plY3RdLCBwcm9qZWN0KTtcbiAgICBwb3B1bGF0ZVRvZG9zKHByb2plY3RzW3Byb2plY3RdLCBwcm9qZWN0KTtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICBkaWFsb2cucmVtb3ZlKCk7XG4gIH0pO1xuICBmb3JtLmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xuXG4gIHJldHVybiBkaWFsb2c7XG59XG5cbmV4cG9ydCB7IGVkaXRUb2RvRGlhbG9nIH07IiwiaW1wb3J0IHsgZGlzcGxheURpYWxvZywgcG9wdWxhdGVTaWRlYmFyIH0gZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IG5ld1Byb2plY3REaWFsb2cgfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5pbXBvcnQgeyBuZXdUb2RvRGlhbG9nIH0gZnJvbSBcIi4vbmV3VG9kb1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG5jb250ZW50LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5jb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG5jb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbm5ld1Byb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCI7XG5uZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGRpc3BsYXlEaWFsb2cobmV3UHJvamVjdERpYWxvZygpKTtcbn0pO1xuc2lkZWJhci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnRuKTtcblxuY29uc3QgbmV3VG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5uZXdUb2RvQnRuLnRleHRDb250ZW50ID0gXCJOZXcgVG9kb1wiO1xubmV3VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkaXNwbGF5RGlhbG9nKG5ld1RvZG9EaWFsb2coKSk7XG59KTtcbnNpZGViYXIuYXBwZW5kQ2hpbGQobmV3VG9kb0J0bik7XG5cbmNvbnN0IGl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbml0ZW1zLmNsYXNzTGlzdC5hZGQoXCJpdGVtc1wiKTtcbnNpZGViYXIuYXBwZW5kQ2hpbGQoaXRlbXMpO1xuXG5jb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG5tYWluLmFwcGVuZENoaWxkKGluZm8pO1xuXG5jb25zdCB0b2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50b2Rvcy5jbGFzc0xpc3QuYWRkKFwidG9kb3NcIik7XG5tYWluLmFwcGVuZENoaWxkKHRvZG9zKTtcblxucG9wdWxhdGVTaWRlYmFyKCk7XG5cbmV4cG9ydCB7IGNvbnRlbnQsIHNpZGViYXIsIG1haW4sIGl0ZW1zLCBpbmZvLCB0b2RvcyB9OyIsImltcG9ydCB7IFByb2plY3QsIHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgcG9wdWxhdGVTaWRlYmFyIH0gZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcblxuZnVuY3Rpb24gbmV3UHJvamVjdCgpIHtcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0VGl0bGVcIikudmFsdWU7XG4gIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdERlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICBsZXQgdG9kb3MgPSBbXTtcblxuICBwcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgdG9kb3MpKTtcbn1cblxuZnVuY3Rpb24gbmV3UHJvamVjdERpYWxvZygpIHtcbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xuICBsZWdlbmQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBuZXcgcHJvamVjdDpcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChsZWdlbmQpO1xuXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdFRpdGxlXCIpO1xuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RUaXRsZVwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdFRpdGxlXCIpO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdERlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3REZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdERlc2NyaXB0aW9uXCIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKFwiZm9ybW1ldGhvZFwiLCBcImRpYWxvZ1wiKTtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGlhbG9nLnJlbW92ZSgpO1xuICB9KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25maXJtQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGNvbmZpcm1CdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb25maXJtQnRuXCIpO1xuICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XG4gIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG5ld1Byb2plY3QoKTtcbiAgICBwb3B1bGF0ZVNpZGViYXIoKTtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICBkaWFsb2cucmVtb3ZlKCk7XG4gIH0pO1xuICBmb3JtLmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xuXG4gIHJldHVybiBkaWFsb2c7XG59XG5cbmV4cG9ydCB7IG5ld1Byb2plY3REaWFsb2cgfTsiLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZUluZm8sIHBvcHVsYXRlVG9kb3MgfSBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbGxlclwiO1xuXG5mdW5jdGlvbiBuZXdUb2RvKCkge1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9UaXRsZVwiKS52YWx1ZTtcbiAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvRGVzY3JpcHRpb25cIikudmFsdWU7XG4gIGxldCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvRHVlRGF0ZVwiKS52YWx1ZTtcbiAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvUHJpb3JpdHlcIikudmFsdWU7XG4gIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvUHJvamVjdFwiKS52YWx1ZTtcblxuICBwcm9qZWN0c1twcm9qZWN0XS50b2Rvcy5wdXNoKG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpKTtcbn1cblxuZnVuY3Rpb24gbmV3VG9kb0RpYWxvZygpIHtcbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xuICBsZWdlbmQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBuZXcgdG9kbzpcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChsZWdlbmQpO1xuXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kb1RpdGxlXCIpO1xuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9UaXRsZVwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG9kb1RpdGxlXCIpO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kb0Rlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9EZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG9kb0Rlc2NyaXB0aW9uXCIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9EdWVEYXRlXCIpO1xuICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvRHVlRGF0ZVwiKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0b2RvRHVlRGF0ZVwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuXG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kb1ByaW9yaXR5XCIpO1xuICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9Qcmlvcml0eVwiKTtcbiAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG9kb1ByaW9yaXR5XCIpO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuXG4gIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9Qcm9qZWN0XCIpO1xuICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3Q6XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb1Byb2plY3RcIik7XG4gIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG9kb1Byb2plY3RcIik7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJvamVjdE9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBpbmRleCk7XG4gICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgcHJvamVjdElucHV0LmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuICB9KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKFwiZm9ybW1ldGhvZFwiLCBcImRpYWxvZ1wiKTtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGlhbG9nLnJlbW92ZSgpO1xuICB9KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25maXJtQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGNvbmZpcm1CdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb25maXJtQnRuXCIpO1xuICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XG4gIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG5ld1RvZG8oKTtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb1Byb2plY3RcIikudmFsdWU7XG4gICAgcG9wdWxhdGVJbmZvKHByb2plY3RzW3Byb2plY3RdLCBwcm9qZWN0KTtcbiAgICBwb3B1bGF0ZVRvZG9zKHByb2plY3RzW3Byb2plY3RdLCBwcm9qZWN0KTtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICBkaWFsb2cucmVtb3ZlKCk7XG4gIH0pO1xuICBmb3JtLmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xuXG4gIHJldHVybiBkaWFsb2c7XG59XG5cbmV4cG9ydCB7IG5ld1RvZG8sIG5ld1RvZG9EaWFsb2cgfTsiLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5mdW5jdGlvbiBQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgdG9kb3MpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICB0b2RvcyxcbiAgfTtcbn07XG5cbmxldCBwcm9qZWN0cyA9IFtcbiAgbmV3IFByb2plY3QoXCJEZWZhdWx0XCIsIFwiVG9kbyBMaXN0J3MgZGVmYXVsdCBwcm9qZWN0LlwiLCBbXG4gICAgbmV3IFRvZG8oXCJEZWZhdWx0XCIsIFwiRGVmYXVsdCB0b2RvLlwiLCBcImRkL21tL3l5eXlcIiwgXCJNZWRpdW1cIiwgMCksXG4gIF0pLFxuXTtcblxuZXhwb3J0IHsgUHJvamVjdCwgcHJvamVjdHMgfTsiLCJmdW5jdGlvbiBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIHByb2plY3QsXG4gIH07XG59O1xuXG5leHBvcnQgeyBUb2RvIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==