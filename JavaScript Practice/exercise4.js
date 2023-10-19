//Define an array of numbers
let initialNumbers = [1,2,3,4,5];

//Use map function to create a new array that duplicates each number in the original array
let duplicateNumbers = initialNumbers.map(function(number){
    return number * 2;
});

console.log(duplicateNumbers);
//Log the new array to console