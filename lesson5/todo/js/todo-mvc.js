

//  model code here.
class ToDoModel {
  constructor(key) {
    // key for localStorage saving and lookup
    this.key = key;
    // try and read from localStorage to see if there are any pre-existing todos...otherwise set the list to an empty array
    this.toDos = readFromLS(this.key) || [];
  }
  getToDos() {
    // make sure the stored list of toDos matches what is in localstorage. Do we really need to do this? Maybe not.
    this.toDos = readFromLS(this.key);
    //check to make sure we found something...mention that maybe this error checking may be better done in the readFromLS function
    if (!this.toDos) {
      this.toDos = [];
    }
    return this.toDos;
  }
  // this would be done last if you still have time...and if you haven't blown too many minds yet :)  If you do get here...mention how similar this method is with getToDos...they could probably be combined easily.
  filterToDos(completed = true) {
    this.toDos = readFromLS(this.key);
    // return a list of either completed or not completed toDos based on the parameter.
    return this.toDos.filter(item => item.completed === hidden);
  }
  addToDo(value) {
    // use Date.now() for UTC millisecond string.
    const newToDo = {
      id: new Date(),
      content: value,
      completed: false
    };
    this.toDos.push(newToDo);
    //writeToLS(this.key, this.toDos);
  }

  removeTodo(value) {
    const removTodo = {
      id: new Date(),
      content: value,
      completed: true
    };
    this.toDos.pop(value);
    
  }
  findTodo(id) {}
  completeTodo(id) {}
}
function writeToLS(key, data) {
  // we can use JSON.stringify to convert our object to a string that can be stored in localStorage.
  window.localStorage.setItem(key, JSON.stringify(data));
}

function readFromLS(key) {
  // the string we retrieve from localStorage needs to be converted back to an object with JSON.parse
  return JSON.parse(window.localStorage.getItem(key));
}

// Controller
export default class ToDoController {
  constructor(listElement) {
    // opted to store the listElement inside the class.
    this.listElement = listElement;
    // create a new instance of our model and add it to the controller.
    this.toDoModel = new ToDoModel("todo");
    this.listToDos();
  }

  newToDo(value) {
    this.toDoModel.addToDo(value);
    this.listToDos();
  }

  removTodo(value) {
    this.toDoModel.removeTodo(value);
    this.listToDos();
  }

  listToDos(hidden = true) {
    renderList(this.toDoModel.getToDos(), this.listElement, hidden);
  }
}
// View code here
function renderList(list, element, hidden) {
  console.log(list);
  element.innerHTML = '';

  list.forEach(toDo => {
    const item = document.createElement('li');
    const formattedDate = new Date(toDo.id).toLocaleDateString("en-US");

    item.innerHTML = `${formattedDate}: ${toDo.content}`;
    element.appendChild(item);
  });
}

