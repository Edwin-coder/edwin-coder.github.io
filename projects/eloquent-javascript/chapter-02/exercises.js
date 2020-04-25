
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function triangles(num) {
// will need to print out any given number of pound signs to screen
// will need to initialize with pound sign 
/// will need to stop looping at given number 
// will need to add pound for each iteration to i 
for(var i = "#"; i.length <= num; i += "#"){
console.log(i)
}
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Based on the given number, all numbers will be print inclusive
// if number is equal to 3 print "fizz"
//if number is equal to 5 print "buzz"
// if equal to both 3 and 5 print "fizzbuzz"
function fizzBuzz(start,end) {

  for(var i = start; i <= end; i++){
    if(i % 3 === 0 && i % 5 === 0 ){
      console.log("fizzbuzz");
    } else if(i % 3 === 0){
      console.log("fizz");
    } else if(i % 5 === 0){
      console.log("buzz");
    } else{
      console.log(i);
    }
  }

}


////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num){
var size = num;
// will need to print in a string 
var board = "";
//this first loop creates every line to be worked on 
for (var i = 0; i < size; i++) {
// the second loop will create whats on the line 
  for (var j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
}



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
