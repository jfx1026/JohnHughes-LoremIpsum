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
var lineCount = 50; // how many lines in the movie selected

//which movie are we pulling text from
function indexByName() { //translate names to index values - para was 'movieName'
  if (movieSelect == "Pretty In Pink") {
    movieIndex = 0;
  } else if (movieSelect == "Ferris Buelluer's Day Off") {
    movieIndex = 1;
  }
} 
  
// function to test the live data 
function liveDataTest() {
  console.log("start liveDataTest");
  // temp variables for testing
  var prefix = "Movie ";
  var suffix = "!!! <br/>";
  
  for (var i = 0; i < globalJsonVar.length; i++) {
    //document.write(prefix + i + ": " + globalJsonVar[i].movie + suffix);
    console.log("LOADED JSON - SEE BELOW");
    console.log(globalJsonVar);
  }
  
  //OK - Let's put some sentences on the screen
  writeSentences();
}
  
// write sentences instead of paragrapghs
function writeSentences() {
  //lineCounter(); // start line counter for sentences - this should be smarter - NOT CURRENTLY WORKING

  var lineCounterResult = 0; // count the number of lines read
  tempData = ""; // reset tempData var
  
  console.log("Checking lineCounter value = " + lineCounterResult);
  for (var x = randomStart; x < (numberSelect + lineCount); x++) {
    console.log("lineCounterResult = " + lineCounterResult);
    var tempStart = randomStart; //adding a temp var to grab the starting point
    
    for (var z = 0 ; z < globalJsonVar[movieIndex].paragraphs[z].length; z++) { // begin loop on first selected paragraph
      //add new line after each paragraph
      if (z !== 0) {
          console.log("NEW LINE!!!");
          stringData.push("\n" + " "); //add return after paragraph - NOT WORKING
          console.log(stringData);
      }
      
      console.log("-- -- TESTING Sentence Writer -- --");
      console.log("lineCounterResult = " + lineCounterResult);
      console.log("numberSelect = " + numberSelect);
      console.log("number of lines in current paragraph = " + globalJsonVar[movieIndex].paragraphs[z].length);
      
      for (s = 0; s < globalJsonVar[movieIndex].paragraphs[z].length && lineCounterResult < lineCount; s++) {
        console.log("lineCounterResult = " + lineCounterResult);
        var tempData = (globalJsonVar[movieIndex].paragraphs[randomStart+z][s] + " ");  // grab a line from the randomStart paragraph
        stringData.push(tempData); // add new string to array
        lineCounterResult++;
      }
    }

  stringData = stringData.join(" "); // remove the commas from the output    
  //-- TEMP REMOVE -- document.write(stringData + " ");
  
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
    liveDataTest(); // trigger something to write the data
    // getRange(); //get a random number to start at within a range
  });
}

//create a random starting point, based on movie, type and number of units requested
function getRange() {        
  tempLimit = globalJsonVar[movieIndex].paragraphs.length; // I need the length or number of paragraphs in the movie selected

  //Math.random() * (max - min) + min; - random number between two values
  randomStart = Math.floor((Math.random() * (tempLimit - numberSelect))); // generate random number between 0 and max units
  console.log ("tempLimit = " + tempLimit);
  console.log ("randomStart = " + randomStart);
  console.log ("movieIndex = " + movieIndex);
        
  //put the words on the screen
  writeParagraphs(); // put paragraphs onto page
}

// count how mnay lines are in the selected movie
function lineCounter() {
  for (var count = 0; count < tempLimit; count++) {
    lineCount = lineCount + globalJsonVar[movieIndex].paragraphs[count].length;
  }
  console.log("lineCount = " + lineCount); // write number of lines in the selected movie
}

//JS FROM v5 HTML

function writeParagraphs() { // an attempt to write data based on user vars
  for (var x = randomStart; x < (numberSelect + randomStart); x++) {
    var tempData = globalJsonVar[movieIndex].paragraphs[x];
    console.log ("x = " + x); // testing random variable
    tempData = tempData.join(" "); // remove the commas from the output          
    document.getElementById("loremIpsumBox").innerHTML += ("<br/>" + tempData + "<br/>"); // puts the words in the div
  }
}

//START THE PROCESS

// get the data
grabJSON();

// create index number for which movie based on name
indexByName();