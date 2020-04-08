/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * 
 * Input: takes two params, an array , and a string
 * Output: will look through the array for a match with given string and returns object of that name 
 *  or return null if doesnt exist
 * Constraints: N/a
 * Edge case: letters will have to be case insensitive ,
 * */
function search(array, str) {
// 
    for (var i = 0; i < array.length; i++) {
        if(array[i].name.toLowerCase() === str.toLowerCase()){
            return array[i];
        }
    }
    return null;
} 



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * 
 * Input: takes three params, an array of animals, string name of animal to perform search on
 * and a object to replcae the animal
 * Output: N/A
 *  
 * Constraints: N/a
 * Edge case: letters will have to be case insensitive 
 * 
 * */

//if name is found in array replcae with replacement object
function replace(animals, name, replacement) {
// 
// will need to itterate over array 
    for (var i = 0; i < animals.length; i++) {
        if(animals[i].name.toLowerCase() === name.toLowerCase()){
            animals[i] = replacement;
        }
    }
} 


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * 
 * Input: takes two params, an array of animals and name of animal to search for 
 * Output: N/A
 * Constraints: N/a
 * Edge case: letters will have to be case insensitive, will use .splice method 
 * 
 * */


function remove(animals, name) {
// 
// will need to itterate over array 

    for (var i = 0; i < animals.length; i++) {
 // will need access objects name prop to compare it with given name       
        if(animals[i].name.toLowerCase() === name.toLowerCase()){
            animals.splice(i)
        }
    }
} 



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {

//will need to compare length of name and species greater than 0
    if (animal.name.length > 0 && animal.species.length > 0) {
        animals.push(animal);
        animals.push(animal)
        // will need to itterate over array
        // have to access prop name of all animal objects to look for a match
        // if theres a match pop of animal in array 
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name.toLowerCase() === animal.name.toLowerCase()) {
            animals.pop(animal);

            }
        } 
    }
} 
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
