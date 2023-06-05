//created a new array with legth of n and mapped it to decrease by one from index.
function reversedSequence(n){
    var sequence = Array.from({length: n}, (_, index)=>n - index);
    return sequence;
}

console.log(reversedSequence(10));

//a for loop will also accomplish this challenge's task but this solution is the more-condense alternative.