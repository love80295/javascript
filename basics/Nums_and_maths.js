const n1 = 4256678;
console.log(n1); // defined normal
const n2 = new Number(132435);
console.log(n2); // specifically defined as a number object
const S = n1.toString(); // converts the number into String
console.log(typeof S)
console.log(n2.toFixed(3)); // values after  3 decimal places as we enter 3 
const n3 = 23.436545;
console.log(n3.toPrecision(3)); // it controls total important digits till the number we added
const hundreds = 1000000000000; // it is little bit difficult to count total zeros
console.log(hundreds.toLocaleString('en-IN')) // converted to indian local standard



//                /.................. MATHS.............../


console.log(Math.abs(-345)); // converted the -ve values into +ve
console.log(Math.round(4.6586578)); // simply round off the number
console.log(Math.ceil(4.1)) ; // gives 5 decimal ke baad jitna bhi ho +1 kardeta h 
console.log(Math.floor(4.9)) ; // kitna bhi uper jaye dega original number hi
console.log(Math.pow(2,2)) ; // gives 2 to the power 2 
console.log(Math.min(2,3,4,5,6,7,8,9,)); // gives the minimum value in an array
console.log(Math.max(2,4234,2435,67,567,)) // gives the maximum value in the array
console.log(Math.random()) // // its value will always lies between 0 and 1

//        ......... lets play  with random ............

console.log(Math.random()*10) ; // value now will lie between 0 and 10;
console.log(Math.random()*10 + 1) ; // by this statement value will never be 0;
  


// Important formulae
 
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() *(max-min) + min)); // now it will generate the numbers between 10 and 20

