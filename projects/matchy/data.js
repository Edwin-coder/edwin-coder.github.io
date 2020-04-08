/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create an object called animal
var animal = {};
// use dot notation to give animal a prop named species = to a animal of choice
animal.species = "Dolphin";
// use bracket notation to give animal a prop called name equal to a name
animal["name"] = "Freddie";
// will use dot notation to give a prop named noises equal to an array
animal.noises = [];
// log animal 
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// initialize a var named noises and assign to array literal 
var noises = [];
// use brakcet notation to give noises its first sound 
noises[0] = 'screech';
// will use .push to add sound to end of array
noises.push('yell');
// unshift will add sound to begining of array
noises.unshift('howl');
// will use bracket notation to dynamically assign the arrays last element a sound 
noises[noises.length] = 'talk';


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// assign noises prop to animal equal to noises array
animal.noises = noises;
//use bracket sytax to add another noise to noises array
noises[noises.length] = 'Yeet';
// Brackets Notation , dot notation



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// initialize a variable named animals equal to an empty array
var animals = [];
//put animal object to animals array
animals.push(animal);
// log animals
console.log(animals);
// create a var named duck assigned to an object with the listed data inside
var duck = {
    species: 'duck',
    name: 'jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh'],
};
// push duck to animals array
animals.push(duck);
//log animals 
console.log(animals);
//create two more objects of animals with props of species,name,and noises and add to animals array
var frog = {
    species: 'frog',
    name: 'sally',
    noises: ['ribbit', 'croak', 'snore', 'cricket'],
};
animals.push(frog);
// another animal object to be created and pushed to animals array
var lion = {
    species: 'lion',
    name: 'simba',
    noises: ['roar', 'growl', 'snarl', 'purr'],
};
animals.push(lion);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  will use arrays as a data structure
var friends = [];
//2. Arrays are good for a simple list
// will define a function with Math.random implemented to return a random index 
function getRandom() {
  return Math.floor(Math.random() * Math.floor(animals.length));
  
}

//
// will need to get a random index and add its name to friends list 
friends.push(animals[getRandom()].name);
//log friends
console.log(friends);

// add friends list as a prop named friends on one of the animals in array
animals[0].friends = friends;


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}