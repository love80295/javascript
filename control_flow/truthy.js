 // .................. TRUTHY VALUES AND FALSY VALUES.................

  // falsy values

  // false , 0 ,-0 , BIGINT , "" , 0n , null , defined , nan --> these all are consider as a false values --> all other are consider as a true values
 // truthy values examples -- > "0" , 'false' , ' ' , function(){}
  const mail = "";
  if(mail) console.log("got");
  else console.log("no")

  const m2 = "bdjabcj";
  if(m2) console.log("got");
  else console.log("no");

  // checking object
  const myobj = {};
  if(Object.keys(myobj).length===0) console.log("empty");
  else console.log("not ");

  // nullish coalescing operator(??) -- > this operator is for null and undefined

  let val1;
  val1 = 5??10; // the answer will come 5 if both the values are not null then choose 1st one if any of them is null choose 2nd one
  console.log(val1)
   val1 = null?? 10;
   console.log(val1);
   val1 = null??undefined; // choose undefined
   console.log(val1);


   // ternary operator -- >to convert it else into one statement 
   // condition ? true statement : false statement 
const a = 10;
a===10 ? console.log("equal to 10") : console.log("not");