export default function addEventListeners() {
  const addBtn = document.querySelector('#add-button');
  const modalWindow = document.querySelector('#add-task-modal');

  addBtn.addEventListener('click',() => {
    modalWindow.showModal();
  });
}


export { addEventListeners };