/**
 * 
 * Operators 
 * 0. Operators are essential if we want a certain outcome or value in our code. 
 * Without operators we wouldn't be able to find the value of two plus two
 * or control the flow our code. To be more specific, we group operators into different classes
 * based on how many operands they require such as: unary operators , binary operators,
 * and ternary operators.
 * 
 *  The list of operators are:
 * 
 * 1. Assignment operators (binary)
 * 2. Comparison operators (binary)
 * 3. Logical operators (binary)
 * 4. String operators (binary)
 * 5. Arithmetic operators (unary and binary)
 * 6. Unary operators 
 * 7. Conditional operators (ternary)
 * 
 * 
 * */
 
 
 // 1. Assignment operators are used to assign a value to a variable  
 
// 1.1 The equal sign (=) assignes the left operand to its right operand
 var firstName = "edwin";
 console.log(firstName); // firstName now has the value of edwin.
 
 // 1.2 += Addition assignment 
 var a = 1
 a += 2 // 3
 
 //1.3 -= Subtraction assignment
 var b = 2
 b -= 1 // 1
 
 // 1.4 /= Division assignment 
 var c = 8
 c /= 4// 2
 
 // 1.5 *=  Multiplication assignment
 var d= 5
 d *= 5 // 25
 
 // 2. Comparison operators compare two value to return a boolean.
 
 
 // Greater than sign >
 50 > 40  // true 

 // less than sign <   
 50 < 60  // true 
   
 // Greater than or equal to sign >=
 50 >= 45 // true 
   
 // Less than or equal to sign <=
 50 <= 65 //true
     
 // Strictly equal to sign ===
 50 === "50" // false 
   
 // not stricly equal to sign ==
 "50" == 50 // true
     
  // Strictly not equal to sign !==
 50 !== 50 // false
   
  // Not Strictly not equal to sign
 50 != 65 // true
 
 /* How are the strict and loose comparison operators different (== vs ===) ? 
 In Javascript , when you try to perform operations on two values that are different,
 it will convert a value to get an answer . This is called type coercion.
 For Example 
 */
  console.log("10" == 10)// will print true
     
/* Above a loose operator is used. Although "10" is a string, Javascript knows 
     we meant the number ten so it converted that string into a number to show that 
     "10" is in fact equal to 10.     
     
 If we wanted to be more precise in our comparison then we would use the strict 
 equal operator. 
 For example 
     */
  console.log("10" === 10)// will print false because these two values are differemt datatypes.
 
 
 // 3. Logical operators will evaluate both sets of operands to return a boolean 
 
 // Two ampersand signs together. Both have to be right 
 if(2 < 3 && 3 > 2){
     console.log("Both must be true") // true, will print 
     // two || together . Either one must be right to print 
 } else if( 5 > 6 || 6 > 1){
     console.log("One must be right") //true, would print 
     // bang operator Like saying its not true 
 } else if(!true){
     console.log("true") // false, no print 
 }
 
 
 
 //4 string operators combines strings or variables together
 
 // Concat operator (+) combines how ever many strings you want together 
 // + operator 
var firstName = "Edwin" 
var lastName = "Henriquez"
var fullName = firstName + " " + lastName
console.log(fullName)

//+= combines two strings 
var name = "Edwin"
var last = "Henriquez"
name += last
console.log(name)



/** 5. Arithmetic Operators take numerical values (either literals or variables) 
 * as their operands and return a single numerical value.**/
 
 // 5.1 + addition
 console.log(2+2) // will print 4
 
 // 5.2 - subtraction
 console.log(10-5) // prints 5
 
 // 5.3  * multiply 
 console.log(5*5)// prints 25 
 
 // 5.4 (/) divide 
 console.log(10 / 5) // prints 2 
 
 /** 5.5 %  The remainder operator returns the remainder left over when one operand is 
  * divided by a second operand **/
  console.log(25 % 5) // prints 0
  
  // 5.6 Increment Operator (++) adds by one
 for(var i = 0; i <= 10; i++){
     console.log(i) // will print numbers 0-10 inclusive
 }
  
 // 5.7 decrement by one (--) subtracts by one 
 for(var i = 10; i >= 1; i--){
     console.log(i) // will print numbers 10-1 inclusive
 }
 
 // 6. A unary operation is an operation with only one operand.
 
 // 6.1 The delete operator deletes an object, an object's property, or an element at 
 //a specified index in an array.
 
 var favoriteQb = {
  firstName: "Drew",
  lastName: "Brees",
  jerseyNumber : 9,
  team: "Chargers"
}

delete favoriteQb.team
console.log(favoriteQb) // will delete team out of object


// 6.2 typeof operator returns what datatype the value is in a string  

console.log(typeof favoriteQb) // will print object 


/** 7 The conditional operator (ternary) is the only JavaScript operator that operates three operands. 
 * The operator can have one of two values based on a condition. The syntax is:
condition ? val1 : val2 
If condition is true, the operator has the value of val1. False, it has the value of val2.
**/

var age = 25
var status = (age >= 65) ? 'Senior Citizen' : 'Not a Senior Citizen';
console.log(status) // prints Not a Senior Citizen
