
  function playmeow(){
       var audio = document.getElementById("audiomeow");
       audio.play();
       var mouth = d3.select("#mouth");
	   mouth.transition().attr("cy",165).duration(1000); 
	   mouth.transition().attr("cy",155).delay(1000).duration(800); 
       }

function playpurr(){
       var audio = document.getElementById("audiopurr");
       audio.play();
       var leftear = d3.select("#leftear");
       var rightear = d3.select("#rightear");
	   leftear.transition().attr("points","105,30 150,70 110,110").duration(100); 
       leftear.transition().attr("points","100,30 150,70 110,110").delay(100).duration(100); 
	   leftear.transition().attr("points","105,30 150,70 110,110").delay(200).duration(100); 
       leftear.transition().attr("points","100,30 150,70 110,110").delay(300).duration(100); 
	   leftear.transition().attr("points","105,30 150,70 110,110").delay(400).duration(100); 
       leftear.transition().attr("points","100,30 150,70 110,110").delay(500).duration(100); 
	   rightear.transition().attr("points","105,30 150,70 110,110").duration(100); 
       rightear.transition().attr("points","100,30 150,70 110,110").delay(100).duration(100); 
	   rightear.transition().attr("points","105,30 150,70 110,110").delay(200).duration(100); 
       rightear.transition().attr("points","100,30 150,70 110,110").delay(300).duration(100); 
	   rightear.transition().attr("points","105,30 150,70 110,110").delay(400).duration(100); 
       rightear.transition().attr("points","100,30 150,70 110,110").delay(500).duration(100); 
}