import { projectList } from './Projects.js';

export default class task {
  constructor(name, date, priority){
    this._name = name;
    this.date = date;
    this.priority = priority;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
};

export function addTask(name, date, priority, projectIndex) {
  const newTask = new task(name, date, priority);
  projectList[projectIndex].tasks.push(newTask);
  return newTask;
};
