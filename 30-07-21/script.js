// let ul = document.createElement("UL");
// ul.id = "list";
// let comment = document.createComment("This is list");
// let firstLi = document.createElement("LI");
// let firstLiText = document.createTextNode("First");
// firstLi.append(firstLiText);
// let secondLi = document.createElement("LI");
// secondLi.id = "secondLi";
// secondLi.append(document.createTextNode("Second"));
// let thirdLi = document.createElement("LI");
// thirdLi.append(document.createTextNode("Third"));

// ul.append(comment);
// ul.append(firstLi);
// ul.append(secondLi);
// ul.append(thirdLi);

// console.log(ul);

// let box = document.getElementById("box");
// box.append(ul);

// let df = document.createDocumentFragment();
// df.append(ul);
// console.log(df);

// let secondLi = document.getElementById("secondLi");
// console.log(secondLi.outerHTML);


// let box = document.getElementById("box");
// let  referenceElement = document.getElementById("head");
// let h2 = document.createElement("h2");
// h2.textContent = "Thi is h2 tag"; 

// box.append(h2);
// box.prepend(h2);
// box.appendChild(h2);
// box.insertBefore(h2,referenceElement);

// referenceElement.insertAdjacentElement("afterend",h2);

// let h2 = "<h2 id='h2tag' style='color:red'>This is h2 tag</h2>";
//  referenceElement.insertAdjacentHTML("beforebegin",h2);

// referenceElement.insertAdjacentText("afterend","this is dynamic text");


//attrtibute set/get/remove/check methods
let h1 = document.querySelector("h1");
// h1.id = "head";
// console.log(h1.id);

// h1.setAttribute("id","head");
// let attr = h1.getAttribute("id");
// console.log(attr);

// h1.removeAttribute("id");

// let check  = h1.hasAttribute("id");
// if(check){
//     h1.removeAttribute("id");
// }else{
//     h1.setAttribute("id","head");
// }


//  let list = document.getElementById("list");
 //1. cloneNode(true/false)
// // let list2 = list;
// let duplicate_node = list.cloneNode(true);
// console.log(duplicate_node);

// let duplicat_body = document.body.cloneNode(true);
// console.log(duplicat_body);

//2.removeChild(element);
//  let secondLi = document.getElementById("secondLi");
// list.removeChild(secondLi);

//3.replaceChild(new,old)
// let li = document.createElement("LI");
// li.innerHTML = "New Li";

// list.replaceChild(li,secondLi);

let head = document.getElementById("head");
head.style.color = "white";
head.style.fontSize = "100px";
head.style.backgroundColor = "grey";
head.style.margin = "20px";
console.log(head.style.fontSize);
