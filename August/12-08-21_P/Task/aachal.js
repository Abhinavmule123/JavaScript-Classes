
let addBtn = document.getElementById("add-todo-btn");
let modal = document.getElementById("modal");
let bg = document.getElementById("background");
let manageTodo = document.getElementById("manage-todo");
let manageBtn = document.getElementById("manage-btn");
let addTodoForm = document.getElementById("add-todo-form");
let todoList = document.getElementById("todoList");
let manageTabele = document.getElementById("todo-list");
let completedList = document.getElementById("completedList");

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
          toast("please enter your todo");
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
    addTodoForm.reset();

    addToManageTodo(todo);
    markTodo(markBtn);
}

function markTodo(markBtn){
    markBtn.onclick = function(){
        let li = markBtn.parentElement;
        let newli = li;
        li.remove();
        newli.childNodes[1].className = "unmark-btn";
        newli.childNodes[1].textContent ="UnMark";
        console.log(newli);
        completedList.append(newli);
        unmarkTodo(newli.childNodes[1]);

    }
}

function unmarkTodo(unmarkBtn){
    unmarkBtn.onclick = function(){
        let li = unmarkBtn.parentElement;
        let newli = li;
        li.remove();
        newli.childNodes[1].className = "mark-btn";
        newli.childNodes[1].textContent ="Mark";
        console.log(newli);
        todoList.append(newli);

        markTodo(newli.childNodes[1]);

    }
}
let Srno = 1;

function addToManageTodo(todo){
    let tr = document.createElement("tr");
    let sr_td = document.createElement("td");
    let todo_td = document.createElement("td");
    let edit_td = document.createElement("td");
    let del_td = document.createElement("td");

    sr_td.align = "center";
    todo_td.align = "center";
    edit_td.align = "center";
    del_td.align = "center" ;

    sr_td.textContent = Srno++;
    todo_td.textContent = todo;

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit" ;
    editBtn.className = "edit-btn";

    let delBtn =document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "del_btn";

    edit_td.append(editBtn);
    del_td.append(delBtn);

    tr.append(sr_td);
    tr.append(todo_td);
    tr.append(edit_td);
    tr.append(del_td);

    manageTabele.append(tr);

    editTodo(editBtn);
    deleteTodo(delBtn);
}


function editTodo(editBtn){
    let oldTodoname ;
    editBtn.onclick = function(){
        if(editBtn.className =="edit-btn"){
            editBtn.className = "update-btn";
            editBtn.textContent = "update";
            let tr = editBtn.parentElement.parentElement;
            let todo_td = tr.childNodes[1];
            oldTodoname = todo_td.textContent;
            todo_td.setAttribute("contenteditable" ,true);
            todo_td.style.border = "2px dashed blue";
            console.log(oldTodoname);
        }else{
            editBtn.className = "edit-btn";
            editBtn.textContent = "edit"
            let tr = editBtn.parentElement.parentElement;
            let todo_td = tr.childNodes[1];
            newTodo = todo_td.textContent;
            todo_td.setAttribute("contenteditable" ,true);
            todo_td.style.border = "1px solid black";
            

            let allLi = document.querySelectorAll("#todoList li");
            for(i=0; i<allLi.length; i++)
            if(allLi[i].children[0].textContent.indexOf(oldTodoname) !=-1){
                allLi[i].children[0].textContent = newTodo;
                break;

            }

        }

        let compLi = document.querySelectorAll("#completedList li");
            for(i=0; i<compLi.length; i++)
            if(compLi[i].children[0].textContent.indexOf(oldTodoname) !=-1){
                compLi  [i].children[0].textContent = newTodo;
                break;

            }

        }
   

    }



function deleteTodo(delBtn){
    let oldTodoname
    delBtn.onclick = function(){
        alert("hello");
        let tr = delBtn.parentElement.parentElement; 
        oldTodoname = tr.childNodes[1].textContent;
        tr.remove();

        let allLi = document.querySelectorAll("#todoList li");
        for(i=0; i<allLi.length; i++){
            if(allLi[i].children[0].innerHTML.indexOf(oldTodoname) != -1){
                allLi[i].remove();
            }
        }

        let completedAllLi = document.querySelectorAll("#todoList li");
        for(i=0; i<completedAllLi.length; i++){
            if(completedAllLi[i].children[0].innerHTML.indexOf(oldTodoname) != -1){
                completedAllLi[i].remove();
            }
        }

    }


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
function toast(msg){
let toast = document.getElementById("toast");
let toastText = document.getElementById("toast-text");
toastText.textContent = msg;
toast.style.display = "block";

setTimeout(function(){
    toast.style.display = "none";
},2000);

}