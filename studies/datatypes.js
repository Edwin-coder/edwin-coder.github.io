/**
 * 
 * Datatypes 
 * 
 * 0.Datatypes are how we lable different types of data in Javascript. There are complex
 * datatypes and simple datatypes.
 * 
 * 
 * 
 * 0. A variable can only store up to 8 bytes in memory. With that being said, they can 
 * directly store simple data types because there is already a set amount of bytes for 
 * each simple datatype. A number has eight bytes and a boolean has one byte.
 * 
 * 1. Simple datatypes consist of strings, numbers, booleans, undefined, NaN, and null
 * 
 * 2. Simple dataypes are immutable and do not hold other datatypes. You can perform operations 
 * on simple datatypes to return a new value without changing the original value.
 * 
 * 3. Simple datatypes are copied from on variable to the next.
 *
 * 
 * */
 
 // 1. Simple datatypes 
 
 8 /* This datatype is called numbers. We usually use numbers to perform arithmetic 
 operations like division and addition to get a value. */
 var sum = 8 + 8
 console.log(sum) // <-- will print 16
 
/* String is any text inside of quotient marks or double marks. The qoutes from begining
of string must match qoutes at end of string. Strings cannot be subtracted, divided, multiplied,
or added.They can be concatenated which glues other string together using the plus operator .

*/
// concating strings 
"H" + "E" + "L" + "L" + "O" + "!"

 var name = "Edwin"  
 
var sentence = "This is a sentence with 43 chracters in it."
 console.log(sentence) // <-- will print "This is a sentence with 43 chracters in it."
 
 /* Booleans are either true or false. They are used to tell us if a statement is true 
 or false. To produce a boolean value you would usually compare two values in a conditional 
 statement.Which play a big role in the way our code flows.
 
 */
 // ture boolean 
 true 
 //false boolean 
 false 
 // booleans in action
  var isTrue = 10 > 5
 console.log(isTrue) // will print true 
 
 var isFalse = 10 < 5
 console.log(isFalse) // will print false 
 
 
 
 undefined // undefined is what prints when there is no value assigned to a variable. 
 var whatsInside;
 console.log(whatsInside) /* Will print undefined because there is no value assigned 
 to whatsInside
 */
 
/* null is used to show that there is an absence of a meaningful value. It can be 
interchageable with undefined*/
 var someInfo = {
  firstName : null //<-- how null can be used.
 }
 
 
 NaN /*This is what appears when you try Arithmetic operations on the wrong type of values
 that doesn't show its a number in an obvious way.*/
 
  var product = 5 * "five"
 console.log(product) // will print NaN

 
 Infinity /*Infinity is a property of the global object. Numbers too large they
 overflow the buffer will result in the value Infinity. Is greater than all numbers.
 Any number divided by Infinity will equal zero */ 
 
  5 / Infinity // <--- will equal 0
 
 -Infinity // This is also the same as infinity except all numbers are negative.
 
 
 
 
 
 // 2. Immutable 
 // Once a string is created it cannot be altered for example.
 var firstName = "Edwin";
 
// firstName[0] = "e"; <====  will not change the original string to a lowercased e

// 3. Copy by value
// simple datatypes are copied from one variable to the next 
firstName = "Edwin"
var fullName = firstName + "Henriquez"
console.log(fullName)
fullName = "David Henriquez"
console.log(firstName) // Re-assining fullName doesn't effect the variable firstName value.
                        //Therefore "Edwin" will print.




/**
 * 
 * 0. Complex datatypes 
 * are indefinite in size because they can store as many datatypes as needed. You usually use 
 * complex data types to hold a list or organized information. 
 * 
 * 1. Complex datatypes consist of arrays,objects, and functions.
 * 
 * 2. Since variables can only store up to 
 * 8 bytes, complex datatypes are copied by reference so this means they are mutable.
 * 
 * */
 
 // 1. Complex Datatypes 
 
 //function
 // You use the keyword function followed by a name, then parenthesis, then curly brackets
 // It is optional to have parameters, which act as placeholders in parenthesis
 // The code you want executed goes inside the curly braces.
 function thisIsAFunction(){
     console.log("Hi");
 }
 
 // objects consist of two curly braces 
 var myObject = {}
 
 // Information is stored with key/value pairs followed by a comma except for the last one
 myObject = {
     firstName: "Edwin",
     middleName: "David",
     lastName: "Henriquez",
     age: 23
 }
 
 //array
 //arrays consist of two brackets 
 var myArray = []
 // Information is stored followed by commas except for the last one 
 myArray =[true,23,[],{},function(){}];
 
 
 
 // 2. Complex datatypes are copied by reference 
 
 // The value stored in myInformation is a reference to myObject so they both are tied to the original object.
 //  This means any changes made to myInformation will directly effect the source myObject.
 var myInformation = myObject;
 myInformation.firstName = "David";
 console.log(myObject); // Will show that David is now the firstName in myObject.
 
 
 
 
 