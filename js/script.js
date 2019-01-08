$(document).ready(function(){

    $("form").submit(function(event){
       
       
        var optradio1 = parseInt($("input[type='radio'][name='answer1']:checked").val());
        // alert(optradio1);
        var optradio2 = parseInt($("input[type='radio'][name='answer2']:checked").val());
        
        var optradio3 = parseInt($("input:radio[name=answer3]:checked").val());
        var optradio4 = parseInt($("input:radio[name=answer4]:checked").val());

        var userInputs = [optradio1, optradio2, optradio3, optradio4];
        var score = 0;
        for (var i = 0; i < userInputs.length; i++){
            score += userInputs[i];
        }
        
        $(".final").show();
        $(".z").fadeOut();
        $("#display").text("Your score is:" + score+"/20");
        event.preventDefault();
      });

});