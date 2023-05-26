export let projectList = []
export let currrentProject;

export function createFirstProject() { //dummy function,remove later??
  projectList.push(new project('Default Project', 'lol :3', 'Low'));
  currrentProject = projectList[0];
};

export default class project {

  constructor(name, description, priority){
    this._name = name;
   // this._date = date;
    this._description = description;
    this.priority = priority;
    this.tasks = [];
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

};

export function addProject(name, description, priority) {
  const newProject = new project(name, description, priority);
  projectList.push(newProject);
  return newProject;
}

export function deleteProject(projectName) {
  for (let project of projectList){
    if ( project.name == projectName){
      return projectList.splice(projectList.indexOf(project), 1);
  }}
};

export function findTask(project, taskName, shouldDelete) {
  for (let task of project.tasks){
    if ( task.name == taskName){
      if(shouldDelete) {
        return project.tasks.splice(project.tasks.indexOf(task), 1);
      }
      else return true;
    }
  }
};