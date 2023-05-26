/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Projects.js */ \"./src/modules/Projects.js\");\n/* harmony import */ var _modules_Tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Tasks.js */ \"./src/modules/Tasks.js\");\n/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/UI.js */ \"./src/modules/UI.js\");\n\r\n\r\n\r\n\r\n(0,_modules_Projects_js__WEBPACK_IMPORTED_MODULE_0__.createFirstProject)();\r\n_modules_UI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loadPage();\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Projects.js":
/*!*********************************!*\
  !*** ./src/modules/Projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   createFirstProject: () => (/* binding */ createFirstProject),\n/* harmony export */   currrentProject: () => (/* binding */ currrentProject),\n/* harmony export */   \"default\": () => (/* binding */ project),\n/* harmony export */   findTask: () => (/* binding */ findTask),\n/* harmony export */   projectList: () => (/* binding */ projectList)\n/* harmony export */ });\nlet projectList = []\r\nlet currrentProject;\r\n\r\nfunction createFirstProject() { //dummy function,remove later??\r\n  projectList.push(new project('Default Project', 'lol :3', 'Low'));\r\n  currrentProject = projectList[0];\r\n};\r\n\r\nclass project {\r\n\r\n  constructor(name, description, priority){\r\n    this._name = name;\r\n   // this._date = date;\r\n    this._description = description;\r\n    this.priority = priority;\r\n    this.tasks = [];\r\n  }\r\n\r\n  get name() {\r\n    return this._name;\r\n  }\r\n\r\n  set name(value) {\r\n    this._name = value;\r\n  }\r\n\r\n};\r\n\r\nfunction addProject(name, description, priority) {\r\n  const newProject = new project(name, description, priority);\r\n  projectList.push(newProject);\r\n  return newProject;\r\n}\r\n\r\nfunction findTask(project, taskName, shouldDelete) {\r\n  for (let task of project.tasks){\r\n    if ( task.name == taskName)\r\n    {\r\n      if(shouldDelete) {\r\n        return project.tasks.splice(project.tasks.indexOf(task), 1);\r\n      }\r\n      else return true;\r\n    }\r\n  }\r\n};\n\n//# sourceURL=webpack://todo_list/./src/modules/Projects.js?");

/***/ }),

