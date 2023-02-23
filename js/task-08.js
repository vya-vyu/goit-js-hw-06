const formLogin = document.querySelector('.login-form');
formLogin.addEventListener('submit', handleForm);

function handleForm(event) {

    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const user = {};
    formData.forEach((value, name) => {
            
            if (value.length > 0) {
                user[name] = value;
            }
           
        });
   
    checkForm(user);
    formLogin.reset();
}

function checkForm(obj) { 
    if (Object.keys(obj).length === formLogin.length - 1) { 
        console.log(obj);
    }else {
        alert("Всі поля повинні бути заповнені!")
        return;
    }
}




