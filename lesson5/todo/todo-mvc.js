
//  model 
class ToDoModel {
  constructor(key) {
    // key for localStorage 
    this.key = key;
    // read from localStorage to see if there are any pre-existing todos
    this.toDos = readFromLS(this.key) || [];
  }
  getToDos() {
   
    this.toDos = readFromLS(this.key);
    //check to make sure we found something
    if (!this.toDos) {
      this.toDos = [];
    }
    return this.toDos;
  }
  filterToDos(completed = true) {
    this.toDos = readFromLS(this.key);
    
    return this.toDos.filter(item => item.completed === hidden);
  }
  addToDo(value) {
    // use Date.now() 
    const newToDo = {
      id: new Date(),
      content: value,
      completed: false
    };
    this.toDos.push(newToDo);
    writeToLS(this.key, this.toDos);
  }
  findTodo(id) {}
  completeTodo(id) {}
}
function writeToLS(key, data) {
  //JSON.stringify t
  window.localStorage.setItem(key, JSON.stringify(data));
}

function readFromLS(key) {
  // the string we retrieve from localStorage 
  return JSON.parse(window.localStorage.getItem(key));
}

// Controller
export default class ToDoController {
  constructor(listElement) {
    this.listElement = listElement;
    this.toDoModel = new ToDoModel('todo');
    this.listToDos();
  }

  newToDo(value) {
    this.toDoModel.addToDo(value);
    this.listToDos();
  }

  listToDos(hidden = true) {
    renderList(this.toDoModel.getToDos(), this.listElement, hidden);
  }
}
function renderList(list, element, hidden) {
  console.log(list);
  element.innerHTML = '';

  list.forEach(toDo => {
    const item = document.createElement('li');
    const formattedDate = new Date(toDo.id).toLocaleDateString('en-US');

    item.innerHTML = `${formattedDate}: ${toDo.content}`;
    element.appendChild(item);
  });
}