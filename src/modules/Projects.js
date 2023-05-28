import { addTask } from "./Tasks";
export let projectList = []
let currrentProject;

export function createFirstProject() { //dummy function,remove later??
  projectList.push(new project('Default Project', 'This is the default project.', 'Low'));
 // addTask('name','2004-03-04', 'Medium',0);
 // addTask('Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Long Name','2004-03-04', 'Low',0);
  changeCurrentProject(0);
};

export default class project {

  constructor(name, description, priority){
    this._name = name;
   // this._date = date;
    this.description = description;
    this.priority = priority;
    this.tasks = [];
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  findTask( taskName, shouldDelete) {
    for (let task of this.tasks){
      if ( task.name == taskName){
        if(shouldDelete) {
          return this.tasks.splice(this.tasks.indexOf(task), 1);
        }
        else return true;
      }
    }
  };

};

export function addProject(name, description, priority) {
  const newProject = new project(name, description, priority);
  projectList.push(newProject);
  return newProject;
}

export function findProject(projectName, shouldDelete) {
  for (let project of projectList){
    if ( project.name == projectName){
      if(shouldDelete) {
      return projectList.splice(projectList.indexOf(project), 1);
    }
    else return project;
  }}
};

export function changeCurrentProject(index) {
  currrentProject = projectList[index];
  return currrentProject;
}

export function getCurrentProject() {
  return currrentProject;
}
