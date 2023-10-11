function otherAngle(a, b) {
    let thirdAngle = 180 - (a +b);
    return thirdAngle;
}
let angleA = 45;
let angleB = 60;
let thirdAngle = otherAngle(angleA, angleB)
console.log(`The third angle of the triangle is ${thirdAngle} degrees.`);
// write a function otherAngle(a, b) where a and b are interior angles of a triangle and the function returns the third angle.