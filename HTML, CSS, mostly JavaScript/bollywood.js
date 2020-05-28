//global variables
var movie_input;
var actor1;
var actor2;
var song;
var movie;
var moviechars;
var moviearr;
var moviearrvowels;
var moviewords;
var movie_words_seperated;
var guessCharValue;
var flag=false;
var wrongGuessLimit = 5;
var wrongflag = false;




//guessMovie will run on submit
function collectData() {
	movie_input = document.getElementById('movie').value;		//it takes the value of movie input
	actor1 = document.getElementById('actor1').value;			//it takes the value of actor 1 input
	actor2 = document.getElementById('actor2').value;			//it takes the value of actor 2 input
	song = document.getElementById('song').value;				//it takes the value of song input
	console.log(movie_input);
	movie_input = movie_input.toUpperCase();						//it makes all the letters of the movie in block letters
	console.log(movie_input);
	movie = movie_input.split(" ");									//it makes array of letters of movie
	console.log(movie);
	moviechars = movie_input.split("");
	console.log(moviechars)
	//moviearr = moviearr.join(' ');
	
	//document.getElementById("movie_test").innerHTML = movie;
	//document.getElementById("movie_testarr").innerHTML = moviearr;
	//document.getElementById("hint1_test").innerHTML = actor1;
	//document.getElementById("hint2_test").innerHTML = actor2;
	//document.getElementById("hint3_test").innerHTML = song;


	
}

function guess() {

	
	
	moviearrvowels = [...moviechars];		//copy of arr to use it later to check characters and display movie
	console.log(moviearrvowels);
	for (let i=0; i<moviechars.length; i++) {			//keeping only vowels in the arr to display at first place
		if (moviechars[i] == "A" || moviechars[i] == "E" || moviechars[i] == "I" || moviechars[i] == "O" || moviechars[i] == "U") {
			continue;
		}
		else if (moviechars[i] == " ") {
			moviechars[i] = "---";
			moviearrvowels[i] = "---"					//adding "---" instread of spacebaar to distinguish between words
		}
		else {
			moviechars[i] = "_";						
		}
			
	}
	console.log(moviechars);
	moviewords = moviechars.join(" ");
	console.log(moviewords);
	movie_words_seperated = moviewords.split(" ");
	console.log(typeof(movie_words_seperated));
	movie_words_seperated = movie_words_seperated.join("");
	console.log(movie_words_seperated);
	document.getElementById("displayMovie").innerHTML = moviewords;
	document.getElementById("hint1_test").innerHTML = actor1;
	document.getElementById("hint2_test").innerHTML = actor2;
	document.getElementById("hint3_test").innerHTML = song;
}

function guesschar() {													//it will run when player submits a  guess character
	wrongflag = false;
	guessCharValue = document.getElementById("guesschar").value;		//taking character from the player
	guessCharValue = guessCharValue.toUpperCase();
	flag = false;
	if (guessCharValue.length > 1){										//checks the character in the movie array
		document.getElementById('errorbox').innerHTML = "<h1>Invalid entry<h1>"	
	}
	else {	
			for (let i = 0; i<moviechars.length+1; i++) {
				
				if (moviearrvowels[i] == guessCharValue) {
					moviechars[i] = guessCharValue;
					flag = true;
					document.getElementById('errorbox').innerHTML = "<h1>Nice guess<h1> <br>" + wrongGuessLimit + "<h3> Lives left</h3>";
					
				}
				
			}
			if (flag == false) {
					wrongGuessLimit -= 1;
					document.getElementById('errorbox').innerHTML = "<h2>Wrong Guess</h2><br>" + wrongGuessLimit + "<h3> Lives left<h3>";
					
				}
		}

		console.log(guessCharValue);
		console.log(moviearrvowels);
		console.log(moviechars);
		moviewords = moviechars.join(" ");
		document.getElementById("displayMovie").innerHTML = moviewords;	

		// if (flag == false) {
		// wrongGuessLimit -= 1;
		if (wrongGuessLimit == -0) {								//keeping a check on lives left to show game over when all lives lostS
		document.getElementById('errorbox').innerHTML = "Game over";
		moviearrvowels = moviearrvowels.join(" ")
		document.getElementById("displayMovie").innerHTML = moviearrvowels;	
		}

	}
// }

//add : display when player won the round
