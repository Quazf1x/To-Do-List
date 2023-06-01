import { projectList } from "./Projects.js";
import { storage } from "./storage.js";

export default class task {
  constructor(name, date, priority, isDone = false) {
    this.name = name;
    this.date = date;
    this.priority = priority;
    this.isDone = isDone;
  }
}

export function isTaskToday(task) {
  let date;
  const todayDate = new Date();
  const day = todayDate.getDate();
  const month = todayDate.getMonth();
  const year = todayDate.getFullYear();
  if (day < 10) {
    if (month < 10) {
      date = `${year}-0${month + 1}-0${day}`;
    } else {
      date = `${year}-0${month + 1}-0${day}`;
    }
  } else {
    date = `${year}-${month + 1}-${day}`;
  }
  return task.date === date ? true : false;
}

export function addTask(name, date, priority, projectIndex) {
  const newTask = new task(name, date, priority);
  projectList[projectIndex].tasks.push(newTask);
  storage.saveStorage(projectList);
  return newTask;
}
