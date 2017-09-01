// create global variable for JSON data
var globalJsonVar;
      
// random starting variables
var randomStart = 0; // initialize the randomStart variable
var tempLimit = 0;
var movieIndex = 0; // indexByName(movieSelect) - an attempt to make this more dynamic
var stringData = new Array(); // create array for lines
// debugger;
// console.log ("stringData = " + stringData);

// user variables
var movieSelect = "Pretty In Pink"; // using this movie for testing
var unitSelect = "paragraphs"; // usuing this for testing - could be paragraphs or lines
var numberSelect = 2; // using 10 for testing
var lineCount = 2; // how many lines in the movie selected

//which movie are we pulling text from
function indexByName() { //translate names to index values - para was 'movieName'
  if (movieSelect == "Pretty In Pink") {
    movieIndex = 0;
  } else if (movieSelect == "Ferris Buelluer's Day Off") {
    movieIndex = 1;
  }
} 
  
// function to load the movie data 
function loadMovieData() {
  console.log("start loading movie data");
  // temp variables for testing
  
  for (var i = 0; i < globalJsonVar.length; i++) {
    console.log("movie data loaded - see array below");
    console.log(globalJsonVar);
  }

  //start movieCount function
  movieCount();
}
  
// write sentences instead of paragrapghs
function writeSentences() {
  
  var lineCounterResult = 0; // count the number of lines read
  console.log("Checking lineCounter value = " + lineCounterResult);

  tempData = ""; // reset tempData var
  
  //clear text in box first
  document.getElementById("loremIpsumBox").innerHTML = (""); // empty the div
  
  //make numberSelect a number
  numberSelect = parseInt(numberSelect, 10);
  console.log("testing parseInt = " + numberSelect);
  
  var rS = randomStart; // temp var to hold the random starting point
  
  for (var x = 0; x < numberSelect; x++) {
    console.log("lineCounterResult = " + lineCounterResult);
    var tempStart = randomStart; //adding a temp var to grab the starting point
    
    for (var z = 0 ; z < globalJsonVar[movieIndex].paragraphs[rS].length; z++) { // begin loop on first selected paragraph
      //add new line after each paragraph
      if (z !== 0) {
          console.log("NEW LINE!!!");
          stringData.push("\n" + " "); //add return after paragraph - NOT WORKING
          console.log(stringData);
      }
      
      console.log("-- -- TESTING Sentence Writer -- --");
      console.log("lineCounterResult = " + lineCounterResult);
      console.log("numberSelect = " + numberSelect);
      console.log("number of lines in current paragraph = " + globalJsonVar[movieIndex].paragraphs[rS].length);
      
      for (s = 0; s < globalJsonVar[movieIndex].paragraphs[rS].length && lineCounterResult < lineCount; s++) {
        console.log("lineCounterResult = " + lineCounterResult);
        var tempData = (globalJsonVar[movieIndex].paragraphs[rS+z][s] + " ");  // grab a line from the randomStart paragraph
        stringData.push(tempData); // add new string to array
        lineCounterResult++;
      }
      
      rS++; //increment rS to keep the loop going

    }

  stringData = stringData.join(" "); // remove the commas from the output
  //-- TEMP REMOVE -- document.write(stringData + " ");
  document.getElementById("loremIpsumBox").innerHTML += ("<br/>" + stringData + "<br/>"); // puts the words in the div
  
  
  //stop this function - NOT STOPPING IT
  if (lineCounterResult > lineCount) {
    return;
  }
    
  } 
}  
  
function getXLinesStartingAtParagraphY(numberOfLines, firstParagraphIndex) {
  var outputLineCounter = 0; 
  var outputLines = "";
  var current_paragraph_index = firstParagraphIndex;
  
  while (outputLineCounter < numberOfLines) {
    var currentParagraph = paragraphs[current_paragraph_index];
    var lineInParagraph = 0;
    while (lineInParagraph < currentParagraph.length) {
      outputLines = outputLines + currentParagraph[current_paragraph_index];
      current_paragraph_index = current_paragraph_index + 1;
      outputLineCounter = outputLineCounter + 1;
    }                
  }
  stringData = stringData.join(" "); // remove the commas from the output    
  document.write(stringData + " ");
  
  return outputLines;
}
  
// function to grab the JSON and create the array  
function grabJSON() {
  $.getJSON("movie-text.json", function(json) {
    globalJsonVar = json; // this creates the json data object inside the globalJsonVar
    loadMovieData(); // trigger function to load the movie data
  });
}

//create a random starting point, based on movie, type and number of units requested
function getRange() {
  
  //get the number from user input field
  numberSelect = document.getElementById("numOption").value;
  console.log("numberSelect = " + numberSelect);
      
  tempLimit = globalJsonVar[movieIndex].paragraphs.length; // I need the length or number of paragraphs in the movie selected

  //Math.random() * (max - min) + min; - random number between two values
  randomStart = Math.floor((Math.random() * (tempLimit - numberSelect))); // generate random number between 0 and max units
  console.log ("tempLimit = " + tempLimit);
  console.log ("randomStart = " + randomStart);
  console.log ("movieIndex = " + movieIndex);
        
  //put the words on the screen
  if (unitSelect == "paragraphs") {
    writeParagraphs(); // start paragraphs function
  } else {
    writeSentences(); // start sentences function
  }
}

// count how mnay lines are in the selected movie
function lineCounter() {
  for (var count = 0; count < tempLimit; count++) {
    lineCount = lineCount + globalJsonVar[movieIndex].paragraphs[count].length;
  }
  console.log("lineCount = " + lineCount); // write number of lines in the selected movie
}

//JS FROM v5 HTML

// write text to page based on user vars
function writeParagraphs() {
  //clear text in box first
  document.getElementById("loremIpsumBox").innerHTML = (""); // empty the div
  
  var rP = randomStart; // temp var to hold the random starting point

  for (var x = 0; x < numberSelect; x++) {
    var tempData = globalJsonVar[movieIndex].paragraphs[rP];
    console.log ("t = " + t); // testing random variable
    tempData = tempData.join(" "); // remove the commas from the output          
    document.getElementById("loremIpsumBox").innerHTML += ("<br/>" + tempData + "<br/>"); // puts the words in the div
    rP++; //increment rP to keep the loop going
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

// create index number for which movie based on name
indexByName();