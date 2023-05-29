import project from './modules/Projects.js';
import task from './modules/Tasks.js';
import UI from './modules/UI.js';
import { storage } from './modules/storage.js';

//createFirstProject();
storage.setStorage();
//storage.addProjectToList(new project('new name', 'new desc','Low'));
UI.loadPage();