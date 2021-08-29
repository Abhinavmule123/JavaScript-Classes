// let course = ["javaScript","abhinav","3 month"];
// course[0] course[1] course[2]
//long methods
// let courseName = course[0];
// let courseTutor = course[1];
// let courseDuration = course[2];

// document.write(courseName);
// document.write(courseTutor);
// document.write(courseDuration);

//using destructuring concept // shortcut way
//   ["javaScript","abhinav","3 month"]

// let [courseName,courseTutor] = course; 
// document.write(courseName+"<br>");
// document.write(courseTutor+"<br>");

// let [,,courseDuration] = course; 
// //document.write(courseName+"<br>");
// document.write(courseDuration+"<br>");

//  let course = ["javaScript","abhinav","3 month"];
// let [courseName,courseTutor="rahul",courseDuration="2 month"] = course; 
// document.write(courseName+"<br>");
// document.write(courseTutor+"<br>");
// document.write(courseDuration+"<br>");


// let [courseName,courseTutor="rahul",courseDuration="2 month"] = ["javaScript","abhinav","3 month"];
// document.write(courseName+"<br>");
// document.write(courseTutor+"<br>");
// document.write(courseDuration+"<br>");

// let course = ["javaScript","abhinav","3 month"];

// function show([courseName,courseTutor="rahul",courseDuration="2 month"]){
//     document.write(courseName+"<br>");
//     document.write(courseTutor+"<br>");
//     document.write(courseDuration);
// }
// show(course);




function show(){
    let course = ["javaScript","abhinav","3 month"];
    return course;
}


let [courseName="js",courseTutor="rahul",courseDuration="2 month"] =  show();
document.write(courseName+"<br>");
document.write(courseTutor+"<br>");
document.write(courseDuration);



// let [courseName,courseTutor,courseDuration] = course;
// document.write(courseName+"<br>");
// document.write(courseTutor+"<br>");
// document.write(courseDuration+"<br>");
