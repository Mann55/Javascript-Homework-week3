/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var nombres = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

//find: needs an array and function
function findLongNameThatStartsWithA(names){
   let result = names.find(startsWithA)
    return result;
  }

function startsWithA(name){
  if(name.startsWith("A") && name.length>7 ){
    return true;
  }else{
    return false;
  }

}



var longNameThatStartsWithA = findLongNameThatStartsWithA(nombres);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
