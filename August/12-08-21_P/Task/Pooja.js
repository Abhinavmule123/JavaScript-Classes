let addBtn = document.getElementById("add-todo-btn");
let modal = document.getElementById("Addmodal");
let bg = document.getElementById("Addmodal_background");

 addBtn.onclick = function(){
  bg.style.display = "block";
   modal.style.display = "block";
   modal.className = "animate__animated animate__flip";
 }

 bg.onclick = function(){
    bg.style.display = "none";
    modal.style.display = "none";
    manageTodo.style.left = "-50%";
}