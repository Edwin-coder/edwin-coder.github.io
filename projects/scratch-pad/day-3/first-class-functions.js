// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function(value){
        // will need to determine if the given value is greater than the base 
        if(value > base){
            return true;
        } else if ( value < base){
            return false;
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function(value){
        // will need to determine if the given value is less than the base 
        if(value > base){
            return false;
        } else if ( value < base){
            return true;
        }
    };
        
        
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(string){
        // will need to determine if the first letter in a string begins with given
        // startsWith character 
        // will need to access first character of string 
        if(string[0].toLowerCase() === startsWith.toLowerCase()){
            return true;
        } else {
            return false;
        }
        
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //

 return function(string){
     if(string[string.length-1].toLowerCase() === endsWith.toLowerCase()){
         return true ;
     } else{
         return false;
     }
 };    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
 // will create a container to hold all modified strings 
 var modStrings = [];
 // will need to have access to all strings in array 
 for(var i = 0; i < strings.length; i++){
 // will need to call modify function and put them into modStrings array
 modStrings.push(modify(strings[i]));
 
 }
// return modify strings array
return modStrings;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
   // will need a variable to hold a boolean 
var answer = true;
// will have to access all strings within given array
for(var i = 0; i < strings.length; i++){
    // will need to pass strings into test 
    // if all strings are true return true 
    // if even one is false return false
  if(!test(strings[i])){
      answer = false
  }
}
// return answer 
    return answer;
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}