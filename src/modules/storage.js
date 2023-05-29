// import project, { projectList } from "./Projects";

// let currrentProject;

// export class storage {
//   static setStorage() {
//     if(currrentProject == undefined){
//       localStorage.setItem(
//         'projectList', JSON.stringify(
//         new project('Default Project', 'This is the default project.', 'Low')));
//         currrentProject = (this.getProjectList());
//     }
//   }

//   static getProjectList() {
//     return JSON.parse(localStorage.getItem('projectList'));
//   }

//   static addProjectToList(project) {
//     let projectList = this.getProjectList();
//     projectList.push(project);
//     localStorage.setItem('projectList', JSON.stringify(projectList));
//     console.log(JSON.parse(localStorage.getItem('projectList')));
//   }

//   static clearStorage() {
//     localStorage.clear();
//   }
// }

// export function changeCurrentProject(index) {
//   currrentProject = projectList[index];
//   return currrentProject;
// }

// export function getCurrentProject() {
//   return currrentProject;
// }
