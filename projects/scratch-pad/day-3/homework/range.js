 // #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    // will need to create an array literal to contain range if numbers 
    var rangeArr = [];
    
      // will need to determine if the start is bigger or less than the end   
    if(start < end){
    // will need to print all numbers inclusive given start to end 
    for(var i = start; i <= end; i++){
      rangeArr.push(i);  
    }
 // if the start is bigger print in reverse order, will decrement by one     
}else if(start > end){
    for(var j = start; j >= end; j--){
        rangeArr.push(j);
    }
}
   
 // return array of integers 
 return rangeArr;
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}