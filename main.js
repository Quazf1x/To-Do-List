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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Tasks.js */ \"./src/modules/Tasks.js\");\n/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI.js */ \"./src/modules/UI.js\");\n\r\n\r\n\r\n_modules_UI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addEventListeners();\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Projects.js":
/*!*********************************!*\
  !*** ./src/modules/Projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ project),\n/* harmony export */   projectList: () => (/* binding */ projectList)\n/* harmony export */ });\nlet projectList = [\r\n  {\r\n    name: 'Default Project',\r\n    date: '21-05-2023',\r\n    description: 'lol :3',\r\n    priority: 'Medium',\r\n    tasks: []\r\n  }\r\n];\r\n\r\nclass project {\r\n\r\n  constructor(name, description, date, priority){\r\n    this._name = name;\r\n    this._date = date;\r\n    this._description = description;\r\n    this.priority = priority;\r\n    this.tasks = [];\r\n  }\r\n\r\n  get name() {\r\n    return this._name;\r\n  }\r\n\r\n  set name(value) {\r\n    this._name = value;\r\n  }\r\n}\n\n//# sourceURL=webpack://todo_list/./src/modules/Projects.js?");

/***/ }),

/***/ "./src/modules/Tasks.js":
/*!******************************!*\
  !*** ./src/modules/Tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   \"default\": () => (/* binding */ task)\n/* harmony export */ });\n/* harmony import */ var _Projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.js */ \"./src/modules/Projects.js\");\n\r\n\r\nclass task {\r\n  constructor(name, date, priority){\r\n    this._name = name;\r\n    this._date = date;\r\n    this.priority = priority;\r\n  }\r\n\r\n  get name() {\r\n    return this._name;\r\n  }\r\n\r\n  set name(value) {\r\n    this._name = value;\r\n  }\r\n};\r\n\r\n\r\n\r\nfunction addTask(name, date, priority, projectIndex) {\r\n  const newTask = new task(name, date, priority);\r\n  _Projects_js__WEBPACK_IMPORTED_MODULE_0__.projectList[projectIndex].tasks.push(newTask);\r\n  \r\n  console.log(_Projects_js__WEBPACK_IMPORTED_MODULE_0__.projectList);\r\n  return newTask;\r\n}\r\n\n\n//# sourceURL=webpack://todo_list/./src/modules/Tasks.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasks */ \"./src/modules/Tasks.js\");\n\r\n\r\nconst contentDiv = document.querySelector('#content');\r\nconst mainWrapper = document.querySelector('.main-wrapper');\r\n\r\nclass UI {\r\n\r\n  static createHtmlElement(type, id, classesList, content) {\r\n    const element = document.createElement(type);\r\n    element.setAttribute('id', id);\r\n    if(classesList != null){\r\n    classesList.forEach(elementClass => {\r\n      element.classList.add(elementClass);\r\n    })};\r\n    element.textContent = content;\r\n    return element;\r\n  }\r\n\r\n  static renderTask(task) {\r\n    const pageUL = document.querySelector('#content ul');\r\n    const taskNameDiv = this.createHtmlElement('div', null, null, null);\r\n    const taskLI = this.createHtmlElement('li', null, null, null); \r\n    const taskIcon = this.createHtmlElement('i', null, ['fa-regular', 'fa-circle'], null); \r\n    const taskSpan = this.createHtmlElement('span', null, null, task.name); \r\n    const taskIconsDiv = this.createHtmlElement('div', null, null, null);\r\n    const taskEditIcon = this.createHtmlElement('img', null, null, null);\r\n    const taskDeleteIcon = this.createHtmlElement('img', null, null, null);\r\n\r\n    taskEditIcon.setAttribute('src', '../src/img/Edit.svg');\r\n    taskDeleteIcon.setAttribute('src', '../src/img/Delete.svg');\r\n    taskIconsDiv.append(taskEditIcon, taskDeleteIcon);\r\n    taskNameDiv.append(taskIcon, taskSpan);\r\n    \r\n    taskLI.append(taskNameDiv, taskIconsDiv);\r\n    pageUL.appendChild(taskLI);\r\n    mainWrapper.appendChild(pageUL);\r\n  }\r\n\r\n  static createNewTask() {\r\n    const taskName = document.querySelector('#form-name').value;\r\n    const taskDate = document.querySelector('#form-date').value;\r\n    const taskPriority = document.querySelector('#form-priorty').value;\r\n    const newTask = (0,_Tasks__WEBPACK_IMPORTED_MODULE_0__.addTask)(taskName, taskDate,taskPriority, 0);\r\n\r\n    this.renderTask(newTask);\r\n  }\r\n  \r\n  static addEventListeners(){\r\n    const addBtn = document.querySelector('#add-button');\r\n    const modalWindow = document.querySelector('#add-task-modal');\r\n    const submitFormBtn = document.querySelector('#form-submit-button');\r\n\r\n  addBtn.addEventListener('click',() => {\r\n    modalWindow.showModal();\r\n  });\r\n\r\n  submitFormBtn.addEventListener('click',(e) => {\r\n    this.createNewTask();\r\n  });\r\n\r\n  }\r\n\r\n};\n\n//# sourceURL=webpack://todo_list/./src/modules/UI.js?");

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