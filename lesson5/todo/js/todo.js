import { qs, writeToLS, readFromLS, bindTouch } from "./utils.js";

let liveToDos = null;

function renderList(list, element, hidden) {
  console.log(list);
  element.innerHTML = "";

  list.forEach(toDo => {
    const item = document.createElement("li");
    const formattedDate = new Date(toDo.id).toLocaleDateString("en-US");

    item.innerHTML = `<input type="checkbox"><label>${toDo.content}</label><button>X</button>`;
    element.appendChild(item);
  });
}
function getToDos(key) {
  if (liveToDos === null) {
    // we need to go read the list from the data store
    liveToDos = readFromLS(key) || [];
  }

  return liveToDos;
}

function addToDo(value, key) {  
  // use Date.now()
  const newToDo = {
    id: new Date(),
    content: value,
    completed: false
  };
  liveToDos.push(newToDo);
  //writeToLS(key, liveToDos);
}

function removeToDo(value, key) {
  const removTodo = {
    id: new Date(),
    content: value,
    completed: true
  };
  liveToDos.pop(removTodo)
}



// this would be done last if you still have time
function filterToDos(key, completed = true) {
  let toDos = getToDos(key);
  return toDos.filter(item => item.completed === hidden);
}

function findTodo(id) {}
function completeTodo(id) {}

// public
export default class ToDos {
  constructor(listElement, key) {
    // opted to store the listElement inside the class.
    this.listElement = listElement;
    // key for localStorage saving and lookup
    this.key = key;
    // why bind here?
    bindTouch("#addToDo", this.newToDo.bind(this));
    this.listToDos();
    bindTouch("#removeTodo", this.removTodo.bind(this));
    this.listToDos();
  }

  newToDo() {
    const task = document.getElementById("todoInput");
    addToDo(task.value, this.key);
    task.value = "";
    this.listToDos();
  }

  removTodo() {
    const task2 = document.getElementById("todoInput");
    removeToDo(task.value, this.key);
    task2.value = "";
    this.listToDos();
  }

  listToDos(hidden = true) {
    renderList(getToDos(this.key), this.listElement, hidden);
  }
}