/***/ "./src/modules/Tasks.js":
/*!******************************!*\
  !*** ./src/modules/Tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   \"default\": () => (/* binding */ task)\n/* harmony export */ });\n/* harmony import */ var _Projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.js */ \"./src/modules/Projects.js\");\n\r\n\r\nclass task {\r\n  constructor(name, date, priority){\r\n    this._name = name;\r\n    this.date = date;\r\n    this.priority = priority;\r\n  }\r\n\r\n  get name() {\r\n    return this._name;\r\n  }\r\n\r\n  set name(value) {\r\n    this._name = value;\r\n  }\r\n};\r\n\r\nfunction addTask(name, date, priority, projectIndex) {\r\n  const newTask = new task(name, date, priority);\r\n  _Projects_js__WEBPACK_IMPORTED_MODULE_0__.projectList[projectIndex].tasks.push(newTask);\r\n  return newTask;\r\n}\r\n\n\n//# sourceURL=webpack://todo_list/./src/modules/Tasks.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects */ \"./src/modules/Projects.js\");\n/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tasks */ \"./src/modules/Tasks.js\");\n\r\n\r\n\r\nconst contentDiv = document.querySelector('#content');\r\nconst mainWrapper = document.querySelector('.main-wrapper');\r\nconst pageUL = document.querySelector('#content ul');\r\nconst ulNavMenu = document.querySelector('#project-submenu');\r\n\r\nclass UI {\r\n\r\n  static loadPage() {\r\n    this.addEventListeners();\r\n    this.renderProjectsPage();\r\n  }\r\n\r\n  static createHtmlElement(type, id, classesList, content) {\r\n    const element = document.createElement(type);\r\n    element.setAttribute('id', id);\r\n    if(classesList != null){\r\n    classesList.forEach(elementClass => {\r\n      element.classList.add(elementClass);\r\n    })};\r\n    element.textContent = content;\r\n    return element;\r\n  }\r\n\r\n  static renderTask(task) {\r\n    const taskNameDiv = this.createHtmlElement('div', null, null, null);\r\n    const taskLI = this.createHtmlElement('li', null, null, null); \r\n    const taskIcon = this.createHtmlElement('i', null, ['fa-regular', 'fa-circle'], null); \r\n    const taskSpan = this.createHtmlElement('span', null, null, task.name); \r\n    const taskIconsDiv = this.createHtmlElement('div', null, null, null);\r\n    const taskDate = this.createHtmlElement('span', null, null, task.date);\r\n    const taskDeleteIcon = this.createHtmlElement('img', null, null, null);\r\n\r\n    taskDeleteIcon.setAttribute('src', '../src/img/Delete.svg');\r\n    taskIconsDiv.append(taskDate, taskDeleteIcon);\r\n    taskNameDiv.append(taskIcon, taskSpan);\r\n\r\n    taskIcon.addEventListener('click',() => { \r\n      taskIcon.classList.toggle('fa-circle-check');\r\n      taskIcon.classList.toggle('fa-circle');\r\n      taskSpan.classList.toggle('crossed-words');\r\n     });\r\n\r\n     taskDeleteIcon.addEventListener('click', () => {\r\n      //pageUL.removeChild(taskLI); - the old solution. thought that re-rendering from project tasks array each time would be better(?)\r\n      (0,_Projects__WEBPACK_IMPORTED_MODULE_0__.findTask)(_Projects__WEBPACK_IMPORTED_MODULE_0__.currrentProject, task.name, true);\r\n      this.renderTasksPage(_Projects__WEBPACK_IMPORTED_MODULE_0__.currrentProject);\r\n     });\r\n\r\n     switch(task.priority){\r\n      case 'Low':\r\n        taskLI.style.borderLeftColor = '#19e61d';\r\n        break;\r\n      case 'Medium':\r\n        taskLI.style.borderLeftColor = '#ff8c12';\r\n        break;\r\n      case 'High':\r\n        taskLI.style.borderLeftColor = '#ff0000';\r\n        break;\r\n     };\r\n    \r\n    taskLI.append(taskNameDiv, taskIconsDiv);\r\n    pageUL.appendChild(taskLI);\r\n    mainWrapper.appendChild(pageUL);\r\n  }\r\n\r\n  static renderProject(project) {\r\n    const projectLI = this.createHtmlElement('li', null, ['nav-list-subcategory'], null);\r\n    const projectIcon = this.createHtmlElement('i', null, ['fa-regular', 'fa-circle'], null);\r\n    const projectName = this.createHtmlElement('span', null, null, project.name);\r\n\r\n    switch(project.priority){\r\n      case 'Low':\r\n        projectIcon.style.color = '#167934';\r\n        break;\r\n      case 'Medium':\r\n        projectIcon.style.color = '#ab9b26';\r\n        break;\r\n      case 'High':\r\n        projectIcon.style.color = '#a53116';\r\n      break;\r\n    };\r\n\r\n    projectLI.append(projectIcon, projectName);\r\n    ulNavMenu.appendChild(projectLI);\r\n  }\r\n\r\n  static clearMainPage() {\r\n    pageUL.innerHTML = '';\r\n  }\r\n\r\n  static clearProjectList() {\r\n    ulNavMenu.innerHTML = '';\r\n  }\r\n\r\n  static renderTasksPage(project) {\r\n    this.clearMainPage();\r\n    project.tasks.forEach(task => {\r\n      this.renderTask(task);\r\n    });\r\n  };\r\n\r\n  static renderProjectsPage() {\r\n    this.clearProjectList();\r\n    _Projects__WEBPACK_IMPORTED_MODULE_0__.projectList.forEach(project => {\r\n      this.renderProject(project);\r\n    })\r\n  }\r\n  \r\n  static getTaskDataFromUser() {\r\n    const taskName = document.querySelector('#form-task-name').value;\r\n    if((0,_Projects__WEBPACK_IMPORTED_MODULE_0__.findTask)(_Projects__WEBPACK_IMPORTED_MODULE_0__.currrentProject, taskName, false)) return null;\r\n\r\n    const taskDate = document.querySelector('#form-task-date').value;\r\n    const taskPriority = document.querySelector('#form-task-priorty').value;\r\n\r\n    const newTask = (0,_Tasks__WEBPACK_IMPORTED_MODULE_1__.addTask)(taskName, taskDate, taskPriority, 0);\r\n    return newTask;\r\n  };\r\n\r\n  static getProjectDataFromUser() {\r\n    const projectName = document.querySelector('#form-project-name').value;\r\n    const projectDescription = document.querySelector('#form-project-description').value;\r\n    const projectPriority = document.querySelector('#form-project-priorty').value;\r\n\r\n    const newProject = (0,_Projects__WEBPACK_IMPORTED_MODULE_0__.addProject)(projectName, projectDescription, projectPriority);\r\n    return newProject;\r\n  }\r\n  static addEventListeners(){\r\n    const addTaskBtn = document.querySelector('#add-button');\r\n    const addProjectBtn = document.querySelector('#new-project-button');\r\n\r\n    const modalProjectWindow = document.querySelector('#add-project-modal');\r\n    const modalTaskWindow = document.querySelector('#add-task-modal');\r\n    const taskForm = document.querySelector('#add-task-form');\r\n    const projectForm = document.querySelector('#add-project-modal');\r\n    const projectsSubmenu = document.querySelector('#project-submenu');\r\n    const projectCategory = document.querySelector('#project-category');\r\n\r\n    projectCategory.addEventListener('click',() => {\r\n      projectsSubmenu.classList.toggle('hidden');\r\n    });\r\n\r\n    addTaskBtn.addEventListener('click',() => {\r\n      //taskForm.reset(); UNCOMMENT LATER!!!!!!!!!!!\r\n      modalTaskWindow.showModal();\r\n    });\r\n\r\n    addProjectBtn.addEventListener('click', () => {\r\n      //taskForm.reset();\r\n      modalProjectWindow.showModal();\r\n    })\r\n\r\n    taskForm.addEventListener('submit',() => {\r\n      let userData = this.getTaskDataFromUser();\r\n      if(userData == null) {\r\n        alert('The task with this name already exists.');\r\n        return;\r\n      }\r\n      this.renderTasksPage(_Projects__WEBPACK_IMPORTED_MODULE_0__.currrentProject);\r\n    });\r\n\r\n    projectForm.addEventListener('submit', () => {\r\n      const userProject = this.getProjectDataFromUser();\r\n      this.renderProjectsPage();\r\n    });\r\n\r\n    };\r\n};\n\n//# sourceURL=webpack://todo_list/./src/modules/UI.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;