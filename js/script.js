        $(document).ready(function(){

            $("form").submit(function(event){
                event.preventDefault();
                var optradio1 = $("input[type='radio'][name='answer1']:checked").val();
                // alert(optradio1);
                var optradio2 = $("input[type='radio'][name='answer2']:checked").val();
                
                var optradio3 = $("input:radio[name=answer3]:checked").val();
                var optradio4 = $("input:radio[name=answer4]:checked").val();
                var marks = [optradio1, optradio2, optradio3, optradio4]
                var score= calculateScore(marks);
                $(".final").show();
                $("#display").text("Your score is:" + calculateScore());
              });
        //   $("#blanks form").submit(function(event){
        //     console.log(event);
            
        //     // var optradio1 = $("input[type:'radio'][name='answer1']:checked").val();
        //     // var optradio2 = $("input:radio[name=answer2]:checked").val();
        //     // var optradio3 = $("input:radio[name=answer3]:checked").val();
        //     // var optradio4 = $("input:radio[name=answer4]:checked").val();
        //     // var marks = [optradio1,optradio2,optradio3,optradio4]
        //     // var score= calculateScore(marks);
      
            
      
          
        //     $(".final").show();
        //     $("#display").text("Your score is:" + marks);
           

            
        //   })
        });

       function calculateScore(marks){
        //    var otradio1=answers["0"]
        //    var otradio2=answers[1]
        //    var otradio3=answers[2]
        //    var otradio4=answers[3]
           console.log(marks["1"]);
        //    var marks=0;
        //    if(otradio1=="5")
        //    {
        //        marks=marks+5;
        //    }
        //    if(otradio2=="5")
        //    {
        //        marks=marks+5;
        //    }
        //    if(otradio3=="5")
        //    {
        //        marks=marks+5;
        //    }
        //    if(otradio4=="5")
        //    {
        //        marks=marks+5;
        //    }
        //    return marks;
       }