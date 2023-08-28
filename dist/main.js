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
/* harmony export */   populateSidebar: () => (/* binding */ populateSidebar)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");



function displayDialog(dialog) {
  document.body.appendChild(dialog);
  dialog.showModal();
}

function populateSidebar() {
  ___WEBPACK_IMPORTED_MODULE_1__.items.replaceChildren();
  _project__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.textContent = project.title;
    ___WEBPACK_IMPORTED_MODULE_1__.items.appendChild(item);
  });
}



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
  const title = document.querySelector("#projectTitle").value;
  const description = document.querySelector("#projectDescription").value;
  const todos = [];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQztBQUNYOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsb0NBQUs7QUFDUCxFQUFFLDhDQUFRO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvQ0FBSztBQUNULEdBQUc7QUFDSDs7QUFFMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGFBQWE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsY0FBYztBQUM3RDs7QUFFQTtBQUNBLFVBQVU7QUFDVixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RDZEO0FBQ3JCOztBQUVoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlFQUFhLENBQUMsNkRBQWdCO0FBQ2hDLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEMrQjtBQUNROztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDhDQUFRLFVBQVUsNkNBQU87QUFDM0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1FQUFlO0FBQ25CO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHVDQUFJO0FBQ1o7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tIFwiLlwiO1xuXG5mdW5jdGlvbiBkaXNwbGF5RGlhbG9nKGRpYWxvZykge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpYWxvZyk7XG4gIGRpYWxvZy5zaG93TW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVTaWRlYmFyKCkge1xuICBpdGVtcy5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgaXRlbS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgaXRlbXMuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBkaXNwbGF5RGlhbG9nLCBwb3B1bGF0ZVNpZGViYXIgfTtcblxuLy8gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyAgXG4gICAgLy8gICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIC8vICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIC8vICAgaW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIFxuICAgIC8vICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAvLyAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcbiAgICAvLyAgIGluZm8uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBcbiAgICAvLyAgIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIC8vICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgLy8gICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgICAvLyAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIC8vICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgLy8gICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBcbiAgICAvLyAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgIC8vICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgLy8gICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBcbiAgICAvLyAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWVEYXRlXCIpO1xuICAgIC8vICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gYER1ZSBEYXRlOiAke3RvZG8uZHVlRGF0ZX1gO1xuICAgIC8vICAgICBjYXJkLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICBcbiAgICAvLyAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xuICAgIC8vICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHt0b2RvLnByaW9yaXR5fWA7XG4gICAgLy8gICAgIGNhcmQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgLy8gICAgIHRvZG9zLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSk7IiwiaW1wb3J0IHsgZGlzcGxheURpYWxvZywgcG9wdWxhdGVTaWRlYmFyIH0gZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IG5ld1Byb2plY3REaWFsb2cgfSBmcm9tIFwiLi9uZXdQcm9qZWN0XCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cbmNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubmV3UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjtcbm5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZGlzcGxheURpYWxvZyhuZXdQcm9qZWN0RGlhbG9nKCkpO1xufSk7XG5zaWRlYmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pO1xuXG5jb25zdCBpdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5pdGVtcy5jbGFzc0xpc3QuYWRkKFwiaXRlbXNcIik7XG5zaWRlYmFyLmFwcGVuZENoaWxkKGl0ZW1zKTtcblxuY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5pbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xubWFpbi5hcHBlbmRDaGlsZChpbmZvKTtcblxuY29uc3QgdG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudG9kb3MuY2xhc3NMaXN0LmFkZChcInRvZG9zXCIpO1xubWFpbi5hcHBlbmRDaGlsZCh0b2Rvcyk7XG5cbnBvcHVsYXRlU2lkZWJhcigpO1xuXG5leHBvcnQgeyBjb250ZW50LCBzaWRlYmFyLCBtYWluLCBpdGVtcywgaW5mbywgdG9kb3MgfTsiLCJpbXBvcnQgeyBQcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHBvcHVsYXRlU2lkZWJhciB9IGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyXCI7XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3QoKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0VGl0bGVcIikudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0RGVzY3JpcHRpb25cIikudmFsdWU7XG4gIGNvbnN0IHRvZG9zID0gW107XG5cbiAgcHJvamVjdHMucHVzaChuZXcgUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIHRvZG9zKSk7XG59XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3REaWFsb2coKSB7XG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcbiAgbGVnZW5kLnRleHRDb250ZW50ID0gXCJDcmVhdGUgbmV3IHByb2plY3Q6XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3RUaXRsZVwiKTtcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0VGl0bGVcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3RUaXRsZVwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3REZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0RGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3REZXNjcmlwdGlvblwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZShcImZvcm1tZXRob2RcIiwgXCJkaWFsb2dcIik7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uZmlybUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBjb25maXJtQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29uZmlybUJ0blwiKTtcbiAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xuICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBuZXdQcm9qZWN0KCk7XG4gICAgcG9wdWxhdGVTaWRlYmFyKCk7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG4gIH0pO1xuICBmb3JtLmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xuXG4gIHJldHVybiBkaWFsb2c7XG59XG5cbmV4cG9ydCB7IG5ld1Byb2plY3REaWFsb2cgfTsiLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5mdW5jdGlvbiBQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgdG9kb3MpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICB0b2RvcyxcbiAgfTtcbn07XG5cbmxldCBwcm9qZWN0cyA9IFtcbiAgbmV3IFByb2plY3QoXCJEZWZhdWx0XCIsIFwiVG9kbyBMaXN0J3MgZGVmYXVsdCBwcm9qZWN0LlwiLCBbXG4gICAgbmV3IFRvZG8oXCJEZWZhdWx0XCIsIFwiRGVmYXVsdCB0b2RvLlwiLCBcImRkL21tL3l5eXlcIiwgXCJNZWRpdW1cIiwgMCksXG4gIF0pLFxuXTtcblxuZXhwb3J0IHsgUHJvamVjdCwgcHJvamVjdHMgfTsiLCJmdW5jdGlvbiBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIHByb2plY3QsXG4gIH07XG59O1xuXG5leHBvcnQgeyBUb2RvIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==