import project, {projectList, createFirstProject, setProjectList } from './modules/Projects.js';
import task from './modules/Tasks.js';
import UI from './modules/UI.js';
import { storage } from './modules/storage.js';

setProjectList();
//createFirstProject();
storage.saveStorage(projectList);
UI.loadPage();