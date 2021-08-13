// 1.  parentNode and parentElement
// let secondLi = document.getElementById("second-li");
// console.log(secondLi.parentElement);
//2. firstChild and firstElementChild

// let ul = document.getElementById("list");
// console.log(ul.firstChild);

//3. lastChild and lastElementChild

// let ul = document.getElementById("list");
// console.log(ul.lastChild);

//4.previousSibling and previousElementSibling
// let secondLi = document.getElementById("second-li");
// console.log(secondLi.previousElementSibling);

//6.nextSibling and nextElementSibling
// let secondLi = document.getElementById("second-li");
// console.log(secondLi.nextSibling);

//8. childNodes and childern

// let ul = document.getElementById("list");
// console.log(ul.children);


let h1tag =  document.createElement("H1"); // for element/tag creation 
let dcomment = document.createComment("This is dynamic h1 tag created");
let txt = document.createTextNode("Hello World");
console.log(h1tag);
console.log(dcomment);
console.log(txt);
// // targetElement.append(sourceElement);
// h1tag.append(dcomment);
// h1tag.append(txt);/
// console.log(h1tag);
//  let appendTag = document.getElementById("heading");
/// appendTag.append(h1tag);

// let head = document.getElementById("head");

// let dTag = document.createElement("h2");
// dTag.textContent = "this h2 tag";

 //console.log(head.innerHTML);
//  console.log(appendTag.innerText);

// console.log(head.innerText);

// console.log(head.outerHTML);



// appendTag.append(dTag);

//  


// appendTag.appendChild(dTag);

// appendTag.insertBefore(dTag,head);

// innerHTML , outerHTML , innerText, 

//let h1tag = document.getElementById("head");
// h1tag.content1 = "tags";

// h1tag.setAttribute("align","center"); 
// h1tag.setAttribute("content","tag");

// let elementID = h1tag.getAttribute("id");
// console.log(elementID);

// h1tag.removeAttribute("align");
// h1tag.align = "center"; // 
// console.log(h1tag);