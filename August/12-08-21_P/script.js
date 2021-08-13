//selecting element in js
let addBtn = document.getElementById("add-todo-btn");
let modal = document.getElementById("modal");
let bg = document.getElementById("background");
let manageTodo = document.getElementById("manage-todo");
let manageBtn = document.getElementById("manage-btn");

// display modal
addBtn.onclick = function(){
    bg.style.display = "block";
    modal.style.display = "block";
    modal.className = "animate__animated animate__slideInDown";
}

// hiding modal , background and manage todo
bg.onclick = function(){
    bg.style.display = "none";
    modal.style.display = "none";
    manageTodo.style.left = "-50%";
}

//display manage todo
manageBtn.onclick = function(){
    bg.style.display = "block";
    manageTodo.style.left = "50%";
}
