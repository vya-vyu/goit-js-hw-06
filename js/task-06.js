const input = document.querySelector('input');
input.addEventListener('blur', validationInput);


function validationInput({ target: { value: str, dataset: { length:minLength} } }) { 
    if (Number(minLength) <= str.length) {
         resultValid("valid")
    } else { 
         resultInvalid('invalid')
    }
}

function resultValid(str) { 
    input.classList.add(str);
    input.classList.remove('invalid');
}

function resultInvalid(str) { 
    input.classList.remove('valid');
    input.classList.add(str);
    
}
