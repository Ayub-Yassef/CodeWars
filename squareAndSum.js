function squareSum(numbers){
    let squaredNumbers = numbers.map(number => number * number);
    let sum = squaredNumbers.reduce((accumulator, currentValue) =>accumulator + currentValue, 0);
    return sum;
}

let numbers = [2, 3, 4, 5];
let result = squareSum(numbers);
console.log(result);

// line 2: used the map() method to square each number in the array; this creates a new array 'squaredNumbers' where each number in the input array is squared.
// line 3: used the reduce() method to sum the squared numbers starting with an initial value of 0.
// line 4: the function returns the sum of the squared numbers
// lines 7-9: creating an array to test the function in our terminal.