const inputMassage = document.querySelector('#name-input');
const message = document.querySelector('#name-output');

inputMassage.addEventListener('input', (event) => { 
    message.textContent = event.currentTarget.value;
    if (event.currentTarget.value==='') { 
        message.textContent = "Anonymous";
    }
})

