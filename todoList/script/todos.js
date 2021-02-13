import {
    ToDo
} from './todo.js';

// empty todo list array
let todos = [];


//check local storage for exiting ToDo item
if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem("todos"));
}

//update local stroage
let storageArray = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

//clean the input content.
let clean = () => {
    document.querySelector('#content').value = "";
}


//list Check 
let listCheck = (e) => {
    console.log(e.target.tagName);
    let currentP = (e.target);
    //console.log(todos);
    if (e.target.tagName === 'INPUT') {
        const id = parseInt(e.target.value);
        const todo = todos.find(todo => todo.Id === id);
        console.log(todo);
        todo.Completed = !todo.Completed;
        storageArray();
        setTodoList();
    }
    if(e.target.tagName === 'P'){
        console.log(e.target);
        const id = parseInt(currentP.className);        
        const todo = todos.find(todo => todo.Id === id);
        let x = todos.indexOf(todo);
        todos.splice(x, 1);
        storageArray();
        if(todos.length === 0){
            let todoList = document.querySelector('#toDo');
            todoList.innerHTML = "";
            let finishedList = document.querySelector('#finished');
            finishedList.innerHTML = "";
            let listNumber = document.querySelector('.list-number');
            listNumber.textContent = "Great! You are freeeee~~";
            let finishNumber = document.querySelector('.finish-number');
            finishNumber.textContent = "Do something!";
        }
        setTodoList();
    }
}

// Create li and in put content to ul
let setTodoList = () => {
    if (todos.length > 0) {
        let todoList = document.querySelector('#toDo');
        todoList.innerHTML = "";
        let finishedList = document.querySelector('#finished');
        finishedList.innerHTML = "";
        let listNum = 0;
        let finishNum = 0;
        todos.forEach(
            (todo) => {
                if (todo.Completed === false) {
                    listNum++;
                    const li = document.createElement('li');
                    li.addEventListener('click', listCheck);
                    li.id = todo.Id;
                    li.innerHTML =
                        `
                    <div class = "check">
                        <input type = 'checkbox' 
                        value = "${todo.Id} ${todo.Completed ? "check": ""}" 
                        class = "checked">                        
                        ${todo.Content}
                    </div>
                    <div class = "x">
                        <p class= "${todo.Id}">x</p>
                    </div>
                    `
                    todoList.appendChild(li);
                } else {
                    finishNum++;
                    const li = document.createElement('li');
                    li.addEventListener('click', listCheck);
                    li.id = todo.Id;
                    li.innerHTML =
                        `
                    <div class = "check">
                        <input type = 'checkbox' 
                        value = "${todo.Id} ${todo.Completed ? "check": ""}" 
                        class = "checked">                        
                        ${todo.Content}
                    </div>
                    <div class = "x">
                        <p class= "${todo.Id}">x</p>
                    </div>
                    `
                    finishedList.appendChild(li);
                }
            });


            let listNumber = document.querySelector('.list-number');
            if(listNum === 0){
                listNumber.textContent = "Great! You are freeeee~~";
            }else{
                listNumber.textContent = "Only " + listNum + " Things to do";
            }

            let finishNumber = document.querySelector('.finish-number');
            if(finishNum === 0){
                finishNumber.textContent = "Do something!";
            }else{
                finishNumber.textContent = "Great! You finieshed "+ finishNum + "things" ;
            }

    }

}

//check local storage for exiting ToDo item
setTodoList();

// Add Button Even.
// take content and push to the todos array.
let button = document.querySelector('#addBtn');
let save = (event) => {
    //prevent form submiting
    event.preventDefault();
    const contentElement = document.querySelector("#content");

    if (contentElement.value === "") {
        alert('Please Enter your ToDo list!');
    } else {
        const newTodo = new ToDo(contentElement.value);
        todos.push(newTodo);
        console.log(todos);
        storageArray();
        setTodoList();
        clean();
    }
}
button.addEventListener('click', save);