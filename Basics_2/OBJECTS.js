                  // ................. OBJECTS LITERALS.....................//
const sym = Symbol("new1");
const obj = { // here key is stored in string format behind the scene
 name:"love",
 age: 20,
 [sym]: "my key1",
 location: "mathura",
}
console.log(obj.age);
console.log(obj["name"]);
console.log(obj[sym]);

// to change the values

obj.name = "agrawal"; // this changes the key of object
console.log(obj["name"]);
//Object.freeze(obj); // it freezes the object you cannot change the value any more
//obj.name = "bajhcebwj";
console.log(obj["name"]); // it does not change

// we can add functions in an object as well

obj.greeting = function(){
    console.log("hello user");
}
console.log(obj.greeting());
obj.greeting2 = function(){ // here this keyword is use to refer the same object
    console.log(`hello user ${this.name}`);
}
console.log(obj.greeting2());

// .............. THIS WAS ALL ABOUT OBJECT LITERAL.................//



//          .......... LETS PROCEED FURTHER IN OBJECTS.................


const o1 = new Object(); // constructor object
const o2 = {}; // object literal
o2.id = "1234";
o2.name = "sam";
o2.isLoggedIn = "false"
console.log(o2); // simply prints as object

 // now we will declare objects inside objects

const regularUser = {
    email: "love@gmail.com",
    fullname : {
         username:{
            firstName:"love",
            LastName:"agrawal"
         }
    }
}
console.log(regularUser.fullname.username.firstName); // this is how you access
const oo1 = {1:'a' , 2:'b'};
const oo2 = {3:'c' , 4:'d'};
const oo3 = {...oo1,...oo2}; // spread oerator combines the two object
console.log(oo3);

console.log(Object.keys(oo1));  // this is very very important as its datatype is array 
console.log(Object.values(oo1));
console.log(oo1.hasOwnProperty('3')); // it checks weather this key exist or not




//     .........................OBJECTS DESTRUCTURING................ //

const course = {
    name : "bnjskdc",
    price : 32324,
    location : 'MATHURA',
}
// if we want to use key again and again we use this
const {location} = course;
console.log(location);
// if you think location is a big name you want somthing else for it you can do 
const{location : f} = course;
console.log(f);


//          .............. INTRODUCTION TO JASON AND API...................

// {
//     "name":"love",
    
// } // jason is nothing but an object without name called by an api in this both key and value are in string format