import { projectList, removeTask } from "./Projects";
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
    const taskDate = this.createHtmlElement('span', null, null, task.date);
    const taskDeleteIcon = this.createHtmlElement('img', null, null, null);

    taskDeleteIcon.setAttribute('src', '../src/img/Delete.svg');
    taskIconsDiv.append(taskDate, taskDeleteIcon);
    taskNameDiv.append(taskIcon, taskSpan);

    taskIcon.addEventListener('click',() => { 
      taskIcon.classList.toggle('fa-circle-check');
      taskIcon.classList.toggle('fa-circle');
      taskSpan.classList.toggle('crossed-words');
     });

     taskDeleteIcon.addEventListener('click', () => {
      pageUL.removeChild(taskLI);
      removeTask(projectList[0], task.name);
     });

     switch(task.priority){
      case 'Low':
        taskLI.style.borderLeftColor = '#19e61d';
        break;
      case 'Medium':
        taskLI.style.borderLeftColor = '#ff8c12';
        break;
      case 'High':
        taskLI.style.borderLeftColor = '#ff0000';
        break;
     };
    
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
    const taskForm = document.querySelector('#add-task-form');

  addBtn.addEventListener('click',() => {
    //taskForm.reset(); UNCOMMENT LATER!!!!!!!!!!!
    modalWindow.showModal();
  });

  taskForm.addEventListener('submit',(e) => {
    this.createNewTask();
  });
  }

};