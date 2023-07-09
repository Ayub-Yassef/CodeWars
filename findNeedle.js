haystack = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] //test array created
function findNeedle(haystack){ //function declared
    return "found the needle at position " + haystack.indexOf("needle"); //used dot notation to direct the function to the array of haystack's "needle" string and to concatenate it to a scripted message printed to the console.
}
console.log(findNeedle(haystack)) //called the function to print to console.

