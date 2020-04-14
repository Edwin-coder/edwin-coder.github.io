//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // create array literal 
    var arr = [];
    // use for in loo to cycle over an object
    for(var key in object) {
        // use push method to add key into an arr
        arr.push(object[key]);
    }
    // retirn an arr
    return arr; 
} 


//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function keysToString(object) {
  return Object.keys(object).join(' ')
}


//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function valuesToString(object) {
    // create array literal 
    var arr = [];
    // use for in loop to loop over object 
    for ( var key in object) {
        // use conditional to check if object val is a string
        if(typeof object[key] === 'string'){
            // if true, push into an arr
            arr.push(object[key]); 
        }
    }
    // return an arr use join mehtod
     return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    
// will use if else statement to test for array using Array.isArray
if(Array.isArray(collection)){
    return "array"
    // will use type of to determine if value is object
} else if (typeof collection === "object"){
    return "object";
}
    
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
 
 // will use bracket notation to access first character in string
 // will use .toUpperCase method to uppercase 
 //will use .slice method to attach the first cap letter 
 return string[0].toUpperCase() + string.slice(1);
    
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
// will use .toLower case and .split to lowercase and put in an array
var myArr = string.toLowerCase().split(" ")
// will use for loop to itterate over array
for(var i = 0; i < myArr.length; i++){
    // Will use charAt to return the character in string
    // will use toUpperCase to uppercase the first characters
    //will use .slice to add remaing array
    myArr[i] = myArr[i].charAt(0).toUpperCase() + myArr[i].slice(1);
}
    // use join() to turn array to string and return
    return myArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

 function welcomeMessage(object) {
    // return the message, use the function we created capitalizeWord and pass object.name as par
    return "Welcome" + ' ' + capitalizeWord(object.name) + '!';
}



//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


    function profileInfo(object) {
    // return the message, use the function we created capitalizeWord and pass object.name as par
    // ans add 'is a' function  capitalizeWord(object.species);
 return capitalizeWord(object.name) + ' ' + 'is a' + ' ' + capitalizeWord(object.species);
}



//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function maybeNoises(object) {
    // use conditional statemant to check object keys if less or equal to 0
    // if true return 'there are no noises';
    if(Object.keys(object).length <= 0) {
        return 'there are no noises';
        // use conditional statemant to check object keys if greater to 0
    } else if(object.noises.length > 0){
        // return object noises using join method 
        return object.noises.join(" ");
    }
   return "there are no noises";
}
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function hasWord(string, word) {
    // apply conditional statement 
    // use includes method to check in word exists in the string of words
    if(string.includes(word)){
        // if passes return true, if not return false
        return true;
    }
     return false; 
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function addFriend (name, object) {
    //use push method to add name to friends array
    object.friends.push(name);
    // return an object
    return object;
}


//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
// will look if name exist in object friends list 
// if does not exist return false, if does return true
//if object is empty return false 
if(object.friends === undefined){
    return false;
} 
// will need to look through array for a match to return true ;
for(let i = 0; i < object.friends.length; i++){
    if(name === object.friends[i]){
        return true;
    }
}
// return false otherwise 
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // create a array literal to holds tha names that do not friend with
    var listName = [];
    // var start is set conditiona
    var start = false;
    // use for loop to throught an array
    // and check conditioan if name at index location in the array
    // assign start to that array at i
    for(let i = 0; i < array.length; i++){
        if(name === array[i].name) {
            start = array[i];
        } else {
            // else push that name to the listName array
            listName.push(array[i].name);
        }
    }
    // if start is null, return the listName array
     if(start === null){
         return listName;
     }
     // create another holdes with final output
     var finalList = [];
     // now loop through an listName array
    for(var i = 0; i < listName.length; i++) {
    // use the conditional statement and test if index of listName === -1
        if(start.friends.indexOf(listName[i]) === -1) {
            finalList.push(listName[i]);
        }
    }
   return finalList;
}



//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

 function updateObject(object, key, value) {
    // use bracket notation to update value
    object[key] = value;
    //return and object
    return object;
}   



//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//  /* global removeProperties */
//     QUnit.test("removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>", function(assert){
//       var data = {a: "one", b: "two", "hokey": false};
//       removeProperties(data, ["a","hokey"]);
//       assert.deepEqual(data, {b: "two"});

//       var data = {a: "one", b: "two", "hokey": false};
//       removeProperties(data, ["b"])
//       assert.deepEqual(data, {a: "one", "hokey": false});

//       var data = {a: "one", b: "two", hokey: false};
//       removeProperties(data, []);
//       assert.deepEqual(data, {a: "one", b: "two", "hokey": false});
//     });



function removeProperties(object, array) {
// will need to cycle through strings in array
//if they do then we must delete key/value pairs 
for(var i =0; i < array.length;i++){
    delete object[array[i]];
}
}
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // will return an array without duplicate values 
return [...new Set(array)];


}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}