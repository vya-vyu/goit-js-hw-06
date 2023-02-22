const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const listItem = document.createElement('li');
listItem.classList.add('item');

const listItemsIngradients = ingredients.reduce((acc, el) => {
  listItem.textContent=el
  acc.push(listItem.outerHTML)
  return acc
}, []).join('');

list.insertAdjacentHTML('beforeend', listItemsIngradients)


// const listItemsIngradients = ingredients.map(el => {
//   const listItem = document.createElement('li');
//   listItem.classList.add('item');
//   listItem.textContent = el;
//   console.log(el);
//   console.log(listItem);
//   return listItem;
// }); 
// console.log(listItemsIngradients);

// list.append(...listItemsIngradients);



