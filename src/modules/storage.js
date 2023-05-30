import { projectList } from "./Projects";

export class storage {
  static saveStorage(projectList) {
    localStorage.setItem('projectList', JSON.stringify(projectList));
  }
}