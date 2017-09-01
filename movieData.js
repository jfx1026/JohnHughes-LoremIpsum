function movieCount() {
  console.log(" - - - movieCount function - - - ");
  
  pCount = globalJsonVar[movieIndex].paragraphs.length; // I need the number of paragraphs in the movie selected
  console.log("pCount: total number of paragraphs in selected movie = " + pCount);
  
  var lCount = 0; // Number of total lines in the movie selected
  
  for (xC = 0; xC < globalJsonVar[movieIndex].paragraphs.length; xC++) {
    var tC = globalJsonVar[movieIndex].paragraphs[xC].length;
    lCount = tC + lCount;
  }
  
  console.log("lCount: total number of paragraphs in selected movie = " + lCount);

}