const container=document.querySelector('div#boxes')
const countBoxes = document.querySelector('#controls');

countBoxes.addEventListener('click', (event => { 
  const count=Number(event.target.parentElement.firstElementChild.value)
  event.target.textContent === "Create" ?
    createBoxes(count) :
    destroyBoxes(count);
}))

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) { 
  let size = 30;
  const boxes = [];
  for (let index = 0; index < amount; index += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor(); 
    boxes.push(box)
    size += 10;
  }
  container.append(...boxes);
}

function destroyBoxes(amount) {
  const allBoxes = document.querySelectorAll('div#boxes>div')
  allBoxes.forEach(box => box.remove());
}

