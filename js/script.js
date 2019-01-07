/*function myTest() {
    var q1 = document.form["myform"]["optradio1"].val();
    var q2 = document.form["myform"]["optradio2"].val();
    var q3 = document.form["myform"]["optradio3"].val();
    var q4 = document.form["myform"]["optradio4"].val();
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
    alert("your score is:" + marks)
    event.preventDefault();
}
*/
$(document).ready(function (){
    $('#blanks form').submit(function(event){
    var marks=0;
      var blanks=["choice1", "choice2","choice3","choice4"]
        blanks.forEach(function(blank) {
            var userInput = $("input:radio[name=" + blank + "]:checked" ).val();
                    if(userInput=="B"){
                    marks = marks+10;
                    }
                })
          alert(marks)
    event.preventDefault();
    });
    });
