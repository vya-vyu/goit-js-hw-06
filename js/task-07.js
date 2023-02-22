const valueFontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

valueFontSize.addEventListener('input', setFontSize);

function setFontSize({ target: { value: textFontSize } }) { 
    text.style.fontSize = `${textFontSize}px`;
}

// function setFontSize() { 
//     text.style.fontSize = `${valueFontSize.value}px`;
// }



