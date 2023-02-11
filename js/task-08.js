const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements
    const mail = formElements.email.value;
    const password = formElements.password.value;
    
    // const formData = new FormData(event.currentTarget);
    
    if (mail === '' || password === '') {
        alert('Заповніть всі поля!')
        return;
    }
    
    console.log(password);
    console.log(mail);
}
