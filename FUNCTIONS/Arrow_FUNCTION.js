const user = {
    name:"love",
    message: function fun(){
        console.log(`${this.name}, welcome bsdk`)
    }
}
user.message();
user.name = 'tmk'

user.message();
console.log(this); // it will give empty

function one(){
    console.log(this);
}
one();

const two = () => {
    let username = "love";
    console.log(this); // this will come empty 
}
two()

const addtwo = (num1 , num2) => { // this is the arrow function
     return num1+num2;
}
console.log(addtwo(2,3));

const addthree = (num1 , num2) => (num1+num2); // we did not use return statement if we are using () brackets and if we are using {} we need return statement
console.log(addthree(3,4));

const addfour = () => ({username:"love"});  // this is how we declare
console.log(addfour());