// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
// will need to print every value in array
for(var i = 0; i < array.length; i++){
  console.log(array[i]);
}
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
// must print all values backwards in array 
// will start the loop at end of array 
// will end the loop at index 0 
// will need to decrement by 1 
for(var i = array.length-1; i >= 0; i--){
  console.log(array[i]);
}
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // will use a method Object.keys() to return all keys in an array 
  return Object.keys(object);
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // will need to itterate through all keys in the given object and print to console
  for(var key in object){
    console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // will create an array literal to contain object values 
  var arrValues = [];
 // will need to itterate through given object values and push them into an array 
 for(var key in object){
   arrValues.push(object[key]);
 }
 // must return array of object values 
 return arrValues 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
 // must itterate through object values and print them to console 
 for(var key in object){
   console.log(object[key]);
 }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // will need to access all key/value pairs in object 
  
  // must return how many pairs are in object 
  return Object.keys(object).length;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // will create an array literal to contain values from object 
  var valueArray = [];
  
 // will need to get access to object values 
 // will push values into valueArray
for(var key in object){
  valueArray.push(object[key]);
}
// will need to print all values in array in reverse to console 
for(var i = valueArray.length - 1; i >= 0; i-- ){
  console.log(valueArray[i]);
}
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
