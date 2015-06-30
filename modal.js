$(document).ready(function(){
	$("#sure").click(function(){
		overlay();
	});
	$("#returnButton").click(function(){
		overlay();
	});
	$("#closeButton").click(function(){
		overlay();
	});
});

var timeLeft=15;
var timer=-1;

function overlay(){
   var e1 = document.getElementById('modal-overlay');			
   e1.style.visibility = (e1.style.visibility == "visible")? "hidden" : "visible";

   if(e1.style.visibility == "visible"){
   		timeLeft=15;
   		timer=setTimeout("outOfTime()", 1000);
   }
   else{
   		clearTimeout(timer);
   		timeLeft=15;
   		$("label").text(timeLeft);
   }
}

function outOfTime(){
	if(timeLeft>1){
		$("label").text(--timeLeft);
		timer=setTimeout("outOfTime()", 1000);
	}
	else{
		clearTimeout(timer);
		timeLeft=15;
		document.getElementById("modal-overlay").style.visibility="hidden";
		$("label").text(timeLeft);
	}
}