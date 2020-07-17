// alert("connected");
// alert("connected");
// var mode=6;
var display = document.querySelector("#display");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var h1 = document.querySelector("h1");
var tiles = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var playagain = document.querySelector("#playagain");
var sound = document.getElementById("audio");
var sound2 = document.getElementById("audio2");
var sound3 = document.getElementById("audio3");
hard.classList.add("selected");
mode=6;

easy.addEventListener("click",function(){
		mode=3;
		again();
		for (var i = 3; i < tiles.length; i++) {
			tiles[i].style.background="none";
			}
			easy.classList.add("selected");
			hard.classList.remove("selected");
			// again;
		
});

hard.addEventListener("click",function(){
	mode=6;
		for (var i = 0; i < tiles.length; i++) {
			tiles[i].style.background="block";
			}	
		again();
			hard.classList.add("selected");
			easy.classList.remove("selected");		
});

var colors = [];
for (var i = 0; i < mode; i++) {
	colors.push(color(i));
}
function color(num){
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);
	return "RGB(" + r + ", " + g + ", " + b + ")";
}
var pickedcolor = colors[Math.floor(Math.random()*mode)];



// alert(mode);
playagain.addEventListener("click",again);


for (var i = 0; i < mode; i++)
 {
	tiles[i].style.background = colors[i];
}


display.textContent = "Color " + pickedcolor;


for (var i = 0; i < mode; i++) 
{
		tiles[i].addEventListener("click",game);
}
function again()
{	
	h1.style.background="white";
	h1.classList.remove("shadow");
    sound.play();
	message.textContent="";
	playagain.textContent="NEW COLORS";
	console.log("playagggain clicked");
		 colors = [];
	// console.log("clickk");
	for(var i =0; i<mode; i++)
	{
		// console.log("clickk this time");
		colors.push(color(i));


	}
	for (var i = 0; i < mode; i++)
 	{
	tiles[i].style.background = colors[i];
	}
	pickedcolor = colors[Math.floor(Math.random()*mode)];
	display.textContent = "Color " + pickedcolor;

}

function game(){
	
	var current= this.style.background;
	if(pickedcolor.slice(3,18)== current.slice(3,18)){
		console.log("Correct");
		sound3.play();
		message.textContent= "CORRECT"
		playagain.textContent="PLAY AGAIN";
		h1.style.background=current;
		h1.classList.add("shadow");
		for (var i = 0; i < mode; i++) {
			tiles[i].style.background= current;
			}
		}
		else{
			sound2.play();
			this.style.background= "none";
			message.textContent="TRY AGAIN!!!";
			console.log("incorrect");
			}
}
