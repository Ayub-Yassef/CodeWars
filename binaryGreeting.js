// The ever-famous "hello world" in web development, here presented as a solution in Binary (8-bit)
function greetInBinary(greeting){
    return greeting.split('').map(char => {
        let binary = char.charCodeAt(0).toString(2);
        let paddedBinary = '0'.repeat(8 - binary.length) + binary;
        return paddedBinary;
    }).join('');
}

let binaryCode = greetInBinary("hello world");
console.log(binaryCode)

//first, converted the characters into binary code using existing JS methods, but on line 5 confirmed to return 8-bit response