 // DATES

 let mydate = new Date();
 console.log(mydate); // not in a readable format
 console.log(mydate.toDateString()); // another way converts date into string . do not give time
 console.log(mydate.toLocaleString()); // another way gives time as well
 let another = new Date(2023 ,  0 , 11 , 5 , 16 , 32);
 console.log(another.toLocaleString()); 
let ano1 = new Date("2026-05-24");
console.log(ano1.toLocaleString());
let time = Date.now();
console.log(Math.floor(Date.now()/1000)); // gives how many miliseconds


