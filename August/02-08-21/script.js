//modifying text nodes
//property
//length
//data
//methods :-  
// appendData(string)
//deleteData(start,length)
//insertData(start,string)
//replaceData(start,length,string)
//splitText(start)
//substringData(start,length)


// let heading = document.getElementById("head");
// console.log(heading.firstChild.appendData("  world"));

// console.log(heading.firstChild.deleteData(0,5));
// heading.firstChild.insertData(0,"World  ");

//heading.firstChild.replaceData(3,4,"go");

//console.log(heading.firstChild.splitText(3));

// console.log(heading.firstChild.substringData(0,5));

// DOM TOKEN LIST
//ClassList
//length
//value
//methods
// item()
// add()
// remove()
// replace()
// contains()
// // toggle()


//     let head = document.getElementById("head");
//     let allClass = head.classList;
//     // console.log(allClass.item(2));
//     // allClass.add("class4");
//     // allClass.remove("class2");
//     allClass.replace("class2","class10");
//     console.log(allClass.value);
//     console.log(allClass.contains("class3"));
//     allClass.toggle("class6");
//     console.log(allClass.value);
    

let head = document.getElementById("head");
// console.log(window.getComputedStyle(head));
// head.style.color = "red";
// head.style.backgroundColor = "grey";

// head.style.setProperty("margin","100px");
// head.setAttribute("style","background-color:blue");
// let css = head.style;
// //console.log(css.getPropertyValue("color"));
// let hh = css.getPropertyPriority("color");
// console.log(hh);
// getPropertyValue(property)
// getPropertyPriority(property)
// removeProperty(property)
// setProperty(property, value, priority)
// item(index)

//window.getComputedStyle(element);

// let table = document.getElementById("mytable");
// let thead = table.tBodies;
//  thead[0].innerHTML = "<tr> <th>student id </th> <th>student name </th></tr>";
// console.log(thead);
// caption 
// tHead
// tFoot
// tBodies