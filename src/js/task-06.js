const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInput);

function onInput(event) {
    
    //    if (event.currentTarget.value.length === '') {
    //        input.style.border = '3px solid #bdbdbd';

    
    if (event.currentTarget.value.length <= 6) {
        input.classList.add('invalid');
    

    } else if (event.currentTarget.value.length > 6) {
        input.classList.add('valid');

    }
}