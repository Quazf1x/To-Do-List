import { projectList, findTask, currrentProject } from "./Projects";
import task, {addTask} from "./Tasks";

const contentDiv = document.querySelector('#content');
const mainWrapper = document.querySelector('.main-wrapper');
const pageUL = document.querySelector('#content ul');

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
      //pageUL.removeChild(taskLI); - the old solution. thought that re-rendering from project tasks array each time would be better(?)
      findTask(currrentProject, task.name, true);
      this.renderTasksPage(currrentProject);
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

  static clearMainPage() {
    pageUL.innerHTML = '';
  }

  static renderTasksPage(project) {
    this.clearMainPage();
    project.tasks.forEach(task => {
      this.renderTask(task);
    });
  }

  static getDataFromUser() {
    const taskName = document.querySelector('#form-task-name').value;
    if(findTask(currrentProject, taskName, false)) return null;

    const taskDate = document.querySelector('#form-task-date').value;
    const taskPriority = document.querySelector('#form-task-priorty').value;
    const newTask = addTask(taskName, taskDate, taskPriority, 0);
    return newTask;
  };
  
  static addEventListeners(){
    const addTaskBtn = document.querySelector('#add-button');
    const addProjectBtn = document.querySelector('#new-project-button');

    const modalProjectWindow = document.querySelector('#add-project-modal');
    const modalTaskWindow = document.querySelector('#add-task-modal');
    const taskForm = document.querySelector('#add-task-form');
    const projectsSubmenu = document.querySelector('#project-submenu');
    const projectCategory = document.querySelector('#project-category');

    projectCategory.addEventListener('click',() => {
      projectsSubmenu.classList.toggle('hidden');
    });

    addTaskBtn.addEventListener('click',() => {
      //taskForm.reset(); UNCOMMENT LATER!!!!!!!!!!!
      modalTaskWindow.showModal();
    });

    addProjectBtn.addEventListener('click', () => {
      //taskForm.reset();
      modalProjectWindow.showModal();
    })

    taskForm.addEventListener('submit',(e) => {
      let userData = this.getDataFromUser();
      if(userData == null) {
        alert('The task with this name already exists.');
        return;
      }
      this.renderTasksPage(currrentProject);
    });
    };

};