//DOM MANIPULATION

const heroes = document.getElementById("roster");
heroes.innerHTML = '<li>Harley Quinn</li><li>Deadshot</li><li>Killer Croc</li><li>Enchantress</li><li>Captain Boomerang</li><li>Katana</li><li>Slipknot</li>';
console.log(heroes)
const h1 = document.getElementById("title");
const oldText = h1.firstChild;
const newText = document.createTextNode("Justice League of America")
const flash = document.createElement("li");

//APPEND AN ITEM
flash.textContent = "Flash";
heroes.appendChild(flash)
h1.replaceChild(newText, oldText)
console.log(heroes)
console.log(hi)


const superman = heroes.children[0];

superman.style.border = "red 2px solid";
console.log(superman)



//console.log(heroes.childNodes);

//console.log(body);

//CREATING DYNAMIC MARKUP
// const flash = document.createElement("li");
// const flashText = document.createTextNode("flash");
//  flash.appendChild(flashText)

//  flashText.textContent = flash;
//  console.log(flashText)


function createElement(tag, text) {
    const element = document.createElement(tag)
    element.textContent = text;
    return element;
}
//console.log(createElement());