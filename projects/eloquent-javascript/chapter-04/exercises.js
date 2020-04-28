////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(num1,num2,num3) {
// will need to push all given numbers inclusive to array 
var arr = [];
// if both numbers are equal then return an empty array 


// if num3 is less than or equal to zero return an empty array 
         if(num3 <= 0){
           return [];
         }
// if given a third parameter must increment by that number and push numbers in array 
    else if (num3 > 0){
      for(var j = num1; j <= num2;  j += num3 ){
        arr.push(j);
      }
  // if given 2 parameters must push all numbers inclusive to array    
    } else if (num1 < num2){
   for(var i = num1; i <= num2; i++ ){
      arr.push(i);
   } 
    }
//if given a negative third parameter must return empty array 
 return arr;

}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
// will need a count to hold sum of array
var count = 0
// will need to itterate through array and add all numbers to count 
for(var i = 0; i < arr.length; i++){
  count += arr[i];
}
return count;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
// need to create an array literal to contain elements 
var newArr = []
// will need to push all elements from given array backwards to new array
for(var i = arr.length-1; i >= 0; i--){
  newArr.push(arr[i]);
}
// return new array 
return newArr;
  
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// need to study 
function reverseArrayInPlace(array) {
  
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    
    let old = array[i];
    
    array[i] = array[array.length - 1 - i];
    
    array[array.length - 1 - i] = old;
  }
  //return array 
  return array;
}
////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
// convert array to object list 
var obj = null;
// will need to put array elements in object 
//Building up a list is easier when done back to front. 
  for (var i = array.length - 1; i >= 0; i--) {
    //for each element add obj to list
    /*You can use a local binding to hold the part of the list that was built so far 
    and use an assignment like list = {value: X, rest: list} to add an element.
    */
    obj = {value: array[i], rest: obj};
  }
  //return the obj 
  return obj;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(obj) {
// convert obj to array list 
// will need to create array literal to hold values 
var arr = [];
// this will iterate over list
for (let node = obj; node; node = node.rest) {
  //simply take the value property of its head node. 
  arr.push(node.value)
}

//return array
  return arr
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  // console.log(value)
  // console.log(list);
  // return object literal with the value and list as params to put in list 
  return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(arr, n) {
  // if not an array returned undefined
  if (!arr){
    return undefined;
    //if number equals zero return the list val
  } 
  else if (n == 0){
    return arr.value;
  } 
  //
  else return nth(arr.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x,y) {
  // compare numbers 
  if (typeof x  === "number" && typeof y === "number" && x === y) {
    return true
    
    } else if(x === y){
      return true;
    }
  // if undfine or null 
  if (x == null || typeof x != "object" ){
     return false;
  } else if ( y == null || typeof y != "object"){
    return false 
  }
     // will need to put all keys in an array to compare length of arrays
    let keysx = Object.keys(x) 
    let keysy = Object.keys(y);
    // if lengths are not equals return false 
  if (keysx.length !== keysy.length){
    return false;
  }
   for (let key of keysx) {
    if (!keysy.includes(key) || !deepEqual(x[key], y[key])) return false;
  }
// return true as default 
  return true;

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
