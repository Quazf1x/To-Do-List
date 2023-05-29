import { projectList } from './Projects.js';

export default class task {
  constructor(name, date, priority, isDone = false){
    this._name = name;
    this.date = date;
    this.priority = priority;
    this.isDone = isDone;
  }

   isTaskToday() {
    const todayDate = new Date;
    const day = todayDate.getDate();
    const month = todayDate.getMonth();
    const year = todayDate.getFullYear();
    const date = `${year}-0${month + 1}-${day}`;
    return (this.date === date ? true : false);
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