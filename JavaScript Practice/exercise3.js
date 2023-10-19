// Define a function named getLargestNumber
function getLargestNumber(args){
    //Use Math.max method with the spread opperator to find the largest number
    return Math.max(...args);
}
//Call the function with an Array of numbers

console.log(getLargestNumber([1,2,3,45,6,7,9]));