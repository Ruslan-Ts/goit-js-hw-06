
const listCategory = document.querySelector("#categories");
const itemCategory = listCategory.querySelectorAll(".item");
console.log(`Number of categories: ${itemCategory.length}`);
itemCategory.forEach((item) => {
   console.log(`Category: ${item.querySelector("h2").textContent}`); 
   console.log(`Elements: ${item.querySelectorAll("li").length}`);
});