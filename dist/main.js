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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _editProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editProject */ "./src/editProject.js");
/* harmony import */ var _editTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editTodo */ "./src/editTodo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/project.js");





function displayDialog(dialog) {
  document.body.appendChild(dialog);
  dialog.showModal();
}

function populateSidebar() {
  ___WEBPACK_IMPORTED_MODULE_0__.items.replaceChildren();
  _project__WEBPACK_IMPORTED_MODULE_3__.projects.forEach((project, index) => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.textContent = project.title;
    item.addEventListener("click", () => {
      populateInfo(project, index);
      populateTodos(project, index);
    });
    ___WEBPACK_IMPORTED_MODULE_0__.items.appendChild(item);
  });
}

function populateInfo(project, index) {
  ___WEBPACK_IMPORTED_MODULE_0__.info.replaceChildren();
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = project.title;
  ___WEBPACK_IMPORTED_MODULE_0__.info.appendChild(title);

  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent = project.description;
  ___WEBPACK_IMPORTED_MODULE_0__.info.appendChild(description);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => {
    displayDialog((0,_editProject__WEBPACK_IMPORTED_MODULE_1__.editProjectDialog)(project, index));
  });
  ___WEBPACK_IMPORTED_MODULE_0__.info.appendChild(editBtn);

  const removeBtn = document.createElement("button");
  removeBtn.setAttribute("data-index-number", index);
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    _project__WEBPACK_IMPORTED_MODULE_3__.projects.splice(removeBtn.dataset.indexNumber, 1);
    populateSidebar();
    ___WEBPACK_IMPORTED_MODULE_0__.info.replaceChildren();
    ___WEBPACK_IMPORTED_MODULE_0__.todos.replaceChildren();
  });
  ___WEBPACK_IMPORTED_MODULE_0__.info.appendChild(removeBtn);
}

function populateTodos(project, projectIndex) {
  ___WEBPACK_IMPORTED_MODULE_0__.todos.replaceChildren();
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
      _project__WEBPACK_IMPORTED_MODULE_3__.projects[projectIndex].todos.splice(removeBtn.dataset.indexNumber, 1);
      populateTodos(project, projectIndex);
    });
    card.appendChild(removeBtn);

    ___WEBPACK_IMPORTED_MODULE_0__.todos.appendChild(card);
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
    (0,_displayController__WEBPACK_IMPORTED_MODULE_0__.populateInfo)(project, index);
    (0,_displayController__WEBPACK_IMPORTED_MODULE_0__.populateTodos)(project, index);
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
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _newTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTodo */ "./src/newTodo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");




function editTodo(currentProjectIndex, index) {
  let projectIndex = document.querySelector("#todoProject").value;

  if(currentProjectIndex == projectIndex) {
    _project__WEBPACK_IMPORTED_MODULE_2__.projects[projectIndex].todos[index].title = document.querySelector("#todoTitle").value;
    _project__WEBPACK_IMPORTED_MODULE_2__.projects[projectIndex].todos[index].description = document.querySelector("#todoDescription").value;
    _project__WEBPACK_IMPORTED_MODULE_2__.projects[projectIndex].todos[index].dueDate = document.querySelector("#todoDueDate").value;
    _project__WEBPACK_IMPORTED_MODULE_2__.projects[projectIndex].todos[index].priority = document.querySelector("#todoPriority").value;
    _project__WEBPACK_IMPORTED_MODULE_2__.projects[projectIndex].todos[index].project = document.querySelector("#todoProject").value;
  }
  else {
    _project__WEBPACK_IMPORTED_MODULE_2__.projects[currentProjectIndex].todos.splice(index, 1);
    (0,_newTodo__WEBPACK_IMPORTED_MODULE_1__.newTodo)();
  }
}

