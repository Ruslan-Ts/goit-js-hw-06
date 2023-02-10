const countDownBtn = document.querySelector('button[data-action="decrement"]');
const countUpBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');


let counterValue = 0

countUpBtn.addEventListener('click', onKeyUp);
countDownBtn.addEventListener('click', onKeyDown);

function onKeyUp() {
    return counter.textContent = counterValue += 1;
    // return markup(counterValue);
}
function onKeyDown() {
    return counter.textContent = counterValue -= 1;
    // return markup(counterValue);
}
