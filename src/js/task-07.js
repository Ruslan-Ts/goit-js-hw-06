const inputRange = document.querySelector('#font-size-control');
const outputText = document.querySelector('#text');



inputRange.addEventListener('input', inputChange);


function inputChange(event) {
    outputText.style.fontSize = `${event.currentTarget.value}px`
}

console.log(inputRange.value);

