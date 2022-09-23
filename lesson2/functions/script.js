function showExample() {
  console.log('This is a function');
}

showExample();

function multiplyNumbers() {
  const result = 4 * 5;
  console.log(result);
  return result;
}

multiplyNumbers();


const number1 = 3;
const number2 = 4;

function subtractNumbers() {
  return number2 - number1;
}

subtractNumbers();

function addNumbers(a, b) {
  return a + b;
}

let result = addNumbers(2, 3);

console.log(result);

console.log(addNumbers(number1, number2));

const name = "Dagwan";

function sayHello(name) {
  return `Hello, ${name}!`;
}

console.log(sayHello());

function yellSomething(something = "what?") {
  return `${something.toUpperCase()} Thank yo for saying something! `;
}

console.log(yellSomething(sayHello(name)));

console.log(yellSomething());

function createDiv(text) {
  const element = document.createElement("div");
  element.textContent = text;
  document.body.appendChild(element)
}

createDiv(yellSomething(sayHello("Dagwan")));

function sayHelloToName() {
  const nameElement = document.querySelector("#name");
  return sayHello(nameElement.value);
}


function saySomethingToMe(name, text = "who are you?") {
  const something = `Hey ${name}, ${text}`
  return something;
}

result = saySomethingToMe("Instructor", "teach JavaScript faster!");