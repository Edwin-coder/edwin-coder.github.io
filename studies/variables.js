/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 *
 * 4. The way you name a variable must be camelCased and cannot be named with a
 * keyword. CamelCase is when you have the first word lower cased and the following words 
 * uppercased.
 * 
 * Variables are functioned scoped which means they can only be accessed from inside
 * the function in which it was initialized in.
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1; 
var myVariable = true;
myVariable = "someString";

// 4. Function scoped example
function scoped(){
  var middleName = "David";
}

// console.log(middleName) ==> will give back reference error






/**
 * 
 * Lets:
 * 
 * 0. Acts just like variables by containing data but is not hoisted. Let is 
 * reassignable like variables are. Let is also scoped blocked. Which means you can 
 * only access let inside the code block where 
 * let is declared/assigned.
 * 
 * 
 * 1. Use the key word let to declare/assign. It is conventional that you use 
 * camelCasing when naming let.
 * 
 * 
 * */
 
 // 1. declaration 
 let firstName;
 console.log(firstName); // ===> will print undefined to the console 
 
 // 2. Assignment 
 firstName = "Edwin";
 console.log(firstName); // ===> will print Edwin to the console
 
 // 3. Re-assigning let 
 firstName = "David";
 console.log(firstName) //<== will print David to console.
 
 //4. block scoped 
 if(true){
  let z =0;
 }
 // console.log(z) ==> will not let you access z from outside codeblock.
 
 /**
  * 
  * Constants:
  * 
  * 0. Constants are another way to contain data and is created by using the keyword const.
  * It must be assigned a value immediately and is NOT re-assignable. Just like let, constants is block scoped 
  * and not hoisted to the top of its code block. By convention , you name constants by uppercasing all letters 
  * 
  * */
 
 // 1. Initialization
 const BIRTH_CITY = "New Orleans";
 
 // 2. Cannot Re-assign 
 // BIRTH_CITY = "Thousand Oaks" <=== will print a type error in console 
 
 // 3. Block scoped example 
 if(true){
  const Z = 0;
 }
 // console.log(Z) ==> will not let you access Z from outside its code block.
 
 /**
  * 
  * Hoisting 
  * 
  * 0. Before anything happens in your code, all variables and functions are hoisted 
  * to the top of the code. You will only be able to see that the variable exist but 
  * not what is inside of the variable or function.
  * 
  * 1. If you try to access a variable before the initalization line you'll get 
  * undefiend 
  * 
  * 2. With Lets and Const , if referenced before the initialization line, it is 
  * considered to be a temproal deadzone because it will give a reference error.
  * 
  * 
  * */
  
  // 1. Referencing a variable before the initialization line
  console.log(name) // ===> will print undefined 
 var name = "edwin";
 
 /**
  * 2. You are in a temperoal deadzone if you reference let or const before the
  *  initialization line. 
  * 
  * console.log(BIRTH_STATE) ===> WILL GIVE YOU A REFERENCE ERROR !
  * const BIRTH_STATE = "Louisiana"
  * 
  * console.log(lastName) ===> WILL GIVE YOU A REFERENCE ERROR!
  * let lastName = "Henriquez"
  * 
  * */
  
  
 
  
 




