var colours = [
"rgb(255, 0, 0)",						
"rgb(255, 255, 0)",						
"rgb(255, 0, 255)",		
"rgb(0, 255, 0)",		
"rgb(0, 255, 255)",		
"rgb(0, 0, 255)",		
] 


var squares = document.querySelectorAll(".square");				//Selects all the elements with class square in the document, puts them in var squares
var picked = pickColor();
var ColourDisplay = document.getElementById('ColourDisplay');
ColourDisplay.textContent = picked;


for(var i = 0; i<squares.length; i++){							//Cycles through array of squares and assigns each square the colour [0-5]from array of colours.
	//Set colours for Squares
	squares[i].style.background = colours[i];
	//Listen for Clicks on a square
	squares[i].addEventListener("click", function(){
		//get colour of clicked square
		var clickedColour = this.style.background;
		//compare the clicked colour to previously set answer.
		if(clickedColour === picked){							//if the right answer is picked
			message.textContent="Correct";						//message set to correct
			changeColours();									//change all the colours*/
		}
		else{
			this.style.background = "#232323";
			message.textContent = "Try again";
		}

			})
		

	
}

function changeColours(){
	for(var i = 0; i<squares.length; i++){
		squares[i].style.background = picked;				//When right answer selected, change all to that colour
	}
}

function pickColor(){
	var random =  Math.floor(Math.random()*colours.length);
	return colours[random];
}

