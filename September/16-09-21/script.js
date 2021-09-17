$(document).ready(function(){
    //text()
    // const h1 = document.getElementById("h1");
    // console.log(h1.textContent) 
    //h1.textContent = "this is world";
    //$("h1").text("This is world");
    //console.log($("h1").text());

    //html()  == innerHTML
    //const div = document.getElementById("container");
    //console.log(div.innerHTML);
    // $("#container").html("<b>Hello World</b>");
    // console.log();

    //val()
    // const myForm = document.getElementById("myform");
    // const name = document.getElementById("name");
    // myForm.onsubmit  = function(e){
    //     e.preventDefault();
    //     console.log(name.value);
    // }

    // using jquery
    // $("#myform").submit(function(e){
    //     e.preventDefault();
    //     $("#name").val("Abhinav Mule");
    //     console.log($("#name").val());
    // });

    // const div = document.getElementById("container");
    // let h1 = document.createElement("H1");
    // h1.textContent = "hello world";
    // div.append(h1);

    //let secondElement  = "<h2>This is h2 tag</h2>";

    // $("#h1").append("<h1>This is h1 Tag</h1>",secondElement);
    //$("#h1").prepend("<h1>This is h1 Tag</h1>",secondElement);


    //$("#h1").after(secondElement,"<h3>this is h3 tag</h3>");
    //$("#h1").before(secondElement,"<h3>this is h3 tag</h3>");

    // remove 
    // $("button").click(function(){
    //     $("h1").remove("#h1");
    // });

    //empty
    // $("button").click(function(){
    //     $("#myform").empty();
    // });

    //console.log($("#name").attr("type","file"));

    // innerWidth - padding + width 
    // innerHeight - padding  + height
    console.log($("#box").innerWidth()); //300+20+20 = 
    console.log($("#box").innerHeight()); //300+20+20

    //outerWidth - padding + border + width 
    //outerHeight - padding + border + height 
    console.log($("#box").outerWidth());  //340 + 20 = 360 +20 + 20 = 400
    console.log($("#box").outerHeight());  //340 + 20 = 360

    //outerWidth - padding + border + width + margin
    //outerHeight - padding + border + height + margin
    console.log($("#box").outerWidth(true));  //340 + 20 = 360 +20 + 20 = 400
    console.log($("#box").outerHeight(true));  //340 + 20 = 360 +20 + 20 = 400

});