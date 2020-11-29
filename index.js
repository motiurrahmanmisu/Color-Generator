var div=document.querySelector("#div");
var btn=document.querySelector("#btn");

btn.addEventListener("click",function(){
	
	var num =  ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
'silver', 'teal', 'yellow','pink','#191970'];
var random =Math.floor(Math.random() * num.length);
var numRandom =num[random];
div.style.background=numRandom;
	
});


