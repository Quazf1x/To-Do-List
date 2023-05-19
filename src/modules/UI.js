const addBtn = document.querySelector('#add-button');
const modalWindow = document.querySelector('#add-task-modal');

export default function eventListener() {addBtn.addEventListener('click',() => {
modalWindow.showModal();
});}