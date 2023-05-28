import { projectList, addProject, findProject, getCurrentProject, changeCurrentProject } from "./Projects";
import { addTask } from "./Tasks";

const contentDiv = document.querySelector('#content');
const mainWrapper = document.querySelector('.main-wrapper');
const pageUL = document.querySelector('#content ul');
const ulNavMenu = document.querySelector('#project-submenu');

export default class UI {

  static loadPage() {
    this.addEventListeners();
    this.renderTasksPage();
    this.renderProjectsNav();
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

  static clearMainPage() {
    document.querySelector('#project-description').textContent = '';
    pageUL.innerHTML = '';
  }

  static clearProjectList() {
    ulNavMenu.innerHTML = '';
  }

  static changePageName(name) {
    const pageName = document.querySelector('#page-name');
    pageName.textContent = name;
  }

  static renderProjectTitle(project) {

    const title = this.createHtmlElement('h2', null, null, project.name);
    const titleLI = this.createHtmlElement('li', null, null, null);

    switch(project.priority){
      case 'Low':
        titleLI.style.borderLeftColor = '#167934';
        break;
      case 'Medium':
        titleLI.style.borderLeftColor = '#ab9b26';
        break;
      case 'High':
        titleLI.style.borderLeftColor = '#a53116';
      break;
    };

    titleLI.appendChild(title);
      pageUL.appendChild(titleLI);
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

    if(task.isDone) {
      taskIcon.classList.remove('fa-circle');
      taskIcon.classList.add('fa-circle-check');
      taskSpan.classList.add('crossed-words');
    }

    taskIcon.addEventListener('click',() => {
      task.isDone = !task.isDone
      taskIcon.classList.toggle('fa-circle-check');
      taskIcon.classList.toggle('fa-circle');
      taskSpan.classList.toggle('crossed-words');
     });

     taskDeleteIcon.addEventListener('click', () => {
      //pageUL.removeChild(taskLI); - the old solution. thought that re-rendering from project tasks array each time would be better(?)
      getCurrentProject().findTask(task.name, true);
      this.renderTasksPage();
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
      const index = projectList.indexOf(project);
      if(index!==0) {
        changeCurrentProject(index - 1);
      }
      else changeCurrentProject(index + 1);
      this.renderTasksPage();
      findProject(project.name, true);
      this.renderProjectsNav();
    });

    projectName.addEventListener('click', (e) => {
      const projectIndex = projectList.indexOf(findProject(project.name, false));
      changeCurrentProject(projectIndex);
      this.renderTasksPage();
    });

    projectLeftWrapper.append(projectIcon, projectName);
    projectLI.append(projectLeftWrapper, projectDelete);
    ulNavMenu.appendChild(projectLI);
  }

  static renderTasksPage() {
    const project = getCurrentProject();
    this.clearMainPage();
    const projectDescription = document.querySelector('#project-description');
    projectDescription.textContent = project.description;
    this.changePageName(project.name);
    project.tasks.forEach(task => {
      this.renderTask(task);
    });
  }

  static renderHomePage() {
    this.clearMainPage();
    this.changePageName('Home');

    projectList.forEach(project => {
      this.renderProjectTitle(project);
      project.tasks.forEach(task => {
        this.renderTask(task);
      })
    });
  }

  static renderTodayPage() {
    this.clearMainPage();
    this.changePageName('Today\'s tasks');

    projectList.forEach(project => {
      this.renderProjectTitle(project);
      project.tasks.forEach(task => {
        if(task.isTaskToday()){
          this.renderTask(task);
        };
      })
    });
  }

  static renderProjectsNav() {
    this.clearProjectList();
    projectList.forEach(project => {
      this.renderProject(project);
    })
  }
  
  static getTaskDataFromUser() {
    const taskName = document.querySelector('#form-task-name').value;
    if(getCurrentProject().findTask(taskName, false)) return null;

    const taskDate = document.querySelector('#form-task-date').value;
    const taskPriority = document.querySelector('#form-task-priorty').value;

    const newTask = addTask(taskName, taskDate, taskPriority, projectList.indexOf(getCurrentProject()));
    return newTask;
  }

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
    const homePage = document.querySelector('#home-page');
    const todayPage = document.querySelector('#today-page');

    const modalProjectWindow = document.querySelector('#add-project-modal');
    const modalTaskWindow = document.querySelector('#add-task-modal');
    const taskForm = document.querySelector('#add-task-form');
    const projectForm = document.querySelector('#add-project-modal');
    const projectsSubmenu = document.querySelector('#project-submenu');
    const projectCategory = document.querySelector('#project-category');

    homePage.addEventListener('click', () => {
      this.renderHomePage();
    });

    todayPage.addEventListener('click', () => {
      this.renderTodayPage();
    });

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
    });

    taskForm.addEventListener('submit',() => {
      let userData = this.getTaskDataFromUser();
      if(userData == null) {
        alert('A task with this name already exists.');
        return;
      }
      this.renderTasksPage();
    });

    projectForm.addEventListener('submit', () => {
      const userProject = this.getProjectDataFromUser();
      if (userProject == null) {
        alert('A project with this name already exists.');
        return;
      }
      this.renderProjectsNav();
    });
  }
};