 // ----------------Basic comparison-------------

console.log(2>3) // greater than
console.log(2>=3) // graeater that equal to
console.log(2<3) // less than
console.log(2<=3) // less that equal to
console.log(2==3) // eqal qual to 
console.log(2!=3) // not equal to

// -------------tricky comparison-------------

console.log("2" >= 2); // javascript converts the string datatype into number
console.log(null>0) // null is converted into 0;
console.log(null>=0) // null is converted into 0;
console.log(null==0) // IMPORTANT for == javscript does not convert null to 0;
console.log("2"===2) // this is strict check it will not check only numbers it will check datatype as well


// ----------- DATATYPES ------------
// premitive
// 7 types -- > 1 . String , 2. Number , 3. Boolean , 4 . null , 5. undefined , 6. symbol , 7.bigint
// reference type (non primitive);
// 1 . Array , 2. Objects , 3. Functions

// decalre object

let myObj={
    name: "love",
    age: 19,
}
console.log(myObj.name);
