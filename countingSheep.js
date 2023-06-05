//the reduce() method in the function will iterate the entire array and gather every instance of 'true', starting at 0. Inside the function we create a callback function pertaining to the reduce() method to set the conditions of the iteration and the necessary arithmetics.

function countSheeps(arrayOfSheep) {
    var sheep = arrayOfSheep.reduce(function (present, value) {
        if (value === true) {
            return present + 1;
        } else {
            return present;
        }
    }, 0);
    return sheep
}

var testArray = [true, true, false, false, true, false, false, false, true];//4 true's
console.log(countSheeps(testArray));