/**
 * String Manipulation 
 * 
 * 0. In somepoint of our code we will need to manipulate strings. We can do 
 * this with  methods, operators, and properties. These methods will not effect the original 
 * string because strings are immutable. With that being said you will need to assign 
 * the manipulated string to a new variable. 
 * 
 * 1. At some point maybe we would need to check the length of a string. We can do 
 * this using the .length property
 * 
 * 2. Maybe we want to locate a certain word in a string. We can do this using 
 * indexof()
 * 
 * 3. If you want to take out specific part in a string you can use the slice method.
 * Note: The slice method does not effect the original string.
 * 
 * 4. You can replace a word in a string by using the replace() method.
 * 
 * 5. Suppose you want to uppercase all letters in a string. You can use toUpperCase()
 * 
 * 6. To lower case all letters you can use .toLowerCase();
 * 
 * 7.,8. If you want to add strings or variables you use the string operators !
 * 
 * 
 **/

 
 //1. .length will return number of characters in a string 
 var myName = "Edwin";
 console.log(myName.length); // prints 5
 
 
 
 
 /** 2. The indexOf() method returns the index of the positions first 
 occurrence of a specified text in a string:
 **/
 
 var str = "Please locate the name 'Edwin' !";
var pos = str.indexOf("Edwin");
console.log(pos) // will print 24

/**  3. The slice() method removes a part of a string and returns the removed part in a new string.
The method takes 2 parameters: the start position, and the end position (end not included **/

var nfcSouth = "Tampa, Panthers, Saints";
var favTeam = nfcSouth.slice(17);

console.log(favTeam) // will print Saints

/** 4. The replace() method replaces a specified value with another value in a string:
 * Note the replace method only replaces the first match and is case sensitive!
 To replace all matches, use a regular expression with a /g flag (global match):
 To replace case insensitive, use a regular expression with an /i flag (insensitive):**/

var toughTeam = "The Falcons are tough to play against!";
var revised = toughTeam.replace("Falcons", "Saints");
console.log(revised) // will print The Saints are tough to play against!


// 5. A string is converted to upper case with toUpperCase()
var greeting = "Welcome!";       
var upperCased = greeting.toUpperCase();  
console.log(upperCased) // Prints Welcome!

//6. Lower case all letters by using toLowerCase()

var text1 = "Hello!";       
var text2 = text1.toLowerCase();
console.log(text2) // prints hello!



 
 // 7. Concat operator (+) combines how ever many strings you want together 
 // + operator 
var firstName = "Edwin" 
var lastName = "Henriquez"
var fullName = firstName + " " + lastName
console.log(fullName)

// 8. += combines two strings 
var name = "Edwin"
var last = "Henriquez"
name += last
console.log(name)