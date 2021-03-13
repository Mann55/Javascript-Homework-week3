// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];


/* --- First Way ----- */

/*
function multiplyHundred(num){
    return num * 100;
}

let multipliedNumbers = numbers.map(multiplyHundred);

console.log(multipliedNumbers);
*/



/* --- Second Way ----- */
/*
let multipliedNumbers = numbers.map(number => number * 100);
console.log(multipliedNumbers);
*/



/* --- Third Way ----- */
let multipliedNumbers = numbers.map(number => {
    return number * 100;
});
console.log(multipliedNumbers);