function myTest() {
    var q1 = document.form["myform"]["optradio1"].value;
    var q2 = document.form["myform"]["optradio2"].value;
    var q3 = document.form["myform"]["optradio3"].value;
    var q4 = document.form["myform"]["optradio4"].value;
    var marks = 0;
    if (q1 == "An object-oriented computer programming language commonly used to create interactive effects within web browsers.") {
        marks = marks + 5;
    }
    if (q2 == "Netscape") {
        marks = marks + 5;
    }
    if (q3 == "None") {
        marks = marks + 5;
    }
    if (q4 == "The delete keyword") {

    }
    alert("your score is:" + marks);
}