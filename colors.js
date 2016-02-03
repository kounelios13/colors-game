var colors = generateRandomColors(6);

var pickedColor = pickColor();
//Getting the list of divs 
var squares = document.getElementsByClassName("square");
//Getting the span inside h1 and changing the title based on picked color
var rgbDisplay = document.getElementById("rgbDisplay");
//User Message
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

//Adding colors to divs and click listeners
for (i = 0; i < squares.length; i++ ) {
	//Add colors to divs
	squares[i].style.background = colors[i];
	//Adding an click event listener to divs
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			changeColors(pickedColor);
			h1.style.background = clickedColor

		}else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try again!"
		}
	});
}

//Displaying the color which player needs to find
rgbDisplay.textContent = pickedColor;
//Displaying status message to player

//Change the background color of all divs to the selected color
function changeColors(color) {
	for (i = 0; i < squares.length; i++ ) {
		squares[i].style.background = color;
	}
}

function generateRandomColors(num){
	var arr = [];

	for (i = 0; i < num; i++ ) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function pickColor(){
	 var randomColor = Math.floor(Math.random() * colors.length);
	 return colors[randomColor];
}