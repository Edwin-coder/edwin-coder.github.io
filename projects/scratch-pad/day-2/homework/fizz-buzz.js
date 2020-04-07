// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
// will need to print out all numbers 1 to 100 
for(var i = 1; i <= 100 ; i++){
// if multiple of both three and five print FizzBuzz    
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
// will have to check if number is multiple of five then print Buzz         
    } else if(i % 5 === 0){
        console.log("Buzz");
// will have to determine if number is a multiple of three then print Fizz 
     } else if( i % 3 === 0 ){
        console.log("Fizz");
        // Print all values that are not multiples of 3 or 5 or both 
    } else{
        console.log(i);
    }
}

 


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}