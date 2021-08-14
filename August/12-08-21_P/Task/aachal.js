
let addBtn = document.getElementById("add-todo-btn");
let modal = document.getElementById("modal");
let bg = document.getElementById("background");
let manageTodo = document.getElementById("manage-todo");
let manageBtn = document.getElementById("manage-btn");
let addTodoForm = document.getElementById("add-todo-form");
let todoList = document.getElementById("todoList");


addBtn.onclick = function(){
    bg.style.display = "block";
    modal.style.display = "block";
    modal.className = "animate__animated animate__slideInDown";


    addTodoForm.onsubmit = function(e){
        e.preventDefault();
      let todo = document.getElementById("todo");
      if((todo.value).trim()  != ""){
          addTodo(todo.value);

      }  else{
          alert("please enter your todo");
      }
                               
    }
}
function addTodo(todo){
    let li =document.createElement("LI");
    let p =document.createElement("p");
    p.append(document.createTextNode(todo));

    let markBtn = document.createElement("BUTTON");
    markBtn.textContent = "Mark";
    markBtn.className = "mark-btn";

    li.append(p);
    li.append(markBtn);
    console.log(li);

    todoList.append(li);
    addTodoForm.requestFullscreen();

}


bg.onclick = function(){
    bg.style.display = "none";
    modal.style.display = "none";
    manageTodo.style.left = "-50%";
}

manageBtn.onclick = function(){
    bg.style.display = "block";
    manageTodo.style.left = "50%";
}
