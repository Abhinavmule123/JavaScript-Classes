let boldBtn = document.getElementById("bold-btn");
let italicBtn = document.getElementById("italic-btn");
let underlineBtn = document.getElementById("underline-btn");
let supBtn = document.getElementById("sup-btn");
let subBtn = document.getElementById("sub-btn");
let leftBtn = document.getElementById("left-btn");
let rightBtn = document.getElementById("right-btn");
let centerBtn = document.getElementById("center-btn");
let undoBtn = document.getElementById("undo-btn");
let redoBtn = document.getElementById("redo-btn");
let delBtn = document.getElementById("delete-btn");


boldBtn.onclick = function(){
    document.execCommand("bold");
}

italicBtn.onclick = function(){
    document.execCommand("italic");
}

underlineBtn.onclick = function(){
    document.execCommand("underline");
}

supBtn.onclick = function(){
    document.execCommand("superscript");
}

subBtn.onclick = function(){
    document.execCommand("subscript");
}

leftBtn.onclick = function(){
    document.execCommand("justifyLeft");
}

rightBtn.onclick = function(){
    document.execCommand("justifyRight");
}

centerBtn.onclick = function(){
    document.execCommand("justifyCenter");
}

undoBtn.onclick = function(){
    document.execCommand("undo");
}

redoBtn.onclick = function(){
    document.execCommand("redo");
}

delBtn.onclick = function(){
    document.execCommand("delete");
}