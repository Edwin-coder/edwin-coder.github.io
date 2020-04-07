/** 
 * 
 * Control Flow : Allows us to control what is executed in our code.
 * 
 * 0. By using conditional statements we are able to 
 * execute what code we want to run based on their truthyness or falseyness. 
 * There are two types of conditional statements, if else statements 
 * and switch statements.
 * 
 * 1. If else statements are started with the key word if. Then you follow it with 
 * parenthesis. Inside the parenthesis is the condition that will be evaluated. After 
 * the parenthesis you place a pair of curly braces. Inside the curly braces will 
 * be the code you want executed if the condition in parenthesis are true. You can 
 * tag on other conditions to be tested starting with the keyword else if. 
 * else if has the same syntax as the if statement except you don't use the 
 * keyword if. Every condition you want tested after that will be an else if statement.
 * To prevent your code from crashing you should place an else statement 
 * incase all conditions fail. The else statement sytax starts with the keyword else 
 * followed by curly braces. Inside the curly braces is the code you want executed 
 * incase all fails!
 * 
 * 
 * 
 * 2. Switch statement are another way we can control the flow of our code. Especially
 * if its multiple values we want to test, it would make for cleaner code using 
 * switch statements. We start by using the keyword switch followed by parenthesis.
 * In the parenthesis is our expression that will be tested on a case for a match. Then 
 * you follow up with a pair of curly braces. Inside the curly braces is where all your 
 * conditions will be tested. Start with the keyword case followed by a value then colons.
 * You must go to the next line and put the code you want executed. After every statement
 * you must put a semicolon. The next line will be your break followed by a semi colon so
 * it could end the case being tested. A default should be put in to place incase all fails.
 * You start it off with the keyword default followed by colons then on the next line the 
 * code you want executed followed by a semicolon. 
 * 
 * 
 * */
 
 
 // 1. If ,else if statements 
 
var virus = 2020
 // The inital condition we test to start our if else statement using keyword if
 if(virus === 2019){
     console.log("Freedom!")
// additional condition to be evaluated using keyword else if
 } else if(virus !== 2020){
     console.log("I'm locked up they wont let me out :(")
    // else statement incase all fails using keyword else 
 } else{
    console.log("What will the future hold?")
 }
 
 
 
 // 2. switch statements 
 
 var event = "superbowl"
 
 switch(event) {
    case "virus":
    console.log(2020);
    break;
    case "superbowl":
    console.log("XLIV")
    break;
    case "Big move": 
    console.log("California")
    break;
    default:
    console.log("let the good times roll");
 }