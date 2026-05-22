let score = "324"; // this is in string
console.log(typeof score);
let scoreInNumber = Number(score); // now this is converted into number
console.log( typeof scoreInNumber);
let ns = "dffeg";
console.log(typeof ns);
let ns1 = Number(ns);
console.log(typeof ns1);
console.log(ns1); // it will give NaN not a number
// true -- > 1 ; false -- > 0;
let isLogged = "dhajk";
let booleanisLogged = Boolean(isLogged);
console.log(booleanisLogged);
// 1  - > true ; 0 -> false;
// "" -- > false ; "dbdnb" - > true;


//.                          --------- operations --------- 

let value = 3454;
let negval = -value;
console.log(negval); // -ve of value;
console.log(2+2); //addition
console.log(2-2); //subtraction
console.log(2*2); //multiplication
console.log(2**2); // 2 to the power 2
console.log(2/2); //devision
console.log(2%2); //reminder

let val1 = "hello";
let val2 = " wolrd"
console.log(val1+val2); // string concatination
console.log("2" + 2+3); // 223 because operation performed from left to right 1st two is string so whole will be treated as a string
console.log(2+3+5+7 +"56"); // addition will be performed 1st
console.log(+true) // return 1; we know that conversion of true is 1
console.log(+"") // return 0; we know conversion of empty string is 0
let game = 1;
game++;
console.log(game); // post increment by 1
++game;
console.log(game); // pre increment by 1
