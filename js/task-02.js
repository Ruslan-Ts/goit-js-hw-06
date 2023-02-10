const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const listOfIngredients = document.querySelector('ul#ingredients');

// ingredients.forEach((value) => {
//   const itemsOfIngredients = document.createElement('li');
//     // const itemOfIngredients = document.createElement('li');
//     itemOfIngredients.classList.add('item');
//     itemOfIngredients.textContent += value;
//   })

// console.log(itemsOfIngredients);


const listOfIngredients = document.querySelector('ul#ingredients');

let fragment = new DocumentFragment();

for (const value of ingredients) {
  const itemOfIngredients = document.createElement('li');
  itemOfIngredients.classList.add('item');
  itemOfIngredients.textContent += value;
  fragment.appendChild(itemOfIngredients);
}

listOfIngredients.append(fragment);