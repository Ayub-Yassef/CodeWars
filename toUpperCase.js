// A contemporary popculture solution to a very common algo challenge
String.prototype.toJadenCase = function () {
    let words = this.split(' ');
    let capitalisedWords = words.map(word => {
        if (word.length > 0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
            return word;
        }
    })
    return capitalisedWords.join(' ');
};

let inputString = "my mum's autobiography is out now, get a copy";
let capdResult = inputString.toJadenCase();
console.log(capdResult);

//split the string into an array, use map method to turn first letter to upper case, lastly turn words back to a single string.