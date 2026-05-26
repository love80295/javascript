function name(){      // this is how the function is defined
    console.log("love"); // function defination
}
name() ;  // calling a function and executing
name ; // this is only the refernce of a function


//  ......... further............

function add(n1 , n2){ // function parameters
    console.log(n1+n2);
}
add(3,4); // function arguments

function add2(n1 ,n2){
    return n1+n2;
    console.log("hello"); // after reaching return statement function did not do anything
}
const a = add2(3,4);
console.log(a);


function fun(username){
    return `${username} is just logged in`;
}
console.log(fun()); // if you did not pass anything it will return undefined


function fun2(username){    // function with if else
    if(username===undefined) return `please enter a name`;
    return `${username} is just logged in`;
}
console.log(fun2());


// condition where we did not know how many parameters are there

// then we use rest operator

function AddCart(...n1){        // ... will bind them into array
  return n1;
}
console.log(AddCart(1,2,3,4,5,4,6,7,5,43,7,5)); 

// one more thing for interview perspective is

function AddCart2(val1 , val2 , ...n1){        // ... will bind them into array
  return n1;  // what will be in n1;
}
console.log(AddCart2(1,2,3,4,5,4,6,7,5,43,7,5)); // val 1 and val 2 took 1st two values and rest get inserted into n1 array


const nobj = {
    a:'lo',
    price:'20',
}
function abc(obj){
    console.log(`the namw is ${obj.a} and price is ${obj.price}`);
}
abc(nobj);        // this is how you paas object into the function

let arr1 = [2,3,4,5,6,7,8];
function arr(a1){
    return a1[3];
}
console.log(arr(arr1));