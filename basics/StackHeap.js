// stack is used in primitive type (we get copy)
// heap is used in non primitive type(we get refence)


// heap example

let obj1 = {
    email: "love@gmail.com"
}
console.log(obj1.email)
let obj2 = obj1;
obj2.email = "hfwbh@gmail.com";
console.log(obj1.email) // because of pass by reference 
console.log(obj2.email)