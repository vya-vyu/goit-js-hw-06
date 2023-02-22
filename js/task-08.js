const formLogin = document.querySelector('.login-form');
formLogin.addEventListener('submit', handleForm);
const user = {}

function handleForm(event) {

    event.preventDefault();

    const { target: { 0: { value: loginEmail, name: keyEmail },
        1: { value: password, name: keyPassword } } } = event
    
    if (checkForm(loginEmail, password)) {
        user[keyEmail] = loginEmail;
        user[keyPassword] = password;
        console.log(user);
        formLogin.reset();
    } else {
        alert('Всі поля повинні бути заповнені!')
    }
}

function checkForm(email, pas) { 
    return email.length > 0 && pas.length > 0 ? true : false;
}

