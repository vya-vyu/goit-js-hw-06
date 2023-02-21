let counterValue = 0;

const result = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]')

decrement.addEventListener('click', () => {
    counterValue -= 1
    return result.textContent=counterValue;
});
increment.addEventListener('click', () => {
    counterValue += 1
    return result.textContent=counterValue;
});


