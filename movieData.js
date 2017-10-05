// CHECK OUT THE SELECTED MOVIE ATTRIBUTES

function movieCount() {
  console.log(" - - - movieCount function - - - ");
  
  pCount = globalJsonVar[movieIndex].paragraphs.length; // I need the number of paragraphs in the movie selected
  console.log("pCount: total number of paragraphs in selected movie = " + pCount);
    
  for (xC = 0; xC < globalJsonVar[movieIndex].paragraphs.length; xC++) {
    var tC = globalJsonVar[movieIndex].paragraphs[xC].length;
    lCount = tC + lCount;
  }
  
  console.log("lCount: total number of paragraphs in selected movie = " + lCount);
}

function changeMovie() {  
  console.log("changeMovie tiggered!!!")
  
  //grab text from dropdown
  var tempM = $("#movieDropdown option:selected").text();
  console.log("tempM = " + tempM);
  
  movieSelect = tempM;

  if (movieSelect == "Pretty In Pink") {
    movieIndex = 0;
    swapStyleSheet("jhStyle2.css");
  } else if (movieSelect == "Ferris Bueller's Day Off") {
    movieIndex = 1;
    swapStyleSheet("ferris.css");
  } else if (movieSelect == "The Breakfast Club") {
    movieIndex = 2;
    swapStyleSheet("breakfast.css");
  }
  console.log("Selected Movie = " + movieSelect);
  console.log("movieIndex = " + movieIndex);
  
   
  //clear text in box first
  document.getElementById("loremIpsumBox").innerHTML = (""); // empty the div

}

// CSS Style Sheet swap function
function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

// GENERATOR FUNCTIONS

// write sentences to the page
function writeSentences() {
  
  var tempCounter = 0; // count the number of lines read
  console.log("start counting... " + tempCounter);

  tempData = ""; // reset tempData var
  
  //clear text in box first
  document.getElementById("loremIpsumBox").innerHTML = (""); // empty the div
  
  var rS = randomStart; // temp var to hold the random starting point
  
  // find lines here
  
  var stringData = []; //create stringData array
  
  //start by finding the right paragraph
  for (var findPara = 0; tempCounter < rS; findPara++) {
    var numTemp = globalJsonVar[movieIndex].paragraphs[findPara].length;
    tempCounter = tempCounter + numTemp;
    console.log("still counting... " + tempCounter);
  }
  //which paragraph are we on - or where should we start?
  console.log("start on paragraph number " + findPara);

  var countLines = 0; //temp var to count the lines grabbed
  
  for (var grab = 0; countLines < numberSelect; grab++) {
    //add new line after each paragraph
    if (grab !== 0) {
      console.log("NEW LINE!!!");
      stringData.push("\n" + " "); //add return after paragraph - NOT WORKING
      console.log(stringData);
    }
    
    for (s = 0; countLines < numberSelect; s++) {
      tempData = (globalJsonVar[movieIndex].paragraphs[findPara+grab][s] + " ");  // grab a line from the randomStart paragraph
      stringData.push(tempData); // add new string to array
      countLines++;
      
      //check next line for 'undefined'
      //console.log("Check next line...");
      //console.log(globalJsonVar[movieIndex].paragraphs[findPara+grab][s+1]);
      if (typeof (globalJsonVar[movieIndex].paragraphs[findPara+grab][s+1]) == 'undefined') {
        console.log("Next line is blank!!!");
        break;
      }
      
    }
  }

  stringData = stringData.join(" "); // remove the commas from the output
  document.getElementById("loremIpsumBox").innerHTML += ("<p>" + stringData + "</p>"); // puts the words in the div
  
}

// write text to page based on user vars
function writeParagraphs() {
  //clear text in box first
  document.getElementById("loremIpsumBox").innerHTML = (""); // empty the div
  
  var rP = randomStart; // temp var to hold the random starting point

  for (var x = 0; x < numberSelect; x++) {
    var tempData = globalJsonVar[movieIndex].paragraphs[rP];
    console.log ("rP = " + rP); // testing random variable
    tempData = tempData.join(" "); // remove the commas from the output          
    document.getElementById("loremIpsumBox").innerHTML += ("<p>" + tempData + "</p>"); // puts the words in the div
    rP++; //increment rP to keep the loop going
  }
}