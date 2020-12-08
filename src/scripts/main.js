const attendanceContainerEle = document.querySelector('.attendance-container');
const addName = attendanceContainerEle.querySelector('button');
const nameList = attendanceContainerEle.querySelector('ul');

// === ADD SCRIPT FOR ADDING NAMES HERE ===
function addNames() {
  const names = ["Navneet", "Creston", "Maggie", "Adam", "Jayson", "Anton", "Janvi", "Dhruval", "Tielen"];

  attendanceContainerEle.firstElementChild.insertAdjacentHTML('afterend', '<ul></ul>');

  for (let i = 0; i < names.length; i++) {
    attendanceContainerEle.lastElementChild.innerHTML +=
    `<li>${names[i]}</li>`;
  }
}

addName.addEventListener('click', addNames);