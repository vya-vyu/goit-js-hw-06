function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const mainBG=document.querySelector('body')
const clickColor = document.querySelector('.change-color');
const nameColor = document.querySelector('.color');
clickColor.addEventListener('click', changeColor);

function changeColor() { 
  const color = getRandomHexColor();
  mainBG.style.backgroundColor =color ;
  nameColor.textContent =color ;
}