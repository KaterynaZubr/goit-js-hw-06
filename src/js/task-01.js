const ulNumber = document.querySelector("#categories")

console.log(`Number of categories: ${ulNumber.children.length}`)

const liItem = document.querySelectorAll(".item")

liItem.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`)
    console.log(`Elements: ${el.lastElementChild.children.length}`)
})
