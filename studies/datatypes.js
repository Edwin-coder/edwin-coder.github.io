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
 * directly store simple data types because there is already a set amount of bytes for each simple datatype
 * . A number has eight bytes and a boolean has one byte.
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
 8 // number

 "Edwin" // string is a word inside of quotient marks
 
 true  // booleans are either true or false 
 false
 
 undefined // no value or what pops up if a variable isn't initialized
 
 NaN // stands for not a number
 
 null // no value, put in place by programmer 
 
 Infinity // Is a numeric value representing infinity. Is greater than all numbers 
 
 -Infinity // Is a numeric value representing infinity. Less than all numbers 
 
 // 2. Immutable 
 // Once a string is created it cannot be altered for example.
 var firstName = "Edwin";
 
// firstName[0] = "e"; <====  will not change the original string to a lowercased e

// 3. Copy
// simple datatypes are copied from one variable to the next 
firstName = "Edwin"
var fullName = firstName + "Henriquez"
console.log(fullName)
fullName = "David Henriquez"
console.log(firstName) // re-assining fullName doesn't effect the variable firstName value




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
 
 
 
 // 2. Complex datatypes are mutable  
 
 // the value stored in myInformation is a reference to myObject so they both are tied to the original object
 // Any complex datatype that is referenced and is changed will effect all complex data types that are referenced.
 var myInformation = myObject;
 myInformation.firstName = "David";
 console.log(myObject); // will show that David is now the firstName
 
 
 
 
 