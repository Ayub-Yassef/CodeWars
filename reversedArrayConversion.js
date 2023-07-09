function digitize(n) {
    return String(n).split('').map(Number).reverse();
}

// used 'String(n)' to convert the integer 'n' into a string representation
// used 'split('')' to split the string into an array of individual digits
// used 'map(Number)' to convert the array into a numbers array
// 'reverse()' to reverse the order of the numbers array