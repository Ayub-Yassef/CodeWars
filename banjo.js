function areYouPlayingBanjo(name){
    if (name.charAt(0).toUpperCase() === 'R'){
        return name + " plays banjo";
    } else {
        return name + " does not play banjo";
    }
}

console.log(areYouPlayingBanjo("yassef"))
console.log(areYouPlayingBanjo("Romeo"))
console.log(areYouPlayingBanjo("rusty"))