function hotelCost(nights){
    let nightlyRate = 40;
    let stayTotal = nightlyRate * nights;
    if (nights >= 7){
        stayTotal -= 50;
    } else if (nights >= 3) {
        stayTotal -= 20;
    }
    return stayTotal;
}

let stay1=2;
let stay2=5;
let stay3=7;
let stayTotal1=hotelCost(stay1);
let stayTotal2=hotelCost(stay2);
let stayTotal3=hotelCost(stay3);

console.log(stayTotal1);
console.log(stayTotal2);
console.log(stayTotal3);