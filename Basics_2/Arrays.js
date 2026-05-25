const newarr = [0,2,2,3,4,5,67]; // js arrays are resizable
console.log(newarr[0]);
const a = new Array(1,2,3,4,5,6,7); // another method to declare array

            // .................. JS MATHODS............//

             
newarr.push(6); // use to push items in an array
console.log(newarr);
newarr.pop(); // removes the top element of a array
console.log(newarr);
newarr.unshift(9); // adds an element starting of an array ; it is not optimised
console.log(newarr); 
newarr.shift(); // removes the 1st element of an array
console.log(newarr); 
console.log(newarr.includes(9)); // it states weather the given element is in the array or not
console.log(newarr.indexOf(67)); // it states the index of given element in an array if it does not exist it will return -1
const arr1 = newarr.join() ; // join only changes the typeof a array into string
console.log(arr1);
const arr2 = [1,2,3,4,5,6,7,8,9];
console.log(a.slice(1,3)); // it only prints array in a given range of indexes ecluding the outer one
console.log(arr2);
console.log(arr2.splice(1,3)); // splice manipulates the original array it littralyy removes the values of an array in a given range , and it does not excluded the outer index
console.log(arr2);
    


 //            ................ OTHER IMPORTANT METHODS.................


 const na1 = ["love" , "agrawal" , "btech"];
 const na2 = ["cs" , "gla" , "12thBlock"];
  na1.push(na2);//
 // console.log(na1); // both the arrays do not merge instead na2 is added as an array in na1
   // instead we can use concat

const combine = na1.concat(na2);
console.log(combine);

// there is another more efficiant way 

const combine2 = [...na1,...na2];
console.log(combine2); // this ... called spread operator

const na3 = [1,2,4,4 ,[5,6,7,8],[78,6,5,3],5,4,6,5,]; // it is array inside array
const na4 = na3.flat(Infinity); // it will break all the elements into one single array
console.log(na4); 

console.log(Array.isArray("love")); // check weather it is an array or not
console.log(Array.from("love")); // converts the given string into an array
console.log(Array.from({name:"love"})) // it will give empty because it does not determine weather to make array from key or value


let a1 = 12
let a2 = 13
let a3 = 14
let a4 = 15
console.log(Array.of(a1,a2,a3,a4)); // converts the given variable into an array