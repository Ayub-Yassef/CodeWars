function makeLatinSquare(n){
    var square = [];
    for(var i=0; i<n; i++){
        square[i] = [];
        for (var j=0; j<n; j++){
            square[i][j]=0;
        }
    }
    for(var i=0; i<n; i++){
        for (var j=0; j<n; j++){
            square[i][j]=(i+j) % n+1;
        }
    }
    return square;
}
var size = 14;
var latinSquare = makeLatinSquare(size);
console.log(latinSquare);
