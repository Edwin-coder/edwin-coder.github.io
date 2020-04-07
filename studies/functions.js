/**
 * Functions
 * 0. Functions are used to encapsulate code we want to reuse. This makes our coding more 
 * efficient and minimizes error. 
 * 
 *
 * */
 
 // 1.There are Two phases in creating a function 
 
 /** 1.1 First phase is function declaration/ definition 
 - First you start off my declaring using the key word function followed by a name
 related to what you are doing.
 - Then in the parenthesis you put your parameters (can have as many parameters as needed). 
 These parameters act as placeholders.
  - After that you follow up by placing curly braces with your code of action inside.**/
 function subtraction(num1,num2){
     return num1 - num2
 }
 
 // 1.2 The next phase is function call. In order to use it we must give it values to work
 // Only type the function name followed by parenthesis 
 //Within the paranthesis are called arguments which will be passed into your parameters
 // You should not give more arguments than there are paramters ! 
 // This whole process is called invoking or calling a function!
 subtraction(10,5);
 
 
 /** 2. if you wanted to assign a function to a variable for private reasons. You would
  * initialize your variable with just the fuction omitting the name. This is called an
  anonymous function.**/
  
  var subtract = function(num1,num2){
      return num1 - num2 ;
  }
  
  // 2.1then you invoke the function by typing the variables name followed by parenthseis 
  // and the arguments inside/
  
  subtract(20,10)
  
  
  /** 3.You omit parameters if you just want your function to act as an 
  alert or something **/
  
  function chant(){
      console.log("WhoDat!")
  }
  
  // 3.1 Then just call it without any arguments 
  chant()
  
  
  
  /** 4. Scope 
  You can't access variables in a function from outside but you can have access 
  to outside variables from within the function. Anything outside your function is 
  called global scope. Anything inside a function is called local scope. The local scope has 
  access to its parent function which is the global scope.
  
  This is also considered a closure function because it has access to its parent scope 
  which is the global scope.
  **/
  
  var x = 20
  
function add(){
 return x + 20
}
console.log(add()) // will print 40
  
  
  