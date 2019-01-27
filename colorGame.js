var numSquares = 6;
var colors = [];
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
		// loop hard/easy mode 
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			// Outra forma
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			/* 
			if(this.textContent === "Easy"){
				numSquares = 3;
			} else {
				numSquares = 6;
			}
			*/
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length ; i++){
		// add click listeners to squares
		squares[i].addEventListener("click", function(){
			// grab color of picked square
			var clickedColor = this.style.backgroundColor;
			// compare clicked color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again!";
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	// pick new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// change colors of squares on the page
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	for(var i = 0; i < squares.length ; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){

	for (var i = 0; i < squares.length ; i++){
		squares[i].style.backgroundColor = color;
	}
}

// Funcao para randomizar a cor a ser encontrada, o objetivo do jogo!
// Math.floor arredonda para inteiros
// Math.random randomiza um numero em 0.XXXXXX se tu multiplica por um numero, por exemplo 6, randomiza de 0 ~ 5.99999999
function pickColor(){
	var random = Math.floor( Math.random() * colors.length );
	return colors[random];
}


function generateRandomColors(howManyColors){
	
	// make an array
	var arr = [];
	
	// repeat howManyColors times
	for (var i = 0; i < howManyColors; i++){
		// get random color and push into arr
		arr.push(randomColor());
	}

	// return that array
	return arr;
}

function randomColor(){
	// pick red from 0-255
	var r = Math.floor(Math.random() * 255 + 1);
	// pick green from 0-255
	var g = Math.floor(Math.random() * 255 + 1);
	// pick blue from 0-255
	var b = Math.floor(Math.random() * 255 + 1);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}


