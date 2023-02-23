const formLogin = document.querySelector('.login-form');
formLogin.addEventListener('submit', handleForm);


function handleForm(event) {

    event.preventDefault();
    const user = {}
    const formData = new FormData(event.currentTarget);
    
        formData.forEach((value, name) => {
            if (value.length > 0) {
                user[name] = value;
            }
            else {
                alert("Всі поля повинні бути заповнені!")
            }
        });
    
    console.log(user);
    formLogin.reset();
}




