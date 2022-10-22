import ToDoController from "./todo.js";

const list = document.getElementById("todoList");
const myToDos = new ToDoController(list);

document.getElementById("addToDo").addEventListener("click", () => {
  const task = document.getElementById("todoInput").value;
  myToDos.newToDo(task);
});

document.getElementById("removeToDo").addEventListener("click", () =>{
  const task2 = document.getElementById("todoInput").value
  myToDos.removTodo(task2)
})


