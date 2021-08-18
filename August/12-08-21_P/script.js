//selecting element in js
let addBtn = document.getElementById("add-todo-btn");
let modal = document.getElementById("modal");
let bg = document.getElementById("background");
let manageTodo = document.getElementById("manage-todo");
let manageBtn = document.getElementById("manage-btn");
let addTodoForm = document.getElementById("add-todo-form");
let todoList = document.getElementById("todoList");
let manageTable = document.getElementById("todo-list");
let completedList = document.getElementById("completedList");

// display modal
addBtn.onclick = function(){
    bg.style.display = "block";
    modal.style.display = "block";
    modal.className = "animate__animated animate__slideInDown";

    addTodoForm.onsubmit = function(e){
        e.preventDefault();
      let todo = document.getElementById("todo");
      if((todo.value).trim()  != ""){
            addTodo(todo.value);
      }else{
          toast("Please enter your todo !");  
      }  
    }
}

//adding todo to today's task box
function addTodo(todo){
    let li = document.createElement("LI");
    let p = document.createElement("P");
    p.append(document.createTextNode(todo));

    let markBtn = document.createElement("BUTTON");
    markBtn.textContent = "Mark";
    markBtn.className = "mark-btn";

    li.append(p);
    li.append(markBtn);

    todoList.append(li);

    addTodoForm.reset();
    toast("Your Todo Added Successfully !");
    addToManageTodo(todo);
    markTodo(markBtn);
}
