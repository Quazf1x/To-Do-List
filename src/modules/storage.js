import { projectList } from "./Projects";

export class storage {
  static saveStorage(projectList) {
    localStorage.setItem('projectList', JSON.stringify(projectList));
  }

  static getProjectList() {
    return JSON.parse(localStorage.getItem('projectList'));
  }

//   static addProjectToList(project) {
//     let projectList = this.getProjectList();
//     projectList.push(project);
//     localStorage.setItem('projectList', JSON.stringify(projectList));
//     console.log(JSON.parse(localStorage.getItem('projectList')));
//   }

//   static clearStorage() {
//     localStorage.clear();
//   }
}