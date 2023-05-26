import { projectList, addProject, deleteProject, findTask, currrentProject } from "./Projects";
import task, {addTask} from "./Tasks";

const contentDiv = document.querySelector('#content');
const mainWrapper = document.querySelector('.main-wrapper');
const pageUL = document.querySelector('#content ul');
const ulNavMenu = document.querySelector('#project-submenu');

export default class UI {

  static loadPage() {
    this.addEventListeners();
    this.renderTasksPage(currrentProject);
    this.renderProjectsPage();
  }

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

  static renderProject(project) {
    const projectLI = this.createHtmlElement('li', null, ['nav-list-subcategory'], null);
    const projectLeftWrapper = this.createHtmlElement('div', null, null, null);
    const projectIcon = this.createHtmlElement('i', null, ['fa-regular', 'fa-circle'], null);
    const projectName = this.createHtmlElement('span', null, null, project.name);
    const projectDelete = this.createHtmlElement('i', null, ['fa-regular', 'fa-circle-xmark'], null);
    projectDelete.style.color = '#a53116';

    switch(project.priority){
      case 'Low':
        projectIcon.style.color = '#167934';
        break;
      case 'Medium':
        projectIcon.style.color = '#ab9b26';
        break;
      case 'High':
        projectIcon.style.color = '#a53116';
      break;
    };

    projectDelete.addEventListener('click', () => {
      deleteProject(project.name);
      this.renderProjectsPage();
    });

    projectName.addEventListener('click', () => {
      //..
    });

    projectLeftWrapper.append(projectIcon, projectName);
    projectLI.append(projectLeftWrapper, projectDelete);
    ulNavMenu.appendChild(projectLI);
  }

  static clearMainPage() {
    pageUL.innerHTML = '';
  }

  static clearProjectList() {
    ulNavMenu.innerHTML = '';
  }

  static renderTasksPage(project) {
    this.clearMainPage();
    project.tasks.forEach(task => {
      this.renderTask(task);
    });
  };

  static renderProjectsPage() {
    this.clearProjectList();
    projectList.forEach(project => {
      this.renderProject(project);
    })
  }
  
  static getTaskDataFromUser() {
    const taskName = document.querySelector('#form-task-name').value;
    if(findTask(currrentProject, taskName, false)) return null;

    const taskDate = document.querySelector('#form-task-date').value;
    const taskPriority = document.querySelector('#form-task-priorty').value;

    const newTask = addTask(taskName, taskDate, taskPriority, 0);
    return newTask;
  };

  static getProjectDataFromUser() {
    let alreadyExists = false;
    const projectName = document.querySelector('#form-project-name').value;

    projectList.forEach(project => {
      if(project.name === projectName)
      alreadyExists = true;
    });
    if(alreadyExists) return null;

    const projectDescription = document.querySelector('#form-project-description').value;
    const projectPriority = document.querySelector('#form-project-priorty').value;

    const newProject = addProject(projectName, projectDescription, projectPriority);
    return newProject;
  }

  static addEventListeners(){
    const addTaskBtn = document.querySelector('#add-button');
    const addProjectBtn = document.querySelector('#new-project-button');

    const modalProjectWindow = document.querySelector('#add-project-modal');
    const modalTaskWindow = document.querySelector('#add-task-modal');
    const taskForm = document.querySelector('#add-task-form');
    const projectForm = document.querySelector('#add-project-modal');
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

    taskForm.addEventListener('submit',() => {
      let userData = this.getTaskDataFromUser();
      if(userData == null) {
        alert('A task with this name already exists.');
        return;
      }
      this.renderTasksPage(currrentProject);
    });

    projectForm.addEventListener('submit', () => {
      const userProject = this.getProjectDataFromUser();
      if (userProject == null) {
        alert('A project with this name already exists.');
        return;
      }
      this.renderProjectsPage();
    });
  };
};