function editTodoDialog(todo, index) {
  let currentProjectIndex = todo.project;

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
  _project__WEBPACK_IMPORTED_MODULE_2__.projects.forEach((project, index) => {
    const projectOption = document.createElement("option");
    projectOption.setAttribute("value", index);
    projectOption.textContent = project.title;
    if(index == currentProjectIndex) {
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
    editTodo(currentProjectIndex, index);
    let projIndex = document.querySelector("#todoProject").value;
    (0,_displayController__WEBPACK_IMPORTED_MODULE_0__.populateInfo)(_project__WEBPACK_IMPORTED_MODULE_2__.projects[projIndex], projIndex);
    (0,_displayController__WEBPACK_IMPORTED_MODULE_0__.populateTodos)(_project__WEBPACK_IMPORTED_MODULE_2__.projects[projIndex], projIndex);
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
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");



function newProject() {
  let title = document.querySelector("#projectTitle").value;
  let description = document.querySelector("#projectDescription").value;
  let todos = [];

  _project__WEBPACK_IMPORTED_MODULE_1__.projects.push(new _project__WEBPACK_IMPORTED_MODULE_1__.Project(title, description, todos));
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
    (0,_displayController__WEBPACK_IMPORTED_MODULE_0__.populateSidebar)();
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
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");




function newTodo() {
  let title = document.querySelector("#todoTitle").value;
  let description = document.querySelector("#todoDescription").value;
  let dueDate = document.querySelector("#todoDueDate").value;
  let priority = document.querySelector("#todoPriority").value;
  let project = document.querySelector("#todoProject").value;

  _project__WEBPACK_IMPORTED_MODULE_1__.projects[project].todos.push(new _todo__WEBPACK_IMPORTED_MODULE_2__.Todo(title, description, dueDate, priority, project));
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
  _project__WEBPACK_IMPORTED_MODULE_1__.projects.forEach((project, index) => {
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
    let projectIndex = document.querySelector("#todoProject").value;
    (0,_displayController__WEBPACK_IMPORTED_MODULE_0__.populateInfo)(_project__WEBPACK_IMPORTED_MODULE_1__.projects[projectIndex], projectIndex);
    (0,_displayController__WEBPACK_IMPORTED_MODULE_0__.populateTodos)(_project__WEBPACK_IMPORTED_MODULE_1__.projects[projectIndex], projectIndex);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDVztBQUNOO0FBQ1A7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxvQ0FBSztBQUNQLEVBQUUsOENBQVE7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxvQ0FBSztBQUNULEdBQUc7QUFDSDs7QUFFQTtBQUNBLEVBQUUsbUNBQUk7QUFDTjtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1DQUFJOztBQUVOO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUNBQUk7O0FBRU47QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtEQUFpQjtBQUNuQyxHQUFHO0FBQ0gsRUFBRSxtQ0FBSTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOENBQVE7QUFDWjtBQUNBLElBQUksbUNBQUk7QUFDUixJQUFJLG9DQUFLO0FBQ1QsR0FBRztBQUNILEVBQUUsbUNBQUk7QUFDTjs7QUFFQTtBQUNBLEVBQUUsb0NBQUs7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QyxhQUFhO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsY0FBYztBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseURBQWM7QUFDbEMsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw4Q0FBUTtBQUNkO0FBQ0EsS0FBSztBQUNMOztBQUVBLElBQUksb0NBQUs7QUFDVCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdtRjs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1FQUFlO0FBQ25CLElBQUksZ0VBQVk7QUFDaEIsSUFBSSxpRUFBYTtBQUNqQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRWtFO0FBQzlCO0FBQ0M7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDhDQUFRO0FBQ1osSUFBSSw4Q0FBUTtBQUNaLElBQUksOENBQVE7QUFDWixJQUFJLDhDQUFRO0FBQ1osSUFBSSw4Q0FBUTtBQUNaO0FBQ0E7QUFDQSxJQUFJLDhDQUFRO0FBQ1osSUFBSSxpREFBTztBQUNYO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOENBQVE7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQVksQ0FBQyw4Q0FBUTtBQUN6QixJQUFJLGlFQUFhLENBQUMsOENBQVE7QUFDMUI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SHFFO0FBQ3JCO0FBQ047O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUVBQWEsQ0FBQyw2REFBZ0I7QUFDaEMsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUVBQWEsQ0FBQyx1REFBYTtBQUM3QixDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDdUM7QUFDUjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSw4Q0FBUSxVQUFVLDZDQUFPO0FBQzNCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1FQUFlO0FBQ25CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRWtFO0FBQzdCO0FBQ1A7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDhDQUFRLHlCQUF5Qix1Q0FBSTtBQUN2Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOENBQVE7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQVksQ0FBQyw4Q0FBUTtBQUN6QixJQUFJLGlFQUFhLENBQUMsOENBQVE7QUFDMUI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RzhCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx1Q0FBSTtBQUNaO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VkaXRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lZGl0VG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25ld1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZW1zLCBpbmZvLCB0b2RvcyB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBlZGl0UHJvamVjdERpYWxvZyB9IGZyb20gXCIuL2VkaXRQcm9qZWN0XCI7XG5pbXBvcnQgeyBlZGl0VG9kb0RpYWxvZyB9IGZyb20gXCIuL2VkaXRUb2RvXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZnVuY3Rpb24gZGlzcGxheURpYWxvZyhkaWFsb2cpIHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2cpO1xuICBkaWFsb2cuc2hvd01vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlU2lkZWJhcigpIHtcbiAgaXRlbXMucmVwbGFjZUNoaWxkcmVuKCk7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcbiAgICBpdGVtLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBwb3B1bGF0ZUluZm8ocHJvamVjdCwgaW5kZXgpO1xuICAgICAgcG9wdWxhdGVUb2Rvcyhwcm9qZWN0LCBpbmRleCk7XG4gICAgfSk7XG4gICAgaXRlbXMuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUluZm8ocHJvamVjdCwgaW5kZXgpIHtcbiAgaW5mby5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgaW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcbiAgaW5mby5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRpc3BsYXlEaWFsb2coZWRpdFByb2plY3REaWFsb2cocHJvamVjdCwgaW5kZXgpKTtcbiAgfSk7XG4gIGluZm8uYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbiAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmVtb3ZlQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtbnVtYmVyXCIsIGluZGV4KTtcbiAgcmVtb3ZlQnRuLnRleHRDb250ZW50ID0gXCJSZW1vdmVcIjtcbiAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcHJvamVjdHMuc3BsaWNlKHJlbW92ZUJ0bi5kYXRhc2V0LmluZGV4TnVtYmVyLCAxKTtcbiAgICBwb3B1bGF0ZVNpZGViYXIoKTtcbiAgICBpbmZvLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIHRvZG9zLnJlcGxhY2VDaGlsZHJlbigpO1xuICB9KTtcbiAgaW5mby5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVRvZG9zKHByb2plY3QsIHByb2plY3RJbmRleCkge1xuICB0b2Rvcy5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlRGF0ZVwiKTtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gYER1ZSBEYXRlOiAke3RvZG8uZHVlRGF0ZX1gO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3RvZG8ucHJpb3JpdHl9YDtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkaXNwbGF5RGlhbG9nKGVkaXRUb2RvRGlhbG9nKHRvZG8sIGluZGV4KSk7XG4gICAgfSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblxuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcmVtb3ZlQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtbnVtYmVyXCIsIGluZGV4KTtcbiAgICByZW1vdmVCdG4udGV4dENvbnRlbnQgPSBcIlJlbW92ZVwiO1xuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50b2Rvcy5zcGxpY2UocmVtb3ZlQnRuLmRhdGFzZXQuaW5kZXhOdW1iZXIsIDEpO1xuICAgICAgcG9wdWxhdGVUb2Rvcyhwcm9qZWN0LCBwcm9qZWN0SW5kZXgpO1xuICAgIH0pO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcblxuICAgIHRvZG9zLmFwcGVuZENoaWxkKGNhcmQpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgZGlzcGxheURpYWxvZywgcG9wdWxhdGVTaWRlYmFyLCBwb3B1bGF0ZUluZm8sIHBvcHVsYXRlVG9kb3MgfTsiLCJpbXBvcnQgeyBwb3B1bGF0ZVNpZGViYXIsIHBvcHVsYXRlSW5mbywgcG9wdWxhdGVUb2RvcyB9IGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyXCI7XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KHByb2plY3QpIHtcbiAgcHJvamVjdC50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFRpdGxlXCIpLnZhbHVlO1xuICBwcm9qZWN0LmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0RGVzY3JpcHRpb25cIikudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0RGlhbG9nKHByb2plY3QsIGluZGV4KSB7XG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcbiAgbGVnZW5kLnRleHRDb250ZW50ID0gXCJFZGl0IHByb2plY3Q6XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3RUaXRsZVwiKTtcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0VGl0bGVcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3RUaXRsZVwiKTtcbiAgdGl0bGVJbnB1dC52YWx1ZSA9IHByb2plY3QudGl0bGU7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0RGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOlwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdERlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0RGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKFwiZm9ybW1ldGhvZFwiLCBcImRpYWxvZ1wiKTtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGlhbG9nLnJlbW92ZSgpO1xuICB9KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25maXJtQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGNvbmZpcm1CdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb25maXJtQnRuXCIpO1xuICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XG4gIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGVkaXRQcm9qZWN0KHByb2plY3QpO1xuICAgIHBvcHVsYXRlU2lkZWJhcigpO1xuICAgIHBvcHVsYXRlSW5mbyhwcm9qZWN0LCBpbmRleCk7XG4gICAgcG9wdWxhdGVUb2Rvcyhwcm9qZWN0LCBpbmRleCk7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgZGlhbG9nLnJlbW92ZSgpO1xuICB9KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcblxuICByZXR1cm4gZGlhbG9nO1xufVxuXG5leHBvcnQgeyBlZGl0UHJvamVjdERpYWxvZyB9OyIsImltcG9ydCB7IHBvcHVsYXRlSW5mbywgcG9wdWxhdGVUb2RvcyB9IGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBuZXdUb2RvIH0gZnJvbSBcIi4vbmV3VG9kb1wiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmZ1bmN0aW9uIGVkaXRUb2RvKGN1cnJlbnRQcm9qZWN0SW5kZXgsIGluZGV4KSB7XG4gIGxldCBwcm9qZWN0SW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Qcm9qZWN0XCIpLnZhbHVlO1xuXG4gIGlmKGN1cnJlbnRQcm9qZWN0SW5kZXggPT0gcHJvamVjdEluZGV4KSB7XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50b2Rvc1tpbmRleF0udGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9UaXRsZVwiKS52YWx1ZTtcbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9zW2luZGV4XS5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udG9kb3NbaW5kZXhdLmR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9EdWVEYXRlXCIpLnZhbHVlO1xuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udG9kb3NbaW5kZXhdLnByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvUHJpb3JpdHlcIikudmFsdWU7XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50b2Rvc1tpbmRleF0ucHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb1Byb2plY3RcIikudmFsdWU7XG4gIH1cbiAgZWxzZSB7XG4gICAgcHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICBuZXdUb2RvKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZWRpdFRvZG9EaWFsb2codG9kbywgaW5kZXgpIHtcbiAgbGV0IGN1cnJlbnRQcm9qZWN0SW5kZXggPSB0b2RvLnByb2plY3Q7XG5cbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xuICBsZWdlbmQudGV4dENvbnRlbnQgPSBcIkVkaXQgdG9kbzpcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChsZWdlbmQpO1xuXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kb1RpdGxlXCIpO1xuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9UaXRsZVwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG9kb1RpdGxlXCIpO1xuICB0aXRsZUlucHV0LnZhbHVlID0gdG9kby50aXRsZTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9EZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvRGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG9EZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRvZG8uZGVzY3JpcHRpb247XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kb0R1ZURhdGVcIik7XG4gIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9EdWVEYXRlXCIpO1xuICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG9EdWVEYXRlXCIpO1xuICBkdWVEYXRlSW5wdXQudmFsdWUgPSB0b2RvLmR1ZURhdGU7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9Qcmlvcml0eVwiKTtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvUHJpb3JpdHlcIik7XG4gIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG9Qcmlvcml0eVwiKTtcbiAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IHRvZG8ucHJpb3JpdHk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG5cbiAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwcm9qZWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kb1Byb2plY3RcIik7XG4gIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdDpcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvUHJvamVjdFwiKTtcbiAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0b2RvUHJvamVjdFwiKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcm9qZWN0T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGluZGV4KTtcbiAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBpZihpbmRleCA9PSBjdXJyZW50UHJvamVjdEluZGV4KSB7XG4gICAgICBwcm9qZWN0T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcHJvamVjdElucHV0LmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuICB9KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKFwiZm9ybW1ldGhvZFwiLCBcImRpYWxvZ1wiKTtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGlhbG9nLnJlbW92ZSgpO1xuICB9KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25maXJtQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGNvbmZpcm1CdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb25maXJtQnRuXCIpO1xuICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XG4gIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGVkaXRUb2RvKGN1cnJlbnRQcm9qZWN0SW5kZXgsIGluZGV4KTtcbiAgICBsZXQgcHJvakluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvUHJvamVjdFwiKS52YWx1ZTtcbiAgICBwb3B1bGF0ZUluZm8ocHJvamVjdHNbcHJvakluZGV4XSwgcHJvakluZGV4KTtcbiAgICBwb3B1bGF0ZVRvZG9zKHByb2plY3RzW3Byb2pJbmRleF0sIHByb2pJbmRleCk7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgZGlhbG9nLnJlbW92ZSgpO1xuICB9KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcblxuICByZXR1cm4gZGlhbG9nO1xufVxuXG5leHBvcnQgeyBlZGl0VG9kb0RpYWxvZyB9OyIsImltcG9ydCB7IGRpc3BsYXlEaWFsb2csIHBvcHVsYXRlU2lkZWJhciB9IGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBuZXdQcm9qZWN0RGlhbG9nIH0gZnJvbSBcIi4vbmV3UHJvamVjdFwiO1xuaW1wb3J0IHsgbmV3VG9kb0RpYWxvZyB9IGZyb20gXCIuL25ld1RvZG9cIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5zaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuY29udGVudC5hcHBlbmRDaGlsZChzaWRlYmFyKTtcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5tYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcblxuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5uZXdQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiO1xubmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkaXNwbGF5RGlhbG9nKG5ld1Byb2plY3REaWFsb2coKSk7XG59KTtcbnNpZGViYXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bik7XG5cbmNvbnN0IG5ld1RvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubmV3VG9kb0J0bi50ZXh0Q29udGVudCA9IFwiTmV3IFRvZG9cIjtcbm5ld1RvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZGlzcGxheURpYWxvZyhuZXdUb2RvRGlhbG9nKCkpO1xufSk7XG5zaWRlYmFyLmFwcGVuZENoaWxkKG5ld1RvZG9CdG4pO1xuXG5jb25zdCBpdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5pdGVtcy5jbGFzc0xpc3QuYWRkKFwiaXRlbXNcIik7XG5zaWRlYmFyLmFwcGVuZENoaWxkKGl0ZW1zKTtcblxuY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5pbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xubWFpbi5hcHBlbmRDaGlsZChpbmZvKTtcblxuY29uc3QgdG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudG9kb3MuY2xhc3NMaXN0LmFkZChcInRvZG9zXCIpO1xubWFpbi5hcHBlbmRDaGlsZCh0b2Rvcyk7XG5cbnBvcHVsYXRlU2lkZWJhcigpO1xuXG5leHBvcnQgeyBjb250ZW50LCBzaWRlYmFyLCBtYWluLCBpdGVtcywgaW5mbywgdG9kb3MgfTsiLCJpbXBvcnQgeyBwb3B1bGF0ZVNpZGViYXIgfSBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbGxlclwiO1xuaW1wb3J0IHsgUHJvamVjdCwgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3QoKSB7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFRpdGxlXCIpLnZhbHVlO1xuICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3REZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgbGV0IHRvZG9zID0gW107XG5cbiAgcHJvamVjdHMucHVzaChuZXcgUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIHRvZG9zKSk7XG59XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3REaWFsb2coKSB7XG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcbiAgbGVnZW5kLnRleHRDb250ZW50ID0gXCJDcmVhdGUgbmV3IHByb2plY3Q6XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3RUaXRsZVwiKTtcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0VGl0bGVcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3RUaXRsZVwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3REZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0RGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3REZXNjcmlwdGlvblwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZShcImZvcm1tZXRob2RcIiwgXCJkaWFsb2dcIik7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRpYWxvZy5yZW1vdmUoKTtcbiAgfSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uZmlybUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBjb25maXJtQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29uZmlybUJ0blwiKTtcbiAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xuICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBuZXdQcm9qZWN0KCk7XG4gICAgcG9wdWxhdGVTaWRlYmFyKCk7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgZGlhbG9nLnJlbW92ZSgpO1xuICB9KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcblxuICByZXR1cm4gZGlhbG9nO1xufVxuXG5leHBvcnQgeyBuZXdQcm9qZWN0RGlhbG9nIH07IiwiaW1wb3J0IHsgcG9wdWxhdGVJbmZvLCBwb3B1bGF0ZVRvZG9zIH0gZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcblxuZnVuY3Rpb24gbmV3VG9kbygpIHtcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvVGl0bGVcIikudmFsdWU7XG4gIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0R1ZURhdGVcIikudmFsdWU7XG4gIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb1ByaW9yaXR5XCIpLnZhbHVlO1xuICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb1Byb2plY3RcIikudmFsdWU7XG5cbiAgcHJvamVjdHNbcHJvamVjdF0udG9kb3MucHVzaChuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSk7XG59XG5cbmZ1bmN0aW9uIG5ld1RvZG9EaWFsb2coKSB7XG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcbiAgbGVnZW5kLnRleHRDb250ZW50ID0gXCJDcmVhdGUgbmV3IHRvZG86XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9UaXRsZVwiKTtcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvVGl0bGVcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG9UaXRsZVwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9EZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvRGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG9EZXNjcmlwdGlvblwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvRHVlRGF0ZVwiKTtcbiAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb0R1ZURhdGVcIik7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG9kb0R1ZURhdGVcIik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9Qcmlvcml0eVwiKTtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvUHJpb3JpdHlcIik7XG4gIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG9Qcmlvcml0eVwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcblxuICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvUHJvamVjdFwiKTtcbiAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0OlwiO1xuICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9Qcm9qZWN0XCIpO1xuICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG9Qcm9qZWN0XCIpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByb2plY3RPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgaW5kZXgpO1xuICAgIHByb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcbiAgfSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcblxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZShcImZvcm1tZXRob2RcIiwgXCJkaWFsb2dcIik7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRpYWxvZy5yZW1vdmUoKTtcbiAgfSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uZmlybUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBjb25maXJtQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29uZmlybUJ0blwiKTtcbiAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xuICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBuZXdUb2RvKCk7XG4gICAgbGV0IHByb2plY3RJbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb1Byb2plY3RcIikudmFsdWU7XG4gICAgcG9wdWxhdGVJbmZvKHByb2plY3RzW3Byb2plY3RJbmRleF0sIHByb2plY3RJbmRleCk7XG4gICAgcG9wdWxhdGVUb2Rvcyhwcm9qZWN0c1twcm9qZWN0SW5kZXhdLCBwcm9qZWN0SW5kZXgpO1xuICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgIGRpYWxvZy5yZW1vdmUoKTtcbiAgfSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG5cbiAgcmV0dXJuIGRpYWxvZztcbn1cblxuZXhwb3J0IHsgbmV3VG9kbywgbmV3VG9kb0RpYWxvZyB9OyIsImltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5cbmZ1bmN0aW9uIFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCB0b2Rvcykge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHRvZG9zLFxuICB9O1xufTtcblxubGV0IHByb2plY3RzID0gW1xuICBuZXcgUHJvamVjdChcIkRlZmF1bHRcIiwgXCJUb2RvIExpc3QncyBkZWZhdWx0IHByb2plY3QuXCIsIFtcbiAgICBuZXcgVG9kbyhcIkRlZmF1bHRcIiwgXCJEZWZhdWx0IHRvZG8uXCIsIFwiZGQvbW0veXl5eVwiLCBcIk1lZGl1bVwiLCAwKSxcbiAgXSksXG5dO1xuXG5leHBvcnQgeyBQcm9qZWN0LCBwcm9qZWN0cyB9OyIsImZ1bmN0aW9uIFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgcHJvamVjdCxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IFRvZG8gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9