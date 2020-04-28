// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  // base case 
  //
  if(n === 0){
    return 1 
  }
//recursive case 
// want to save n - 1 
// 
if(n > 0){
  return n * factorial(n - 1);
} else {
  return null;
}

};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  // base casse 
  // if array.length equals 1 return the firt element in array
  if(array.length === 1){
    return array[0] 
  }
  if(array.length >= 1){
    // access first number in array and at it to the next number 
   return array[0] + sum(array.slice(1));
  } else {
    return 0;
  }
  
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.

var isEven = function(n) {
 // base case
// if number is strictly equal to zero return true 
 if(n === 0){
   return true 
   //if number strictly equals 1 return false 
 } else if(n=== 1){
   return false 
 }

// recursive case 
// subtract n minus two until it reaches zero or 1 
if(n > 0){
 return isEven(n-2) 
} else if(n < 0){
  // if number is negative add two until it reaches one or zero 
  return isEven(n+2);
}


};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //base 
  // stop recursing when n equals 1 , then return 1 
  if(n === 0){
     return 0 
  }

  
  
  // recursive case 
if(n > 0){
   return n - 1 + sumBelow(n-1)    
} else if( n < 0){
  return n + 1 + sumBelow(n + 1)  
}
 
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
let arr = []
// if x equals y + 1 return arr , for negative integers
if(x === y + 1){
  return arr
// if x strictly equals y minus one return array , positive integers 
} else if(x === y - 1){
  return arr
} else if( x === y){
  return arr;
}

// recursive case 
// add one to x 
if(x < y){
  return arr.concat( x + 1 , range(x + 1, y))
  // subtract one from x
} else if ( x > y){
  return arr.concat( x - 1 , range (x - 1, y))
}
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // Base case: Stop recurring when exponent === 0
  //  base case
    if(exp === 0) {
      return 1;
    } else if(exp < 0) {
      return 1/ exponent(base, -exp);
    } else {
        return base * exponent(base, exp - 1);
    } 
};






// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
//Base case 
// if n equals one return true 
if( n === 1){
   return true
} else if( n < 1){
  // if n equals anything else lower than one return flse 
  return false
}
 
// recursive case 
// divide number by 2 
return powerOfTwo((n / 2));

}



// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // if string length is zero return empty string to collect back up the chain
  if(!string.length){
    return ""
  }
  // recursive case 
  // invoke functon to slice of first char 

  return reverse(string.slice(1)) + string[0];
  
};



// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  
  string = string.replace(" ", "")
  
  //Base case 
  // if string length is zero or 1 return true 
  if(string.length === 0 || string.length === 1){
    return true ;
  }
  
  // recursive case 
  // if any test is failed return false 
    // if first character is equal to last character 
   // return palindrom input with  racecar slice front and end  
  if(string[0].toLowerCase() === string[string.length-1].toLowerCase()){
   return palindrome(string.slice(1,-1))
   
  }
// if first char is not equal to last
      // return false 
      return false ;
    
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  
  
  
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
if(y === 0){
    return 0
  }
if(y > 0){
 return x + multiply(x , y - 1) 

} else if (y < 0){
return -x + multiply(x, y + 1)
}   
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
// if y equals zero stop recursing 
// if y is negative 
// negative y 
// recursive case 
// will get to my base case by subtracting one from y
// positive y 

var divide = function(x, y) {
};



// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  
  //Base case 
  // Want to stop recursing when the length of both strings equal zero . 
  // if all characters are identical return true 
  if(str1.length === 0 && str2.length === 0){
    return true;
  }
 
  // Recursive case 
  // if first character is equal to second string first character keep itterating 
  if(str1[0] === str2[0]){
  // will call function inputing the removal of both strings 
  return compareStr(str1.slice(1), str2.slice(1))
  } else {
    // otherwise return false  
    return false 
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  // will initialize an array literal to hold characters inside 
  let arr = []
  // base case 
  // when the length of the string is zero return array 
  if(!str.length){
    return arr;
  }
// recursive case 
// will need to use the concat method to put all letters in array
// will use bracket notation to access first char in string  
// will invoke the function inputting slice method to extract off each character to eventually hit the base case 
 return arr.concat(str[0] , createArray(str.slice(1)));
  
  
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  let arr = [];
// Base Case
// When the array has a length of 1
if(array.length === 0){
  return arr
}
//return the first element in array 

  
// Recursive case 
// will invoke the function first inputing splice method to take out first character 
// will add first element in array
return arr.concat(reverseArr(array.splice(1)) , array[0]);
  
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length){
// Base case 
// if length of array is equal to zero 
// return array 
if(length === 0){
 return []
}
//recursive case 
// push value in array 
// assign the function call to a variable 
    // function will eventually hit base case and return array 
// push all values in arr
 // return arr 
let arr = buildList(value, length - 1) 
   arr.push(value)
   return arr
};


// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
 var countOccurrence = function (array, value) {
    // Base Case 
 // Will return a nuber 
 // if array length equals zero return zero
    if (!array.length) {
        return 0;
    }
    
    
    // recursive case 
    var first = array[0];
    // slice off the first element 
    var result = countOccurrence(array.slice(1), value);
// if the first element in array is strictly equal to value     
    if (value === first) {
        result++;
   // increment result 
    }
    return result;
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  // create an array literal to contain new values 
  let arr = [];
  
  // base case
  // Want to stop recurssing when array length is zero 
  if(!array.length){
    return arr
  }
  
  // recursive case 
  // want to cycle through all elements in array 
   // will pass the first element in array to call back 
   return arr.concat(callback(array[0]) , rMap(array.slice(1), callback))
  // will invoke rMap inputting slice of first element once passed to callback function
   // will then you concat method to put all in array 
};





// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {

};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
//base case: f the number is negative, return null
   if (n < 0) {
     // return null
    return null;
    // if n is 1
    } else if(n === 1){
      return 1;
    // return 1
    } else {
    // simply add the numbers from n - 1 and n - 2 of the function call
      return nthFibo(n - 1) + nthFibo(n - 2);
    }
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  let arr = [];
  
  // Base Case 
  // Will stop recursing when length of array is zero 
  // will return new array 
  if(!input.length){
    return arr;
  }
  // recursive case 
  //Will access the first element in array and tag toUpperCase method 
  //Will then invoke the function inputting the slice method to cut every first element out 
  // then will need to use concat method to put all elment inside array
  return arr.concat(input[0].toUpperCase() , capitalizeWords(input.slice(1)))
  
  
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
let arr = [];
   // Base Case 
  // Will stop recursing when length of array is zero 
  // will return new array 
  if(!array.length){
    return arr;
  }
  // recursive case 
  //Will access the first element in array
    // Then will need to access first character in string and tag toUpperCase method
      // will need to use the concat operator to glue the rest of the word to the first letter 
          // will have to cut out first char from original string 
//Will invoke the function inputting the slice method to cut every first element out to manipulate next element 
  // then will need to use concat method to put all elment inside array
  return arr.concat(array[0][0].toUpperCase() + array[0].slice(1), capitalizeFirst(array.slice(1)))

};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  // Base Case
  // if string equals zero stop recursing 
   if (str.length === 0) {
     //return a object
        return {};
    }
     // Recursive Case 
    var key = str[str.length - 1];
    var obj = letterTally(str.slice(0, str.length - 1));
    // if the first character in string does exist in object  
    if (obj[key] !== undefined) {
     // if the first character does exist as a property add 1   
        obj[key]++
    } else {
      // if does not 
      // set key to character equal to 1
        obj[key] = 1;
    }
    //
    return obj;
    
 
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
     // Base case 
 // Will stop recursing when array length equals zero 
 if(list.length === 0){
   //return array 
   return []
 } 
   // Recursive case 
  // set variable to invoke function inputting the slice method to take out the first element    
    var result = compress(list.slice(1));
     // If first element does not equals to second element  
    if (list[0] !== list[1]) {
     // invoke function and add elements inside of array  
        result.unshift(list[0]);
    }
    //return the result 
    return result
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  let arr = [];
  //Base Case 
  //Stop recursing when array length is zero 
  if(array.length === 0){
    return arr
  }
  //Recursive case 
  // if first element is equal to second element slice it out 
  if(array[0] === array[1]){
    return minimizeZeroes(array.slice(1))
  }
  // will invoke function inputting the slice method to continue on to next element 
      // will keep the value of the slice method 
   return arr.concat(array[0], minimizeZeroes(array.slice(1)))   
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
   //Base Case 
  // if length of array is zero stop recursing 
  if (!array.length) {
     // return array 
        return [];
    }
    // will store first value in variable 
    var first = array[0];
    // will store second value in variable 
    var second = array[1];
      //Recursive case   
    var result = alternateSign(array.slice(2));
  // if number is less than zero flip it to positive     
    if (first < 0) {
 // will use the unary operator minus to return the negation of a number      
        first = -first;
       }
    // if number is greater than zero flip to negative 
    if (second > 0) {
    // will use the unary operator minus to return the negation of a number  
        second = -second;
    }
    // will add to beginning of array
    result.unshift(second);
    result.unshift(first);
    // return the result s
    return result;
};








// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  // Base case
    // Return empty string when string length is 0
  if(!str.length) {
    return "";
  } // Recursive case
      /** Check if first letter in string matches a stringed number and replace
       * with the number spelled out in a string
       */ 
  if(str[0] === "0") {
    return "zero" + numToText(str.slice(1));
  } else if(str[0] === "1") {
    return "one" + numToText(str.slice(1));
  } else if(str[0] === "2") {
    return "two" + numToText(str.slice(1));
  } else if(str[0] === "3") {
    return "three" + numToText(str.slice(1));
  } else if(str[0] === "4") {
    return "four" + numToText(str.slice(1));
  } else if(str[0] === "5") {
    return "five" + numToText(str.slice(1));
  } else if(str[0] === "6") {
    return "six" + numToText(str.slice(1));
  } else if(str[0] === "7") {
    return "seven" + numToText(str.slice(1));
  } else if(str[0] === "8") {
    return "eight" + numToText(str.slice(1));
  } else if(str[0] === "9") {
    return "nine" + numToText(str.slice(1));
  }
  // Join the words together and return the new string
  return [str[0]].concat(numToText(str.slice(1))).join("");
};


// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
