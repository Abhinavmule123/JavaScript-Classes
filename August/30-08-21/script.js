//let course = ["javascript","abhinav","3 month",[]];
// let courseName = course[0];
// let courseTutor = course[1];
// let courseDuration = course[2];
// let courseStu1 = course[3][0];
// document.write(courseStu1);
// document.write(courseName+"<br>");
// document.write(courseTutor+"<br>");
// document.write(courseDuration+"<br>");

    //["javascript","abhinav","3 month"]
// let [a,courseTutor="rahul",courseDuration,[courseStu1="some student",courseStu2="some student 2"]] = course;
// //document.write(courseName+"<br>");
// document.write(courseTutor+"<br>");
// document.write(courseDuration+"<br>");
// document.write(courseStu1+"<br>"+courseStu2);

// object destrcturing
// let course = {
//     courseTutor : "abhinav",
//     courseDuration : "3 month"
// };
// let courseName = course.courseName;
// let courseTutor = course.courseTutor;
// let courseDuration = course.courseDuration;
// document.write(courseName+"<br>");
// document.write(courseTutor+"<br>");
// document.write(courseDuration);

// let {courseTutor:cTutor,courseDuration:cDuration,courseName:cName} = course;
// document.write(cName+"<br>");
// document.write(cTutor+"<br>");
// document.write(cDuration);


// let {courseTutor:cTutor="rhaul",courseDuration:cDuration="2 month"} = course;
// // document.write(cName+"<br>");
// document.write(cTutor+"<br>");
// document.write(cDuration);

// let {courseName,courseTutor,courseDuration} = {courseName : "javascript",courseTutor:"abhinav",courseDuration: "3 month"};
// document.write(courseName+"<br>");
// document.write(courseTutor+"<br>");
// document.write(courseDuration);

// let course = {courseName : "javascript",courseTutor:"abhinav",courseDuration: "3 month"};
// // let {courseName,courseTutor,courseDuration} = course;
// function show({courseName,courseTutor,courseDuration}){
    // document.write(courseName+"<br>");
    // document.write(courseTutor+"<br>");
    // document.write(courseDuration);
// }

// show(course);


// function show(){
//     let course = {courseName : "javascript",courseTutor:"abhinav",courseDuration: "3 month"};
//     return course;
// }
// let {courseName,courseTutor,courseDuration} = show();
// document.write(courseName+"<br>");
// document.write(courseTutor+"<br>");
// document.write(courseDuration);

// let course = {
//     courseName : "javascript",
//     courseTutor : "abhinav",
//     courseDuration : "3 month",
//     students : {
//         stu1 : "rahul",
//         stu2 : "rohan"
//     }
// };
// let {courseName,courseTutor,courseDuration,students :{stu1:s1="soham",stu2:s2="sachin"}} = course;
// document.write(s1+"<br>"+s2);
