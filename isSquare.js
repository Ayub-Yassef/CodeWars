function isPerfectSquare(number){
    const squareRoot = Math.sqrt(number); // calculates the sq root
    return Number.isInteger(squareRoot); // verifies if sq rt is an integer
}

// to test function
var isSquare1 = isPerfectSquare(16);
var isSquare2 = isPerfectSquare(25);
var isSquare3 = isPerfectSquare(15);

console.log(isSquare1);
console.log(isSquare2);
console.log(isSquare3);