
  function play(){
       var audio = document.getElementById("audio");
       audio.play();
       var mouth = d3.select("#mouth");
       console.log(mouth);
	   mouth.transition().attr("cy",165).duration(1000); 
	   mouth.transition().attr("cy",155).delay(1000).duration(800); 
       }