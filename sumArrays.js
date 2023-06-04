function sum(numbers){
    if(numbers.length===0){
        return 0;
    }
    var total = 0;
    for (i=0; i< numbers.length; i++){
        total += numbers[i];
        }
    return total;
}
var numbers = [1, 2, 3, 4, 5];
console.log(sum(numbers));