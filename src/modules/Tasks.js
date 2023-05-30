import { getCurrentProject, projectList } from './Projects.js';
import { storage } from './storage.js';

export default class task {
  constructor(name, date, priority, isDone = false){
    this.name = name;
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
};

export function addTask(name, date, priority, projectIndex) {
  const newTask = new task(name, date, priority);
  projectList[projectIndex].tasks.push(newTask);
  storage.saveStorage(projectList);
  return newTask;
};