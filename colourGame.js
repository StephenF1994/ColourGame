

var numSquares = 6;
var colours = [];
var picked;	
var squares = document.querySelectorAll(".square");				//Selects all the elements with class square in the document, puts them in var squares
var picked;														//Randomly selects a colur from the array opf colours
var ColourDisplay = document.getElementById('ColourDisplay');	//Selects the RGB in HTML header so we can change the colour later
ColourDisplay.textContent = picked;								//Sets the RGB in header to colour of the randomly selectd colour
var head = document.querySelector('h1');						//Selects the header in HTML
var resetButton = document.querySelector('#reset');
var modeButton = document.querySelectorAll('.mode');


pageLoad();														//Will run this function when the page loads

function pageLoad(){
	selectMode();
	makeSquares();
	reset();
}
	

function selectMode(){											//cycles through easy and hard buttons
	for(var i = 0; i< modeButton.length; i++){
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");			//removes blue highlight from both
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");						//then adds to one being clicked on

			if (this.textContent === "Easy"){					//If the easy button is clicked
				numSquares = 3;									//number of squares in the aray is 3
			}
			else{
				numSquares = 6;									//otherwise there is 6
			}
		reset()
		})
	}
}

function makeSquares(){
	for(var i = 0; i<squares.length; i++){							//Cycles through array of squares and assigns each square the colour [0-5]from array of colours.
		//Set colours for Squares
		
		//Listen for Clicks on a square
		squares[i].addEventListener("click", function(){
			//get colour of clicked square
			var clickedColour = this.style.background;
			//compare the clicked colour to previously set answer.
			if(clickedColour === picked){							//if the right answer is picked
				message.textContent="Correct";						//message set to correct
				changeColours();									//Change all the squares to that colour
				head.style.background = clickedColour;				//Chnage the header background color to right answer colour	
				resetButton.textContent = "Play Again?"			
			}
			else{													//If user selects wrong color
				this.style.background = "#232323";					//Square color changes to same as background color so it dissapears from view
				message.textContent = "Try again";
			}

		})
	}}

function reset(){
	head.style.background = "steelblue";			
	resetButton.textContent = "New Colours";
	message.textContent = " ";
	
	colours = generateRandomColours(numSquares);					//Make a set of new squares with colours
	picked = pickColor();											
	ColourDisplay.textContent = picked;								//Sets new rgb colour

	for (var i = 0; i< squares.length; i++){
		if(colours[i]){												//goes through array, and if it ends at 3, makes 4,5 and 6 same backgroiund as body
		squares[i].style.display = "block"
		squares[i].style.background = colours[i];
		}else{
			squares[i].style.display = "none";
		}

		
		
	}
	head.style.background = "steelblue";

}
resetButton.addEventListener("click", function(){
	reset();
})




function changeColours(){
	for(var i = 0; i<squares.length; i++){
		squares[i].style.background = picked;				//When right answer selected, change all to that colour
	}
}

function pickColor(){
	var random =  Math.floor(Math.random()*colours.length);		//Randomly picks a colour from the array of RGB colours
	return colours[random];
}

function generateRandomColours(length){							//Generate a new array of random colours
	var colourArray = [];
	for(var i = 0; i<length; i++){
		colourArray.push(randomColour());						//Push the returned string from randomColour() onto colourArray
	}
	return colourArray;
}

function randomColour(){									//Generates a random rgb colour
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + "," + " " + g + "," + " " + b + ")";
}