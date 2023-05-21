import task, {addTask} from "./Tasks";

const contentDiv = document.querySelector('#content');
const mainWrapper = document.querySelector('.main-wrapper');

export default class UI {

  static createHtmlElement(type, id, classesList, content) {
    const element = document.createElement(type);
    element.setAttribute('id', id);
    if(classesList != null){
    classesList.forEach(elementClass => {
      element.classList.add(elementClass);
    })};
    element.textContent = content;
    return element;
  }

  static renderTask(task) {
    const pageUL = document.querySelector('#content ul');
    const taskNameDiv = this.createHtmlElement('div', null, null, null);
    const taskLI = this.createHtmlElement('li', null, null, null); 
    const taskIcon = this.createHtmlElement('i', null, ['fa-regular', 'fa-circle'], null); 
    const taskSpan = this.createHtmlElement('span', null, null, task.name); 
    const taskIconsDiv = this.createHtmlElement('div', null, null, null);
    const taskEditIcon = this.createHtmlElement('img', null, null, null);
    const taskDeleteIcon = this.createHtmlElement('img', null, null, null);

    taskEditIcon.setAttribute('src', '../src/img/Edit.svg');
    taskDeleteIcon.setAttribute('src', '../src/img/Delete.svg');
    taskIconsDiv.append(taskEditIcon, taskDeleteIcon);
    taskNameDiv.append(taskIcon, taskSpan);
    
    taskLI.append(taskNameDiv, taskIconsDiv);
    pageUL.appendChild(taskLI);
    mainWrapper.appendChild(pageUL);
  }

  static createNewTask() {
    const taskName = document.querySelector('#form-name').value;
    const taskDate = document.querySelector('#form-date').value;
    const taskPriority = document.querySelector('#form-priorty').value;
    const newTask = addTask(taskName, taskDate,taskPriority, 0);

    this.renderTask(newTask);
  }
  
  static addEventListeners(){
    const addBtn = document.querySelector('#add-button');
    const modalWindow = document.querySelector('#add-task-modal');
    const submitFormBtn = document.querySelector('#form-submit-button');

  addBtn.addEventListener('click',() => {
    modalWindow.showModal();
  });

  submitFormBtn.addEventListener('click',(e) => {
    this.createNewTask();
  });

  }

};