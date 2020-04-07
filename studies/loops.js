/**
 * 
 * Loops:
 * 
 * 0. Loops allow us to exectue a code block how ever many times we may need.
 * They are especially useful for cycling through complex datatypes and having to 
 * act on specific values inside of them. There are while loops, for loops, and for 
 * in loops. 
 * 
 * 1. For loops are normally used to itterate over arrays. To statr a for loop you must use 
 * the keyword for followed by parenthesis. Within the parenthesis there are three statements:
 * Starting point to loop, Stoping point, and incrementor or decrementor. After that is your pair 
 * of curly braces that will hold your code you want executed.
 * 
 * 2. For in loops are used to itterate over objects. To start a for in loop use the 
 * keyword for followed by parenthesis. Inside your parenthesis you will put: var key in 
 * object(name of object you choose to itterate over);. Then after the parenthesis add a 
 * pair of curly braces. Inside the curly braces will be what you want to execute you values 
 * while cycling through it. To access just the keys you would type key.
 * To access the values of keys you would type object(name of your object)[key]. 
 * Note: Do not use dot notation to access keys only bracket notation!
 * 
 * 
 * 3. While loops are normally used on variables outside a function or code block.
 * You start with the keyword while followed by parenthesis. Inside your parenthesis 
 * yet again is your condition being evaluated. After the parenthesis is your curly braces
 * with the code you want executed inside. It is very important that you break yourself 
 * out of a loop by using an incrementor or decremntor depending on how your counting. If 
 * you omit your break your code will crash!
 * 
 * 
 * */
 
 
 // 1. For loops 
 // To loop forwards
var myArray = [23,"saints", true, "Yuh"]
 /**
  * initialize: var i = 0
  * stopping condition: i < myArray.length
  * increment: i++
  */
 for(var i = 0; i < myArray.length; i++){
     console.log(myArray[i]);
 }
 
 // 1.1 
 // To loop backwards 
 /**
  * initialize: var j = myArray.length-1;
  * stopping condition: j >= 0
  * decrement: j--
  */
 for(var j = myArray.length-1; j >= 0; j--){
     console.log(myArray[j]);
 }
 
 
 
 
 //2 for in loops 
 
 var myTeam = {
  name: "Saints",
  city: "New Orleans",
  superbowlChamps : true,
  colors : "black and gold"
};
// Note* type key to access all keys in object 
// type object[key] to access values in object
 for(var key in myTeam){
   console.log(key);
console.log(myTeam[key]);
 }
 
 
 
// 3. while loops 
// Reverse looping
 var quaratinedDays = 60
// Going backwards 
 while(quaratinedDays >= 0){

console.log(quaratinedDays)
// Decrementor to break out of code
quaratinedDays --
 }


// 3.1 Forward looping
 var daysToFreedom = 0
 // Going forwards
 while(daysToFreedom <= 60 ){
   console.log(daysToFreedom)
   // Incrementor to break out of code !
   daysToFreedom++
 }