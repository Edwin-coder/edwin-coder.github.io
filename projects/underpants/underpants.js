// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
var log = console.log
_.typeOf = function(value){
    
    
    if(Array.isArray(value)){
        return "array";
    } else if(value === null){
        return "null";
    } else if(typeof value === "string"){
        return "string";
    } else if(typeof value === "object"){
        return "object";
    } else if(typeof value === "boolean"){
        return "boolean";
    } else if(typeof value === "undefined"){
        return "undefined";
    } else if(typeof value === "function"){
        return "function";
    } else if(typeof value === "number"){
        return "number";
    }
    
    
    
    
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(arr,num){

    // will need to see if array is given , a number is given , and if so return first number of items in array
    if(!Array.isArray(arr)){
        return [];
    } else if( typeof num !== "number" ){
        return arr[0];
    } else if(num < 0){
        return [];
    }
    // 

arr.splice(num);
return arr;


}






/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
 
_.last = function(arr,num){
    
    

    // will need to see if given value is an array , if not return arr literal
     if(!Array.isArray(arr) || num < 0){
        return [];
    //will need to see if given value is a number, if not return first element in arr 
    } else if(typeof num !== "number"){
        return arr[arr.length-1];
    } else if(num > arr.length){
        return arr;
    }
    // based on given number must return the last elements at that index

  // will use method .splice to get numbers from end of array
  // to pull from the back we must flip the truthy of given number to negative ***fix this note 
   return arr.splice(arr.length-num)
   } 
    




/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/


_.indexOf = function(arr,val){
    
    
    // need to itterate through array to find first occurance of value 
    for(var i = 0; i < arr.length; i++){
     // Once found must return index at which the value is found  
    // stop loop once value is found 
        if(arr[i] === val){
         return i;
        
     //if value is not found output negative 1      
    } 
    
    
         
    }
    
 return -1;

}







/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(arr,val){
    // need to have access to all array elements
    // need a var to contain answer 
    var answer = false;
    for(var i = 0; i < arr.length; i++){
        // if array element is equal to value return true , otherwise false
        if(arr[i] === val){
            answer = true;
        }
    }
    return answer ;
};






/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection,func){
   // will need to use if else statements to determine if collection is array or not 
 // will call func for every element in the array
 if(Array.isArray(collection)){
     for(var i = 0; i < collection.length; i++){
          func(collection[i], i ,collection)
     }
     // will need to cycle through object 
 } else if(typeof collection === "object"){
     for(var key in collection){
         func(collection[key],key,collection)
     }
 }
   
   
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/


_.unique = function(arr){
// will need to create array literal to contain new elements 
var newArray = [];

 
// will need to cycle through given array 
// will invoke indexof to see if element exist in newArray. if not put value in 
// if equals to negative one push in array
for(var i = 0; i < arr.length; i++){
   if(_.indexOf(newArray,arr[i]) === -1){
       newArray.push(arr[i]);
   }
}

// return new array
return newArray

}




/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function (arr,func){
   // will create array literal to contain passed elements 
 var pass = [];  
   // call each to itterate through array 
         _.each(arr, function(e,i,arr){
             // need an if statement to determine if value is true 
             if(func(e,i,arr) === true){
                 pass.push(e);
              }
        
    })
    
    
    
    return pass;
    
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(arr,func){
    // will call filter to output an array of passed values from given array that func passed 
   var pass = _.filter(arr,func)
   // will create an array literal to contain failed values 
   var fail = [];
  // will need to cycle through arr 
  for(var i =0; i < arr.length; i++){
      // will call on contains to check if a value does not exist in pass
      // if it does push that value into fail
    if(! _.contains(pass,arr[i]))
    { fail.push(arr[i]);
          }
  }
 
  // returned failed array;
  return fail;
  
}






 
/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(arr,func){
    
  var truAndFalse = [];  
  // will invoke filter to put all pass values in array
 var pass =  _.filter(arr,func)
    truAndFalse.push(pass);
  // will invoke reject to put all failed values in array 
  var fail = _.reject(arr,func)
  truAndFalse.push(fail);
  
  
    //return array of both true and false arrays 
    return truAndFalse
    
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collect,func){
    
    var values = []
    
    // will invoke each to itterate through both types of collections
    _.each(collect, function(e,i,collection){
       values.push(func(e,i,collection))
        
    })
    
    
   // return array 
    return values;
}







/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(arrayOfObjs, prop){
    
// will need to access array of objects 
var propVal = _.map(arrayOfObjs,function(object){
     // Based on the given property, will need to access the value of that prop in obj
      return object[prop];
})
 // return array of object values 
    return propVal;
}




/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


_.every = function(collect,func){
    
  // will need a var to hold my boolean
  var answer = true;
  
    // if function exist proceed with calling each 
   if(func){ 
    // will invoke each function to itterate over collection
 _.each(collect,function(e,i,c){
     // will need to call func with arguments e,i,c
     // if itteration hits a false values switch answer to false 
     if(!func(e,i,c)){
         answer = false;
     }
     
     
     
 }); 
 // if function does not exist just itterate over collection 
   } else if(!func){
       // will invoke each to itterate over collection 
       _.each(collect,function(e){
           //if all elements are falsy switch answer to false ;
           if(!e){
              answer = false;
           } 
       });
   } 
   
   
   
  // must return boolean  
    return answer ;
};










/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collect,func){
 // if all elements are false answer remains false
 // will need to create a default variable to switch to true or false based on condition 
 var answer = false ;
 // will need to identify if func has been given 
 if(func){
  // will need to cycle through collection to pass all arguments to func
  _.each(collect,function(e,i,c){
  // if at least one element is true return true     
    if(func(e,i,c)){
        answer = true;
    }  
  });
  
   //if function is not provided return true if at least one element is truthy 
 } else if(!func){
     // will invoke each to itterate over collection
     _.each(collect,function(e){
         //if at least on element is true , switch answer to true 
         if(e){
             answer = true;
         }
     });
 }
 
 
 
 
 // return boolean
 return answer;
    
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(collect,func,seed){
    // must use seed for first iteration 
    var previousResult = seed
 // will need to cycle through all elements in collect
 for(var i = 0; i < collect.length; i++){
     // will use the return value of func as the "previous result"
    previousResult = func(previousResult, collect[i], i);
    //after the last itteration return the value from func call 
    if(i === collect.length){
        return func(previousResult,collect[i],i);
    }
    
 }
 // if no seed is given, use the first element of collection as the seed 
 if(!seed){
for(var j = 0; j < collect.length; j++){
    // if no seed is given, use the first element of collection as the seed
    previousResult = collect[0];
    //after the last itteration return the value from func call 
    if(j === collect.length){
  return  func(previousResult,collect[j],j);
    }
}
 }
 
 
 
 
 
}
 



    
    


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/


_.extend = function(...objects){
   return  Object.assign(...objects);
}



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
