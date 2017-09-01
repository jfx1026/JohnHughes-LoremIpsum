// VARIABLES

// create global variable for JSON data
var globalJsonVar;
      
// initialize variables
var randomStart = 0; // initialize the randomStart variable
var tempLimit = 0;
var movieIndex = 0; // indexByName(movieSelect) - an attempt to make this more dynamic
var stringData = new Array(); // create array for lines

// user variables
var movieSelect = "Pretty In Pink"; // using this movie for testing
var unitSelect = "paragraphs"; // usuing this for testing - could be paragraphs or lines
var numberSelect = 2; // using 10 for testing
var pCount = 0 // how many paragraphs in the movie selected
var lCount = 0; // how many lines in the movie selected

// FUNCTIONS

// function to grab the JSON and create the array  
function grabJSON() {
  $.getJSON("movie-text.json", function(json) {
    globalJsonVar = json; // this creates the json data object inside the globalJsonVar
    loadMovieData(); // trigger function to load the movie data
  });
}

// function to load the movie data into an array 
function loadMovieData() {
  console.log("start loading movie data");
  console.log("movie data loaded - see array below");
  console.log(globalJsonVar);

  //start movieCount function
  movieCount();
}

//create a random starting point, based on movie, type and number of units requested then start the function to write the text to the 
function getRange() {
  
  //start changeMovie function to grab movieSelect index
  changeMovie();
  
  //get the number from user input field
  numberSelect = document.getElementById("numOption").value;
  console.log("numberSelect = " + numberSelect);

  //make numberSelect a number - not a string
  numberSelect = parseInt(numberSelect, 10);
  console.log("numberSelect after parseInt = " + numberSelect);
  
  //get a random starting point
  randomizer();
        
  //put the words on the screen
  if (unitSelect == "paragraphs") {
    writeParagraphs(); // start paragraphs function
  } else {
    writeSentences(); // start sentences function
  }
}

function randomizer() {
  // for paragraphs
  if (unitSelect == "paragraphs") {

    randomStart = Math.floor((Math.random() * (pCount - numberSelect))); // generate random number between 0 and max units
    console.log ("paragraph randomStart = " + randomStart);
  
  // for sentences
  } else {
    console.log("lCount = " + lCount);
    randomStart = Math.floor((Math.random() * (lCount - numberSelect)));
    console.log ("sentence randomStart = " + randomStart);
  }

}

//set the type of output, sentences or paragraphs
function setUnits(u) {
  unitSelect = u;
  console.log("Paragraphs or Sentences? --> " + unitSelect);
}

//START THE PROCESS

// get the data
grabJSON();