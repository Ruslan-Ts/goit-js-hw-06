function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorValue = document.querySelector('.color')

changeColorBtn.addEventListener('click', changeColor);

function changeColor() {
  const backgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = backgroundColor;
  colorValue.textContent = backgroundColor;
}