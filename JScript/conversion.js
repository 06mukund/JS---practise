let score = undefined

let scoreInStr = Number(score)
console.log(scoreInStr);
console.log(typeof scoreInStr)

// String => Number == NaN
// Number => String == String
// null => number == 0
// undefined => number == NaN

// Same way can convert to booelan

// ------------------Operations------------------

// Concatination

console.log(21 + "1");
console.log("1" + 24);
console.log("1" + "01");
console.log(12 + 3 + "3");
console.log("23" + 3 + 2);

// Post Incremet and Post Increment
// a++ will first store the number and then print it
// ++a will first increment the number then print it

let a = 3 
let b = a++

console.log(a , b);
//  4 3

let x = 3
let y = ++x
console.log(x , y);
// 4 4






