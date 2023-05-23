export let projectList = []
export let currrentProjectNum = 0;
export function createFirstProject() { //dummy function,remove later
  projectList.push(new project('Default Project', '21-05-2023', 'lol :3', 'Medium', []));
};

export default class project {

  constructor(name, description, date, priority){
    this._name = name;
    this._date = date;
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

export function removeTask(project, taskName) {
  for (let task of project.tasks){
    if ( task.name == taskName)
    return project.tasks.splice(project.tasks.indexOf(task), 1);
  }
}