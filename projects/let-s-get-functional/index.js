// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-edwin-coder");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
// using filter find the number of males customers in our list 
let arrOfMales =_.filter(array,function(customObj){
    // filter all of male customers 
    //each customerObj has a gender prop
    return customObj.gender === "male";
});
return arrOfMales.length;
};


var femaleCount = function (arr){
    // using reduce find the number of females in the list 
let numOfFemales = _.reduce(arr,function(females,custObj){
    // if gender equals female increment accumulator by 1 
    // each custom obj has a gender prop 
      if(custObj.gender === "female"){
          females ++;
      }
      return females;
},0) ;   
    
    // return number of female customers 
    return numOfFemales;
};

var oldestCustomer = function (arr){
   
     // find the oldest customer name in arr of custobjs 
    // custobj has an age prop and a name prop
 let oldestCusObj = _.reduce(arr,function(oldCus,currCus){
 // if custobj is greater than all other custobj return the name prop value of custobj
     if(currCus.age > oldCus.age ){
         oldCus = currCus;
     }
     // return oldest customer object 
     return oldCus;
 });
// return string 
return oldestCusObj.name;
};



var youngestCustomer = function(arr){
    
    
    let youngCusObj = _.reduce(arr,function(youngCus,currCuss){
        //if current customer is less than young customer assign young customer that cur cus obj
        if(currCuss.age < youngCus.age){
            youngCus = currCuss;
        }
        // return young cus object 
        return youngCus;
    });
    
    // return name of young customer from youngCusObj using dot notation 
    return youngCusObj.name;
    
};



var averageBalance = function(arr){
  // find the avg balance of all customers 
 // will need to invoke map to put all balances in an array;
let balances =  _.map(arr,function(cusObj){
  // will need to convert string to number in balance property  and omit dollar sign and comma 
    return parseFloat(cusObj.balance.replace(/\$/g,"").replace(/,/g,""),10);
});
 // will need to get the sum of all balances and then divide it by how many balnces there are    
let total = _.reduce(balances, function(sum,bal){
    return sum + bal;
},0);
// return avg balance of all customers 
// will divide the total by the length of balance array 
var avg = total / balances.length;
return avg;
};





var firstLetterCount = function (arr,char){
    

// need a variable that contains a count of how many names begin with given char 
let count = 0;
// find amount of names in array of customer objects that begin with the given char  
 let names = _.map(arr,function(cusObj){
     return cusObj.name;
 });   

  // will invoke each to itterate over names array 
  _.each(names,function(names){
      // if first letter of name equals given char , increment count by 1 
      if(names[0].toLowerCase() === char.toLowerCase()){
          count++;
      }
  });

    
    
  // return number   
    return count ;
};





var friendFirstLetterCount = function(arr,cust,char){
 // based on customer given , see how many friends of that customer beginns with a given char
 
 
 // will need to hold given customer object 
 var customerObj;
 
 // iterate through arr of objects 
 _.each(arr,function(custObj){
     if(custObj.name === cust){
         customerObj = custObj;
     }
 })
//  console.log(customerObj);


// will create a count variable to count how many friends have a name begining with given character
let count = 0

_.each(customerObj.friends,function(friend){
     if(friend.name[0].toLowerCase() === char.toLowerCase()){
         count++
     }

    
    
})



 
 
 // return number of friends begining with the given char 
return count;
 
}

var friendsCount = function(arr,name){
// Find the cust names that have a given customer's name in their friends list

var custNames = [];
 // have to iterte through array of customer objects 
_.each(arr,function(custObj){
// search all customers friends list to see if they have a certain friend based on given name 
_.each(custObj.friends, function(friend){
        if(friend.name === name){
// if thee name matches the name in friends list name push the customers name into a custNames array
 custNames.push(custObj.name);
        }
    });
});

 
    // return array
    
    return custNames;
}

var topThreeTags = function(array){
    
  // find 3 most common tags among all customers
  // will need to hold all tags in an array 
 var tagsArr = []
  // iterate though array which has all the customer objects 
  _.each(array,function(custObj){
      
      // will invoke each again to iterate over tags array
      _.each(custObj.tags,function(tag){
          // push all tags to tagsArr
          tagsArr.push(tag);
      });
  });
 
   var tagCount = _.reduce(tagsArr,function(countObj,tag){
       if(countObj[tag]){
           countObj[tag] ++
       } else {
           countObj[tag] = 1;
       }
       return countObj
   },{})

    
// Transfrom object to array
var tagArr = _.map(Object.keys(tagCount),function(key){
    return [key,tagCount[key] ];
});



// will need to sort array

tagArr.sort(function(a, b){
  // sort function will sort in decending order
  return b[1] - a[1];
});

// return array;

// slide off the first 3 elements in the array. Those will be the top 3 words 
var top3arr = tagArr.slice(0,3);
// console.log(top3arr)


// using map, change the elements in the array from sub arrays to the words at the 0th index
var top3Words = _.map(top3arr, function(wordAndCountArr){
  // return the word in place of the nested array elements
  return wordAndCountArr[0];
});
// return array of top 3 words 
return top3Words;
};










var genderCount = function(arr){
    // create a summary of gender the output will be in array
  // use reduce 
  
 var genderObj = _.reduce(arr,function(gender,currCus){
         if(gender[currCus.gender]){
             gender[currCus.gender] ++
         } else {
             gender[currCus.gender] = 1;
         }
         return gender
  },{})


    
     
    
    
    
  // return object   
    return genderObj;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
