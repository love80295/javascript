{} // this is a scope

let c = 442;  // this is global scope

if(true){ // this is block scope
    let a = 10
    let c = 235;
}
console.log(c);

//          ............. INTERESTING CONCEPT.............

console.log(addnum(5)); // it will not give error 
function addnum(num){
    return num+1;
}
addnum2(5);  // this will give an error because it is the concept of hoisting , you cannot accesee before declaration
const a = function addnum2(num){
    return num+1;
}
