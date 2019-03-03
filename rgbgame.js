var numberSquares=6;
var colors=generateRandomColors(numberSquares);

var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
easybtn.classList.add("selected");
hardbtn.classList.remove("selected");
numberSquares=3;
colors=generateRandomColors(numberSquares);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
		squares[i].style.backgroundColor=colors[i];
	}else{
		squares[i].style.display="none";
	}
}
})

hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
hardbtn.classList.add("selected");
numberSquares=6;
colors=generateRandomColors(numberSquares);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
}
})

 resetButton.addEventListener("click",function(){
	colors=generateRandomColors(numberSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	message.textContent="";
	resetButton.textContent="New Colors";
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		
	}
	h1.style.backgroundColor="steelblue";
})

colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			message.textContent="Correct!";
			resetButton.textContent="Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor=pickedColor;
		}else{
			this.style.backgroundColor="#232323";
			message.textContent="Try Again";
		}
	})
}

function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}
function pickColor(){
var random=Math.floor(Math.random()*colors.length);
return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);

return "rgb("+ r + ", "+ g +", "+ b +")";
}

