$(document).ready(function(){
	$("#b1").click(function(){
		var domEle=$("#passport");
		var oldtext=domEle.val();
		domEle.val(oldtext+"1");
	});

	$("#b2").click(function(){
		var domEle=$("#passport");
		var oldtext=domEle.val();
		domEle.val(oldtext+"2");
	});

	$("#b3").click(function(){
		var domEle=$("#passport");
		var oldtext=domEle.val();
		domEle.val(oldtext+"3");
	});

	$("#b4").click(function(){
		var domEle=$("#passport");
		var oldtext=domEle.val();
		domEle.val(oldtext+"4");
	});

	$("#b5").click(function(){
		var domEle=$("#passport");
		var oldtext=domEle.val();
		domEle.val(oldtext+"5");
	});

	$("#b6").click(function(){
		var domEle=$("#passport");
		var oldtext=domEle.val();
		domEle.val(oldtext+"6");
	});

	$("#b7").click(function(){
		var domEle=$("#passport");
		var oldtext=domEle.val();
		domEle.val(oldtext+"7");
	});

	$("#b8").click(function(){
		var domEle=$("#passport");
		var oldtext=domEle.val();
		domEle.val(oldtext+"8");
	});

	$("#b9").click(function(){
		var domEle=$("#passport");
		var oldtext=domEle.val();
		domEle.val(oldtext+"9");
	});

	$("#b0").click(function(){
		var domEle=$("#passport");
		var oldtext=domEle.val();
		domEle.val(oldtext+"0");
	});

	$("#x").click(function(){
		var domEle=$("#passport");
		var old=domEle.val();
		if(old.length>0){
			domEle.val(old.substr(0,old.length-1));
		}
	});

	$("#c").click(function(){
		var domEle=$("#passport");
		domEle.val('');
	});
});