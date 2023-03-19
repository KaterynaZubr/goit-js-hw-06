const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listUl = document.querySelector("#ingredients");

const collectLi = [];

for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList = "item";
  collectLi.push(liEl);
}

listUl.append(...collectLi);


