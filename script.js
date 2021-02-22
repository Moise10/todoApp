//selecting element on the page
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')


// Adding event listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteTodo)
filterOption.addEventListener('click', filterTodo)


function addTodo(e){
  e.preventDefault();
  //creating the div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo')
  //creating the Li
  const newTodo = document.createElement('li');
  newTodo.classList.add('todo-item');
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);
  //creating the completed button
  const completedButton = document.createElement('button');
  completedButton.classList.add('complete-btn')
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  todoDiv.appendChild(completedButton);
  //creating the delete button
  const trashButton = document.createElement('button');
  trashButton.classList.add('trash-btn')
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
  todoInput.value = '';
}

function deleteTodo(e){
  console.log(e.target)
  const item = e.target;
  if(item.classList[0] === 'trash-btn'){
    const todo = item.parentElement;
    todo.classList.add('fall');
    todo.addEventListener('transitionend',() =>{
      todo.remove();
    })
  }
  if(item.classList[0] === 'complete-btn'){
    const todo = item.parentElement
    todo.classList.toggle('completed')
  }
}

function filterTodo(e){
  const todos = todoList.childNodes;
  console.log(todos)
}


