const categories = document.querySelectorAll("#categories >.item");

console.log(`Number of categories: ${categories.length}`);
categories.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`
    )
    console.log(`Elements: ${el.lastElementChild.childElementCount}`)
    
});

