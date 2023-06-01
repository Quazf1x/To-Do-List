import { storage } from "./storage";
export let projectList = [];
let currrentProject;

export default class project {
  constructor(name, description, priority) {
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.tasks = [];
  }
}

export function setProjectList() {
  if (localStorage.getItem("projectList") == null) {
    projectList.push(
      new project("Default Project", "This is the default project.", "Low")
    );
    localStorage.setItem("projectList", JSON.stringify(projectList));
  } else {
    projectList = JSON.parse(localStorage.getItem("projectList"));
  }
  changeCurrentProject(0);
}

export function findTask(project, taskName, shouldDelete) {
  for (const task of project.tasks) {
    if (task.name == taskName) {
      if (shouldDelete) {
        project.tasks.splice(project.tasks.indexOf(task), 1);
        storage.saveStorage(projectList);
      } else return true;
    }
  }
}

export function addProject(name, description, priority) {
  const newProject = new project(name, description, priority);
  projectList.push(newProject);
  storage.saveStorage(projectList);
  return newProject;
}

export function findProject(projectName, shouldDelete) {
  for (const project of projectList) {
    if (project.name == projectName) {
      if (shouldDelete) {
        projectList.splice(projectList.indexOf(project), 1);
        storage.saveStorage(projectList);
      } else return project;
    }
  }
}

export function changeCurrentProject(index) {
  currrentProject = projectList[index];
  return currrentProject;
}

export function getCurrentProject() {
  return currrentProject;
}
